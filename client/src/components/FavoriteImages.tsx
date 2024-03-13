import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

export const FavoriteImages = () => {
  const { user } = useAuth0();
  //ett get anrop från servern
  //en map på bilderna

  // en get i server sidan på userId

  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    //om det inte finns en användare så ska den ej göra något, if sats, med en return så den hoppar ur

    const fetchFavoriteImages = async () => {
      try {
        const response = await axios.get(
          `http:localhost:3000/users/${user?.email}/favorites`
        );
        setFavoriteImages(response.data);
      } catch (error) {
        console.log("kunde ej hämta favvobilderna", error);
      }
    };

    fetchFavoriteImages();
  }, [user?.email]);

  return <></>;
};
