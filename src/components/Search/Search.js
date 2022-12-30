import { useState } from "react";

import "./Search.css";
import { filterEmoji } from "../../Features/filterEmoji";
import EmojiResults from "../EmojiResults/EmojiResults";

const Search = () => {
  const [search, setSearch] = useState("");
  const datas = filterEmoji(search, 20);

  return (
    <>
      <div className="search">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <EmojiResults datas={datas} />
    </>
  );
};

export default Search;
