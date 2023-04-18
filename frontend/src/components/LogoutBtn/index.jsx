import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="text-white">
        Logout
      </button>
    )
  );
};

export default LogoutBtn;
