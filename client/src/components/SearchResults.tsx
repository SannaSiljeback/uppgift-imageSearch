import React from "react";
import { ISearchResults } from "../models/ISearchResults";
import axios from "axios";

export const SearchResults: React.FC<{ results: ISearchResults[] }> = ({
  results,
}) => {

  const saveUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        //ska /api vara med innan users?
        {
          userName: "testUser",
          favoriteImage: "testImage",
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


  return (
    <>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <img src={result.link} alt={result.title} />
          <button onClick={saveUser}>Favvo knappen</button>
        </div>
      ))}
    </>
  );
};
