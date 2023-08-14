import "./card.scss";

interface Props {
  title: string;
  text: string;
  image: string;
  wide?: boolean;
  wideText?: string[];
}

const Card = ({ title, text, image, wide, wideText }: Props) => {
  return (
    <div className={`card-wrapper ${wide ? "wide" : ""}`}>
      <div className="card-bg"></div>
      <div className="card">
        <div className="card-content">
          <p className="title">{title}</p>
          <img src={image} alt="" />
          {wide && wideText !== undefined && wideText.length === 2 ? (
            <div className="wide-text">
              <p>{wideText[0]}</p>
              <p>{wideText[1]}</p>
            </div>
          ) : undefined}
          <p className="text">{text}</p>
          <a href="">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
