import DefaultButton from "../components/button";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-divider"></div>
      <div className="contact-container">
        <div className="content">
          <p className="title">Ready to work with us?</p>
          <p className="secondary">
            Drop us a line and we will contact you shortly!
          </p>
        </div>
        <DefaultButton title={"Contact Us"} />
      </div>
      <div className="copyright">
        <p>&copy; 2023 servicesynergy.io </p>
      </div>
    </div>
  );
};

export default Footer;
