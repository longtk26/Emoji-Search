import "./EmojiElement.css";

const EmojiElement = ({ src, alt, title }) => {
  return (
    <div className="emoji__item">
      <img src={src} alt={alt} />
      <p>{title}</p>
      <span className="emoji__copy">Click to copy emoji</span>
    </div>
  );
};

export default EmojiElement;
