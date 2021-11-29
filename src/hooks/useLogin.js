import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "@firebase/auth";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError("⚠️ " + err.message.split("/")[1].split(")")[0]);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error };
};

export default useLogin;
