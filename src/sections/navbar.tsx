import { useState } from "react";
import DefaultButton from "../components/button";
import "./navbar.scss";
import ContactModal from "../components/contact-modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <div className="nav__brand">
            <img width={22} height={22} src="/icon-white.svg" />
            <p>
              service <span>energy</span>
            </p>
          </div>
        </Link>
        <div className="nav__navigation">
          <div className="nav__links">
            <Link to="/about">About</Link>
            <div className="nav__dropdown">
              <div className="nav__dropdown__header">
                <p>Services</p> <img src="/triangle.svg" alt="" />
              </div>
              <div className="nav__dropdown__content">
                <Link to="/about">Legal Consultancy</Link>
                <Link to="/about">Business Incorporation</Link>
                <Link to="/about">Banks & Crypto Solutions</Link>
                <Link to="/about">AML & Compliance</Link>
                <Link to="/about">HR & Office Rent</Link>
              </div>
            </div>
          </div>
          <DefaultButton
            handleClick={() => setModal(true)}
            title="Contact Us"
            nav
          />
          <button className="nav__menu" onClick={() => setSidebar(!sidebar)}>
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
          {sidebar ? (
            <button
              className="nav__menu nav__menu--open"
              onClick={() => setSidebar(!sidebar)}
            >
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
          ) : null}
        </div>
      </nav>
      {modal ? <ContactModal hideModal={() => setModal(false)} /> : null}
      <div className={`sidebar${sidebar ? " sidebar--open" : ""}`}>
        <div className="sidebar__links">
          <p className="sidebar__heading">General</p>
          <Link to="/about">About</Link>
          <p className="sidebar__heading">Services</p>
          <Link to="/about">Legal Consultancy</Link>
          <Link to="/about">Business Incorporation</Link>
          <Link to="/about">Banks & Crypto Solutions</Link>
          <Link to="/about">AML & Compliance</Link>
          <Link to="/about">HR & Office Rent</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
