import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
