import logo from "../../assets/Logo.svg";
import { navLink } from "../../Data/Stats";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../index.css";

const Navbar = () => {

  let navigation = navLink.map((link, index) => {
    return (
      <li key={index}>
        <NavLink to={link.to}>{link.title}</NavLink>
      </li>
    );
  });

  return (
    <>
      {/* Logo Display */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="GNLife logo" />
          <p>GNLife Tech Network</p>
        </div>

        {/* Navigation list */}
        <nav className="navigation-list">
          <ul className="nav-links">{navigation}</ul>
        </nav>

        <div className="login-sign-in">
          <Link> <span>Login</span></Link>
          <button>
            <Link>Sign up</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
