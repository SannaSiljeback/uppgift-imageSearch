import { NavLink } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
   const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoriter</NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
