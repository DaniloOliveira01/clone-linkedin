import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAO9MjOw9fF-ko9WD-8AeAR-0pa6BpfU68",
  authDomain: "linkedin-clone-app-cbac9.firebaseapp.com",
  projectId: "linkedin-clone-app-cbac9",
  storageBucket: "linkedin-clone-app-cbac9.appspot.com",
  messagingSenderId: "336355903579",
  appId: "1:336355903579:web:fbd1aef370e3211624d77e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export default db;