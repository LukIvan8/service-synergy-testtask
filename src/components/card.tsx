import { Link } from "react-router-dom";
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
    <div
      className={`card__container ${wide ? "wide" : ""}`}
      style={{ position: "relative", height: "100%" }}
    >
      <div className="card__bg"></div>
      <div className="card">
        <div className="card__content">
          <p className="card__content__title">{title}</p>
          <img src={image} alt="" />
          {wide && wideText !== undefined && wideText.length === 2 ? (
            <div className="card__content__wide-text">
              <p>{wideText[0]}</p>
              <p>{wideText[1]}</p>
            </div>
          ) : undefined}
          <p className="card__content__text">{text}</p>
          <Link to="/about">learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
