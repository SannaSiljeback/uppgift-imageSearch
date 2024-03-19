import React, { useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const SearchResults: React.FC<{ results: ISearchResults[] }> = ({
  results,
}) => {
  const { user } = useAuth0();
  const [favoriteImage, setFavoriteImage] = useState("");

  const saveUserImages = async (
    imageUrl: string
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",

        {
          userId: user?.email,
          favoriteImage: imageUrl
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
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <img src={result.link} alt={result.title} />
          <button
            onClick={() =>
              handleImages(result.link)
            }
          >
            Favvo knappen
          </button>
        </div>
      ))}
    </>
  );
};
