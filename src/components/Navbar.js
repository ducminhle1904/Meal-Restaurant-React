import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "sitenav active" : "sitenav"}>
      <div className="container-fluid">
        <div className="site-navigation">
          <Link to="/" className="logo">
            Meal<span className="text-primary">.</span>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="menu.html">Menu</a>
              {/* <ul>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>  */}
            </li>
            <li>
              <Link to="/gallery">Gellery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <a href="#" className="btn">
            Book a table
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
