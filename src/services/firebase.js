import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { storageOrigin } from "firebase-tools/lib/api";

const firebaseConfig = {
  apiKey: "AIzaSyAO9MjOw9fF-ko9WD-8AeAR-0pa6BpfU68",
  authDomain: "linkedin-clone-app-cbac9.firebaseapp.com",
  projectId: "linkedin-clone-app-cbac9",
  storageBucket: "linkedin-clone-app-cbac9.appspot.com",
  messagingSenderId: "336355903579",
  appId: "1:336355903579:web:fbd1aef370e3211624d77e"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =  getAuth(app);
const provider = new auth.GoogleAuthProvider(app);
const storage = storageOrigin(app);

export { auth, provider, storage };
export default db;