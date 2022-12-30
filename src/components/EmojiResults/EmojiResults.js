import "./EmojiResults.css";
import EmojiElement from "../EmojiElement/EmojiElement";

const EmojiResults = ({ datas }) => {
  return (
    <div className="emoji__result">
      {datas.map((item, index) => {
        const codepointHex = item.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codepointHex}.png`;
        return (
          <EmojiElement
            key={index}
            src={src}
            alt={item.title}
            title={item.title}
            symbol={item.symbol}
          />
        );
      })}
    </div>
  );
};

export default EmojiResults;
