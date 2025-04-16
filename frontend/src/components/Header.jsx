import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
// rafc

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //// Get the current location to track the URL hash for functioning of isActive
  const location = useLocation();
  //here we are checking is hash matches the current location then the class will be applied on Description
  const isActive = (hash) => {
    return location.hash === hash;
  };

  //to toggle the visibility of menu bar
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <i class="ri-earth-fill"></i>
          <span>SignWays</span>
        </NavLink>

        <div className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <HashLink
                smooth
                to="/#home"
                end
                className={
                  isActive("#home") ? "nav__link active-link" : "nav__link"
                }
                onClick={closeMenu}
              >
                Home
              </HashLink>
            </li>

            <li className="nav__item">
              <HashLink
                smooth
                to="/about"
                className={
                  isActive("#Description")
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={closeMenu}
              >
                About
              </HashLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/learnSign"
                className={({ isActive }) =>
                  isActive ? `nav__link active-link` : `nav__link`
                }
              >
                Learn
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/videoToSign"
                className={({ isActive }) =>
                  isActive ? `nav__link active-link` : `nav__link`
                }
              >
                Generate
              </NavLink>
            </li>
          </ul>

          {/* <!-- close button --> */}
          <div className="nav__close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__actions">
          {/* <!-- Toggle Button --> */}
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
