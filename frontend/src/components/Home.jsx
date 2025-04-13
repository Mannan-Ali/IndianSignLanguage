import { NavLink } from "react-router-dom";

//images
import communication from "../assets/img/communication1.png";
import arrow from "../assets/img/self-esteem.png";

const Home = () => {
  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <section className="home section home__sec" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              EVERY SIGN <br />
              <span>CONVEYS</span> A
              <br />
              UNIQUE STORY
              <br />
            </h1>
            <p className="home__description">
              <p className="home__description">
                Every gesture matters. With technology that sees, understands,
                and respects your language — we&apos;re building a world where
                communication has no barriers.
              </p>
            </p>
            <div className="home__buttons">
              <NavLink to="/videoToSign" className="button">
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
      <section className="desc section  desc__sec" id="Description">
        <h2 className="section__title">
          CLOSER LOOK AT <br />
          OUR VISION
        </h2>
        <div className="desc__container container grid">
          <img src={arrow} alt="image" className="desc__img" />

          <ul className="desc__list">
            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Sign language recognition made simple, accessible to everyone in
                real-time.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Empowering communication for all, breaking down barriers with
                every sign.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Built with advanced technology to recognize, understand, and
                translate ISL accurately.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Seamless and intuitive interface for users, enhancing
                accessibility across all platforms.
              </p>
            </li>

            <li className="desc__item">
              <i className="ri-checkbox-fill"></i>
              <p>
                Designed with respect for the Deaf community, ensuring
                inclusivity in every interaction.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
