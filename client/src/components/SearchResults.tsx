import React, { useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const SearchResults: React.FC<{ results: ISearchResults[] }> = ({
  results,
}) => {
  const { user } = useAuth0();
  // console.log(user);
  const [favoriteImage, setFavoriteImage] = useState("");

  const saveUserImages = async (
    title: string,
    byteSize: number,
    image: string
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",

        {
          userId: user?.email,
          favoriteImage: [
            {
              title: title,
              byteSize: byteSize,
              imageURL: image,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("användaren är sparad", response.data);
    } catch (error) {
      console.log("användaren sparades inte", error);
    }
  };

  const handleImages = (title: string, byteSize: number, imageURL: string) => {
    setFavoriteImage(imageURL);
    saveUserImages(title, byteSize, imageURL);
  };

  return (
    <>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <img src={result.link} alt={result.title} />
          <button
            onClick={() =>
              handleImages(result.title, result.image.byteSize, result.link)
            }
          >
            Favvo knappen
          </button>
        </div>
      ))}
    </>
  );
};
