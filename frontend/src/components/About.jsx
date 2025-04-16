import React from "react";
import "../styles/about.css";
import logochhota from "../assets/img/logochhota.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img
          src={logochhota}
          alt="Indian Sign Language Logo"
          className="project-logo"
        />
        <h1 className="project-title">Indian Sign Language Recognition</h1>
        <p className="project-subtitle">
          Bridging communication gaps through advanced machine learning
          technology
        </p>
      </div>

      <div className="about-section">
        <h2>About the Project</h2>
        <p>
          The Indian Sign Language Recognition project is dedicated to
          empowering communication for the deaf and hard-of-hearing community in
          India. Our platform leverages state-of-the-art machine learning and
          computer vision to translate Indian Sign Language gestures into text
          and speech in real time.
        </p>
        <p>
          By providing an accessible and intuitive interface, we aim to foster
          inclusivity and bridge the gap between sign language users and the
          wider society. The project is designed to be scalable, user-friendly,
          and adaptable to various real-world scenarios, including education,
          public services, and daily interactions.
        </p>
        <p>
          We believe that technology should be a force for good, breaking down
          barriers and enabling equal opportunities for all. Our ongoing
          research and development efforts are focused on improving accuracy,
          expanding gesture vocabulary, and ensuring the platform remains
          accessible to everyone.
        </p>
      </div>

      <div className="about-section">
        <h2>Mission Statement</h2>
        <p>
          To make communication seamless and accessible for everyone by
          harnessing technology to bridge the gap between sign language users
          and the broader community.
          <br />
          <br />
          Our mission is to foster a world where language is never a barrier to
          opportunity, inclusion, or understanding. We strive to empower the
          deaf and hard-of-hearing community by providing innovative, reliable,
          and easy-to-use tools that translate Indian Sign Language into spoken
          and written language. Through continuous research, collaboration, and
          user-centered design, we are committed to advancing accessibility,
          promoting awareness, and supporting the social integration of all
          individuals, regardless of their hearing ability.
        </p>
      </div>

      <div className="about-section">
        <h2>Impact & Goals</h2>
        <p>
          Our goal is to empower the deaf and hard-of-hearing community, promote
          inclusivity, and raise awareness about Indian Sign Language. We aim to
          make our solution available in educational institutions, public
          services, and daily life.
        </p>
      </div>

      <div className="about-section how-it-works-section">
        <h2>How It Works</h2>
        <ol className="how-it-works-list">
          <li>User performs a sign in front of their device's camera.</li>
          <li>
            The system captures and processes the gesture using computer vision.
          </li>
          <li>
            Machine learning models interpret the gesture and translate it into
            text and speech.
          </li>
          <li>
            The translation is displayed and/or spoken instantly for effective
            communication.
          </li>
        </ol>
      </div>

      <div className="about-section">
        <h2>Accessibility Commitment</h2>
        <p>
          We are committed to ensuring our platform is accessible to all users,
          regardless of ability. We follow accessibility best practices and
          continuously seek feedback to improve usability.
        </p>
      </div>
    </div>
  );
};

export default About;
