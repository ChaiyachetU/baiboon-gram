import React from "react";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();

  return (
    <div className="header">
      <h1>BaiBoonGram</h1>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
