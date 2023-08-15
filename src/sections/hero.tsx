import DefaultButton from "../components/button";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h2 className="hero__header">
        Where legal knowledge <span>meets business strategy</span>
      </h2>
      <p className="hero__content">
        Collaborative solutions for <br />
        <span>complex legal challenges.</span>
      </p>
      <DefaultButton title="Learn More" />
    </div>
  );
};

export default Hero;
