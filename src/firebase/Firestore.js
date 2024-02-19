import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
  getDocs,
  writeBatch,
  where,
} from "firebase/firestore";

export const myAddGeneral = async (collectionName, formData) => {
  const docRef = doc(collection(db, collectionName));
  await setDoc(docRef, formData);
};
