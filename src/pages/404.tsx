import "./404.scss";
import Navbar from "../sections/navbar";

const UnderConstruction = () => {
  return (
    <>
      <Navbar />
      <div className="error">
        <img src="/developing.webp" alt="" />
        <p>This page is under construction</p>
      </div>
    </>
  );
};

export default UnderConstruction;
