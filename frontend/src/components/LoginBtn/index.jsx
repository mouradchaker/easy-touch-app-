import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginBtn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} className="text-white">
        Login
      </button>
    )
  );
};

export default LoginBtn;
