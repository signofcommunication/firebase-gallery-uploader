import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { app, storage, db } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [images, setImages] = useState([]);
  const collectionRef = collection(db, "images");
  const auth = getAuth();

  async function uploadUrl(url) {
    try {
      await addDoc(collectionRef, {
        imageUrl: url,
      });
    } catch (err) {
      alert(err.message);
    }
  }

  async function getData() {
    try {
      const data = await getDocs(collectionRef);
      setImages(data.docs?.map(item => item.data()));
    } catch (e) {
      console.log(e.message);
    }
  }

  function imageUpload(path, data) {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, data);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            alert("Upload is paused");
            break;
          case "running":
            alert("Upload is running");
            break;
          default:
            return;
        }
      },
      error => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log("File available at", downloadURL);
          uploadUrl(downloadURL);
        });
      }
    );
  }

  async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout(email, password) {
    return signOut(auth);
  }

  const value = {
    register,
    login,
    user,
    error,
    imageUpload,
    images,
    logout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    getData();
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
}

export { useAuth, AuthProvider };
