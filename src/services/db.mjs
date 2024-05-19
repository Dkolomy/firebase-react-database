import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
<<<<<<< HEAD
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
=======
>>>>>>> 73e9fe48bb1fdc784268ab66368069701d8575ca
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
