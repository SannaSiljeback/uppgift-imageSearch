import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { SearchForm } from "./components/SearchForm";
import axios from "axios";

function App() {
  const { isAuthenticated } = useAuth0();

  const saveUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        {
          userName: "testUser",
          favoriteImage: "testImage",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          //en body stringify här?
        }
      );

      console.log("användaren är sparad", response.data);
    } catch (error) {
      console.log("användaren sparades inte", error);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <SearchForm /> <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

export default App;
