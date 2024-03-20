import { useAuth0 } from "@auth0/auth0-react";
import { SearchForm } from "../components/SearchForm";
import safariImg from "../img/safari 2 med text.png";
import "../styles/Home.css";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    <div className="homeContainer">
      <img src={safariImg} alt="A picture of colorful safari animals." className="safariImage" />

      {isAuthenticated ? (
        <>
          <SearchForm />
        </>
      ) : (
        <h2>You have to log in to be able to search for images.</h2>
      )}
      </div>
    </>
  );
};
