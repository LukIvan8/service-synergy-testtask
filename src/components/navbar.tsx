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
          <a href="/">About</a>
          <div>
            Services <img src="/triangle.svg" alt="" />
          </div>
        </div>
        <button>
          <p>Contact Us</p>
          <img src="/arrow.svg" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
