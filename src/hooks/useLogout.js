import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "@firebase/auth";
import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);

    try {
      await signOut(auth);

      dispatch({ type: "LOGOUT" });
    } catch (err) {
      setError(err.message);
    }
  };

  return { logout, error };
};

export default useLogout;
