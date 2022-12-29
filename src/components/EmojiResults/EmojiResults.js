import "./EmojiResults.css";
import EmojiElement from "../EmojiElement/EmojiElement";
import { emojiDataResults } from "../../Features/filterEmoji";

const EmojiResults = () => {
  return (
    <div className="emoji__result">
      {emojiDataResults.map((item) => {
        const codepointHex = item.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codepointHex}.png`;
        return <EmojiElement src={src} alt={item.title} title={item.title} />;
      })}
    </div>
  );
};

export default EmojiResults;
