import { MouseEventHandler } from "react";
import "./button.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  nav?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const DefaultButton = ({ title, nav, handleClick, href }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={href ? () => navigate(href) : handleClick}
      className={`btn ${nav ? "nav__button" : ""}`}
    >
      <p>{title}</p>
      <img src="/arrow.svg" alt="" />
    </button>
  );
};

export default DefaultButton;
