import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

//gilla knapp som ett hjärta
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
        console.log("kunde ej hämta favvobilderna", error);
      }
    };

    fetchFavoriteImages();
  }, [user?.email]);

  return (
    <>
      <h1>All you're favorite pictures</h1>

      {favoriteImages.length === 0 ? (
        <p>You don't have any favorite pictures yet...</p>
      ) : (
        favoriteImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={image} />
          </div>
        ))
      )}
    </>
  );
};
