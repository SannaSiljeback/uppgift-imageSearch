import React, { useEffect, useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/SearchResults.css";
import { FaHeart } from "react-icons/fa";

export const SearchResults: React.FC<{ results: ISearchResults[] }> = ({
  results,
}) => {
  const { user } = useAuth0();
  const [favoriteImage, setFavoriteImage] = useState<string[]>([]);

  const [shuffledResults, setShuffledResults] = useState<ISearchResults[]>([]);

  const shuffleResults = (array: ISearchResults[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomImages = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomImages]] = [
        shuffledArray[randomImages],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    setShuffledResults(shuffleResults(results));
  }, [results]);

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

      console.log("User images are saved!", response.data);
    } catch (error) {
      console.log("Could not save user images", error);
    }
  };

  const handleImages = (imageUrl: string) => {
    if (favoriteImage.includes(imageUrl)) {
      setFavoriteImage(favoriteImage.filter((image) => image !== imageUrl));
    } else {
      setFavoriteImage([...favoriteImage, imageUrl]);
    }

    saveUserImages(imageUrl);
  };

  return (
    <>
      <div className="resultsContainer">
        {shuffledResults.map((result, index) => (
          <div key={index} className="resultsItems">
            <img src={result.link} alt={result.title} className="resultsImg" />
            <button
              onClick={() => handleImages(result.link)}
              className={`resultsBtn ${
                favoriteImage.includes(result.link) ? "favorite" : ""
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
