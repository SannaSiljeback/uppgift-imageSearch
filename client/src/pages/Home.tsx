import { useAuth0 } from "@auth0/auth0-react";
import { SearchForm } from "../components/SearchForm";
import { LogoutButton } from "../components/LogoutButton";
import { LoginButton } from "../components/LoginButton";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h2>Här är image search</h2>

      {isAuthenticated ? (
        <>
          <SearchForm />
        </>
      ) : (
        <h2>du måste vara inloggad</h2>
      )}     

      
    </>
  );
};
