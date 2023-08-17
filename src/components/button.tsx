import { MouseEventHandler } from "react";
import "./button.scss";

interface Props {
  title: string;
  nav?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const DefaultButton = ({ title, nav, handleClick }: Props) => {
  return (
    <button onClick={handleClick} className={`btn ${nav ? "nav__button" : ""}`}>
      <p>{title}</p>
      <img src="/arrow.svg" alt="" />
    </button>
  );
};

export default DefaultButton;
