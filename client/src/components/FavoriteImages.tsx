import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/FavoriteImages.css";

//en delete knapp

export const FavoriteImages = () => {
  const { user } = useAuth0();

  const [favoriteImages, setFavoriteImages] = useState<string[]>([]);

  useEffect(() => {
    if (!user || !user?.email) return;

    const fetchFavoriteImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user?.email}/favorites`
        );
        console.log(response.data);

        setFavoriteImages(response.data);
      } catch (error) {
        console.log("Could not fetch favorite images", error);
      }
    };

    fetchFavoriteImages();
  }, [user?.email]);

  return (
    <>
    <h1>All your favorite images!</h1>
    <div className="favoriteContainer">
      

      {favoriteImages.length === 0 ? (
        <h3 className="text">You don't have any favorite pictures yet...</h3>
      ) : (
        favoriteImages.map((image, index) => (
          <div key={index} className="favoriteItems">
            <img src={image} alt={image} className="favoriteImg"/>
          </div>
        ))
      )}
      </div>
    </>
  );
};
