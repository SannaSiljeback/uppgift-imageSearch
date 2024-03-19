import { useAuth0 } from "@auth0/auth0-react";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h2>Photo Safari</h2>

      {isAuthenticated ? (
        <>
          <SearchForm />
        </>
      ) : (
        <h3>You have to log in to be able to search for pictures</h3>
      )}     

      
    </>
  );
};
