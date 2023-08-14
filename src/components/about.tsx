import "./about.scss";

const About = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="bg"></div>
      <div className="about-wrapper">
        <div className="about-title">
          <img src="/icon-yellow.svg" alt="" />
          <p> Who we are</p>
        </div>
        <div className="about-content">
          <p>
            We are a team of experienced legal consultants dedicated to helping
            businesses succeed in today's fast-paced and ever-changing business
            environment.
          </p>
          <p>
            We understand that navigating legal challenges can be daunting and
            time-consuming, which is why we work closely with our clients to
            develop customized solutions that meet their specific needs and
            goals
          </p>
          <p>
            Whether you're just starting out and need help with business
            incorporation, or you're an established business looking to expand
            into new markets, we have the expertise and industry knowledge to
            help you achieve your objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
