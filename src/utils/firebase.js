import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
