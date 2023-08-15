import DefaultButton from "../components/button";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__divider"></div>
      <div className="footer">
        <div className="footer__content">
          <p className="footer__content__title">Ready to work with us?</p>
          <p className="footer__content__secondary">
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
