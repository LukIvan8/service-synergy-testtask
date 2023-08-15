import "./button.scss";

interface Props {
  title: string;
  nav?: boolean;
}

const DefaultButton = ({ title, nav }: Props) => {
  return (
    <button className={`btn ${nav ? "nav__button" : ""}`}>
      <p>{title}</p>
      <img src="/arrow.svg" alt="" />
    </button>
  );
};

export default DefaultButton;
