import DefaultButton from "./button";
import "./hero.scss";
import "./radial-bg.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <h2 className="hero-header">
        Where legal knowledge <span>meets business strategy</span>
      </h2>
      <p className="hero-content">
        Collaborative solutions for <br />
        <span>complex legal challenges.</span>
      </p>
      <div className="btn-wrap">
        <DefaultButton title="Learn More" />
      </div>
      {/* <div className="background">
        <img src="/circles.svg" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
