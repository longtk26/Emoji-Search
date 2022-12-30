import "./EmojiElement.css";

const EmojiElement = ({ src, alt, title, symbol }) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(symbol);
  };

  return (
    <div className="emoji__item" onClick={copyToClipBoard}>
      <img src={src} alt={alt} />
      <p>{title}</p>
      <span className="emoji__copy">Click to copy emoji</span>
    </div>
  );
};

export default EmojiElement;
