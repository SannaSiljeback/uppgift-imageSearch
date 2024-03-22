import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/FavoriteImages.css";
import { BsFillTrash3Fill } from "react-icons/bs";

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

  const handleDelete = async (imageUrl: string) => {
    const encodedImageUrl = encodeURIComponent(imageUrl);
    try {
      await axios.delete(
        `http://localhost:3000/users/${user?.email}/favorites/${encodedImageUrl}`
      );
      setFavoriteImages(favoriteImages.filter((image) => image !== imageUrl));
    } catch (error) {
      console.log("Could not delete image", error);
    }
  };

  return (
    <>
      <h1>All your favorite images!</h1>

      {favoriteImages.length === 0 && (
        <h3 className="text">You don't have any favorite images yet...</h3>
      )}

      <div className="favoriteContainer">
        {favoriteImages.map((image, index) => (
          <div key={index} className="favoriteItems">
            <img src={image} alt={image} className="favoriteImg" />
            <button onClick={() => handleDelete(image)} className="deleteBtn">
              <BsFillTrash3Fill />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
