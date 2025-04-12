import { NavLink } from "react-router-dom";

//images
import communication from "../assets/img/communication.png";

const Home = () => {
  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <section className="home section" id="home">
        <div className="home__container container grid">

          <div className="home__data">
            <h1 className="home__title">
              THE FUTURE <br />
              <span>FINANCE</span> IN
              <br />
              YOUR HANDS
              <br />
            </h1>
            <p className="home__description">
              <p className="home__description">
                Take control of your investments with a token that&apos;s built
                for the future. Offering fast, secure, and seamless transactions
                that empower your financial goals.
              </p>
            </p>
            <div className="home__buttons">
              <NavLink
                to="/videoToSign"
                className="button"
              >
                <span>
                  <i className="ri-arrow-right-line"></i>
                </span>
                GENERATE
              </NavLink>
            </div>
          </div>
          <img src={communication} alt="image" className="home__img" />
        </div>
        
      </section>

      {/* <!--==================== DESCRIPTION ====================--> */}
      <section className="desc section" id="Description">
        <h2 className="section__title">
          CLOSER LOOK AT <br />
          OUR VISION
        </h2>
        <div className="desc__container container grid">
          <img src={communication} alt="image" className="desc__img" />

          <ul className="desc__list">
            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                1 MannanCoin = 0.001 ETH, making it accessible for everyone.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Tokens are limited to 1,000,000, ensuring exclusivity and value.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>Backed by secure smart contracts and built on Ethereum.</p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Buy tokens securely with real-time tracking and transparent
                pricing.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Empowering investors with exclusive access to next-gen
                cryptocurrency.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
