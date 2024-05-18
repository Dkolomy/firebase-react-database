// https://www.rowy.io/blog/firestore-react-query

import {
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { getDb } from "./db.mjs";

const collection_name = "countries";

export const findAll_1 = async () => {
  // retrieving the whole collection
  const doc_refs = await getDocs(collection(getDb(), collection_name));
  const res = [];
  doc_refs.forEach((country) => {
    res.push({
      id: country.id,
      ...country.data(),
    });
  });

  return res;
};

// Get A Single Document By ID
export const findOne_1 = async (id) => {
  const d = await getDoc(doc(getDb(), collection_name, id));
  return d.data();
};

// Filtering Firestore Documents With Where
export const findByContinent = async () => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, where("continent", "==", "Asia"));
  const doc_refs = await getDocs(q);

  const res = [];
  doc_refs.forEach((country) => {
    res.push({
      id: country.id,
      ...country.data(),
    });
  });

  return res;
};

// Sorting Documents With Order By
export const findByAlphabeticalOrder = async () => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, orderBy("name"), limit(5));
  const doc_refs = await getDocs(q);

  const res = [];
  doc_refs.forEach((country) => {
    res.push({
      id: country.id,
      ...country.data(),
    });
  });

  return res;
};
