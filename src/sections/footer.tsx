import { useState } from "react";
import DefaultButton from "../components/button";
import "./footer.scss";
import ContactModal from "../components/contact-modal";

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="footer__container">
        <div className="footer__divider"></div>
        <div className="footer">
          <div className="footer__content">
            <p className="footer__content__title">Ready to work with us?</p>
            <p className="footer__content__secondary">
              Drop us a line and we will contact you shortly!
            </p>
          </div>
          <DefaultButton
            handleClick={() => setModal(true)}
            title={"Contact Us"}
          />
        </div>
        <div className="copyright">
          <p>&copy; 2023 servicesynergy.io </p>
        </div>
      </div>
      {modal ? <ContactModal hideModal={() => setModal(false)} /> : null}
    </>
  );
};

export default Footer;
