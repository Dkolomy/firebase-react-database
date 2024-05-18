import {
  getDocs,
  getDoc,
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getDb } from "./db.mjs";

const collection_name = "todo";

export const findAll = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  doc_refs.forEach((todo) => {
    res.push({
      id: todo.id,
      ...todo.data(),
    });
  });

  return res;
};

export const findOne = async (id) => {
  const d = await getDoc(doc(getDb(), collection_name, id));
  return d.data();
};

export const create = (args) =>
  addDoc(collection(getDb(), collection_name), args);

export const update = (args) => {
  const { id, ...params } = args;
  return setDoc(doc(getDb(), collection_name, id), params);
};

export const del = (id) => deleteDoc(doc(getDb(), collection_name, id));
