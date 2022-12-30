import emojiList from "../emojiList.json";

export const filterEmoji = (searchText, maxResult) => {
  const result = emojiList
    .filter((emoji) => {
      const appearText = emoji.keywords
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return appearText;
    })
    .slice(0, maxResult);
  return result;
};
