import axios from "axios";
import { useState } from "react";
import { ISearchResults } from "../models/ISearchResults";
import { SearchResults } from "./SearchResults";

// interface ISearchResults {
//   title: string;
//   link: string;
// }

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResults[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearch = async () => {
    //anropet till url
    const url = `https://www.googleapis.com/customsearch/v1?key=${
      import.meta.env.VITE_API_KEY
    }&cx=${
      import.meta.env.VITE_GOOGLE_ID
    }&num=10&searchType=image&q=${inputValue}&lr=lang_sv`;

    try {
      const respone = await axios.get(url);

      console.log(respone.data.items);

      setSearchResults(respone.data.items);
    } catch (error) {
      console.log("Hittade inga bilder", error);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sök efter bilder!"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit" onClick={handleSearch}>
          Sök
        </button>
      </form>
      <SearchResults results={searchResults} />
    </>
  );
};
