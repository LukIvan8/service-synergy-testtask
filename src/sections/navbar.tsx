import { useState } from "react";
import DefaultButton from "../components/button";
import "./navbar.scss";
import ContactModal from "../components/contact-modal";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__brand">
          <img width={22} height={22} src="/icon-white.svg" />
          <p>
            service <span>energy</span>
          </p>
        </div>
        <div className="nav__navigation">
          <div className="nav__links">
            <a>About</a>
            <div>
              Services <img src="/triangle.svg" alt="" />
            </div>
          </div>
          <DefaultButton
            handleClick={() => setModal(true)}
            title="Contact Us"
            nav
          />
          <button className="nav__menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="6" y="6" width="4" height="4" rx="2" fill="white" />
              <rect x="14" y="6" width="4" height="4" rx="2" fill="white" />
              <rect x="14" y="14" width="4" height="4" rx="2" fill="white" />
              <rect x="6" y="14" width="4" height="4" rx="2" fill="white" />
            </svg>
          </button>
        </div>
      </nav>
      {modal ? <ContactModal hideModal={() => setModal(false)} /> : null}
    </>
  );
};

export default Navbar;
