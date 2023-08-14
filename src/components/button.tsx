import "./button.scss";

interface Props {
  title: string;
  nav?: boolean;
}

const DefaultButton = ({ title, nav }: Props) => {
  return (
    <button className={`main-btn ${nav ? "nav" : ""}`}>
      <p>{title}</p>
      <img src="/arrow.svg" alt="" />
    </button>
  );
};

export default DefaultButton;
