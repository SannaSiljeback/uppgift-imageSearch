import { useAuth0 } from "@auth0/auth0-react";
import "../styles/LoginButton.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="loginBtn" onClick={() => loginWithRedirect()}>Log In</button>;
};
