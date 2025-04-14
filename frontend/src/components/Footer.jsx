import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__left">
          <NavLink to="/" className="footer__logo">
          <i class="ri-earth-fill"></i>SignWays
          </NavLink>

          <p className="footer__description">
          Redefining the way you communicate, connect, and<br />understand in a world where every sign matters.
          </p>
        </div>

        <div className="footer__content grid">
          <div>
            <h3 className="footer__title">COMPANY</h3>

            <ul className="footer__links">
              <li>
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="footer__link">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">SOCIAL MEDIA</h3>

            <div className="footer__social">
              <a
                href="https://www.linkedin.com/in/mannanali123/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>

              <a
                href="https://github.com/Mannan-Ali"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-github-fill"></i>
              </a>

              <a
                href="https://x.com/mack__21"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="footer__copy">
            &#169; All Rights Reserved By SignWays
        </span>
    </footer>
  );
};

export default Footer;
