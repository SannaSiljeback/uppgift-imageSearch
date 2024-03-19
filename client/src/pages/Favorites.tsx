import { useAuth0 } from "@auth0/auth0-react";
import { FavoriteImages } from "../components/FavoriteImages";

export const Favorites = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <>
          <FavoriteImages />
        </>
      ) : (
        <h3>
          You have to log in to be able to see you're favorite pictures...
        </h3>
      )}
    </>
  );
};
