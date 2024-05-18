import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  // if (!db) {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyBGVG-usA7gRalcm-ZgRgbhxqW1wPuITgs",
  //     authDomain: "practicenew-6b0af.firebaseapp.com",
  //     projectId: "practicenew-6b0af",
  //     storageBucket: "practicenew-6b0af.appspot.com",
  //     messagingSenderId: "574945103525",
  //     appId: "1:574945103525:web:a4ca1ddb328c4fe540874c",
  //     measurementId: "G-3F8RTT3MS6",
  //   };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
