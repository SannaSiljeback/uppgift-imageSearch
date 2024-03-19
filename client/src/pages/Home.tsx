import { useAuth0 } from "@auth0/auth0-react";
import { SearchForm } from "../components/SearchForm";
// import safariImage from "../img/safari 2.png";
import safariImg from "../img/safari 2 med text.png";
import "../styles/Home.css";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <img src={safariImg} alt="A picture of colorful safari animals." className="safariImage" />

      {/* <h2>Photo Safari</h2> */}

      {isAuthenticated ? (
        <>
          <SearchForm />
        </>
      ) : (
        <h3>You have to log in to be able to search for pictures.</h3>
      )}
    </>
  );
};
