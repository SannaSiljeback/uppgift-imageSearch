import { useAuth0 } from "@auth0/auth0-react";
import "../styles/LogoutButton.css";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logoutBtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};