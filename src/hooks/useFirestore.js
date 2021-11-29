import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "baiboonImages");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });

    return () => unsub();
  }, []);

  return { docs };
};

export default useFirestore;
