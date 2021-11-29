import { useState, useEffect } from "react";
import { storage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(storage, `baiboonImages/${file.name}`);
    const collectionRef = collection(db, "baiboonImages");

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        addDoc(collectionRef, { url, createdAt: serverTimestamp() });
        setUrl(url);
      }
    );
  }, [file]);

  return {
    progress,
    url,
    error,
  };
};

export default useStorage;
