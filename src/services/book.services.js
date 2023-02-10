import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook); //adicionar livro na coleção
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id); //atualizar livro baseado no id
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id); //deleta o livro baseado no id
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef); //pega todos os livros da coleção
  };

  getBook = (id) => {
    const bookDoc = doc(db, "books", id); //pega um livro especifico
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
