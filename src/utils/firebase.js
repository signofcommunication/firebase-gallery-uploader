import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtV6yQSLfG_eC7l2JUkbjTJnBy4OvimTY",
  authDomain: "gallery-uploader-47edf.firebaseapp.com",
  projectId: "gallery-uploader-47edf",
  storageBucket: "gallery-uploader-47edf.appspot.com",
  messagingSenderId: "305406707102",
  appId: "1:305406707102:web:3dcd660166a21674db828f",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
