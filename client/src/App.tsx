import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { SearchForm } from "./components/SearchForm";
import { Favorites } from "./components/Favorites";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <SearchForm /> <LogoutButton /> <Favorites />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

export default App;
