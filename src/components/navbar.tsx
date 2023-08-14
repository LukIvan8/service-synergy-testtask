import DefaultButton from "./button";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="brand">
        <img width={22} height={22} src="/icon-white.svg" />
        <p>
          service <span>energy</span>
        </p>
      </div>
      <div className="navigation">
        <div className="links">
          <a>About</a>
          <div>
            Services <img src="/triangle.svg" alt="" />
          </div>
        </div>
        <DefaultButton title="Contact Us" nav />
        <button className="menu">
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
  );
};

export default Navbar;
