import React, { useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/SearchResults.css";
import { FaHeart } from "react-icons/fa";

export const SearchResults: React.FC<{ results: ISearchResults[] }> = ({
  results,
}) => {
  const { user } = useAuth0();
  const [favoriteImage, setFavoriteImage] = useState("");

  const saveUserImages = async (imageUrl: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",

        {
          userId: user?.email,
          favoriteImage: imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User is saved!", response.data);
    } catch (error) {
      console.log("Could not save user", error);
    }
  };

  const handleImages = (imageUrl: string) => {
    setFavoriteImage(imageUrl);


    saveUserImages(imageUrl);
  };

  return (
    <>
      <div className="resultsContainer">
        {results.map((result, index) => (
          <div key={index} className="resultsItems">
            <img src={result.link} alt={result.title} className="img" />
            <button
              onClick={() => handleImages(result.link)}
              className={`btn ${
                favoriteImage === result.link ? "favorite" : ""
              }`}
            >
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
