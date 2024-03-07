import React from "react";
import { ISearchResults } from "./models/ISearchResults";

export const SearchResults: React.FC <{ results: ISearchResults[] }> = ({ results }) => {
    return (
        <>
        {results.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <img src={result.link} alt={result.title} />
        </div>
      ))}
        </>
    )

}