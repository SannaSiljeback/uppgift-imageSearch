import axios from "axios";
import { useEffect, useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import { SearchResults } from "./SearchResults";
import "../styles/SearchForm.css";

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResults[]>([]);
  const [spelling, setSpelling] = useState("");
  const [time, setTime] = useState(0);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearch = async () => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${
      import.meta.env.VITE_API_KEY
    }&cx=${
      import.meta.env.VITE_GOOGLE_ID
    }&num=10&searchType=image&q=${inputValue}`;

    try {
      const response = await axios.get(url);
      

      setTime(response.data.searchInformation.searchTime);

      if (response.data.spelling && response.data.spelling.correctedQuery) {
        setSpelling(response.data.spelling.correctedQuery);
      } else {
        setSpelling("");
      }

      console.log(response.data);
      console.log(response.data.items);

      setSearchResults(response.data.items);
    } catch (error) {
      console.log("Could not find any images", error);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (searchClicked) {
      handleSearch();
      setSearchClicked(false);
    }
  }, [searchClicked]);

  const handleSpelling = () => {
    if (spelling) {
      setInputValue(spelling);
      setSearchClicked(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
        <input
          type="text"
          placeholder="Start you're image safari!"
          value={inputValue}
          onChange={handleInput}
          className="searchInput"
        />
        <button type="submit" onClick={handleSearch} className="searchBtn">
          Sök
        </button>
        </div>
        {time > 0 && <p className="time">You're search took {time} seconds</p>}
        {spelling && (
          <p className="spelling">
            Did you mean:{" "}
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#183A39",
              }}
              onClick={handleSpelling}
            >
              {spelling}
            </span>
            ?
          </p>
        )}
      </form>
      <SearchResults results={searchResults} />
    </>
  );
};
