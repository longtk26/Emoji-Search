import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
