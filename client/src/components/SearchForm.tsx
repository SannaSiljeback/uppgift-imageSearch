import { useState } from "react";

export const SearchForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        //anropar handleSearch och url 
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Sök efter bilder!" value={inputValue} onChange={handleInput} />
      <button type="submit" onClick={handleSearch}>Sök</button>
    </form>
  );
};
