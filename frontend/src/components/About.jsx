import React from "react";
import "../styles/about.css";

const About = () => {
  const supervisors = [
    {
      id: 1,
      name: "Dr. Vijay Kumar Trivedi",
      title: "Project Supervisor",
      designation: "Associate Professor, Department of Computer Science",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Dr. Adnan Abbasi",
      title: "Project Reviewer",
      designation: "Assistant Professor",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Dr. Abha Trivedi",
      title: "Project Reviewer",
      designation: "Assistant Professor",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Aditya Sharma",
      role: "Team Lead & ML Engineer",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      linkedin: "https://linkedin.com/in/adityasharma",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      linkedin: "https://linkedin.com/in/priyapatel",
    },
    {
      id: 3,
      name: "Arjun Singh",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      linkedin: "https://linkedin.com/in/arjunsingh",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "ML Engineer",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      linkedin: "https://linkedin.com/in/nehagupta",
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      linkedin: "https://linkedin.com/in/rajeshkumar",
    },
    {
      id: 6,
      name: "Meera Verma",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      linkedin: "https://linkedin.com/in/meeraverma",
    },
    {
      id: 7,
      name: "Vikram Rao",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      linkedin: "https://linkedin.com/in/vikramrao",
    },
    {
      id: 8,
      name: "Ananya Reddy",
      role: "ML Engineer",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      linkedin: "https://linkedin.com/in/ananyareddy",
    },
    {
      id: 9,
      name: "Siddharth Joshi",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      linkedin: "https://linkedin.com/in/siddharthjoshi",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="project-logo-placeholder">
          <span>ISL</span>
        </div>
        <h1 className="project-title">Indian Sign Language Recognition</h1>
        <p className="project-subtitle">
          Bridging communication gaps through advanced machine learning
          technology
        </p>
      </div>

      <div className="about-section">
        <h2>About the Project</h2>
        <p>
          The Indian Sign Language Recognition project aims to create an
          accessible platform for real-time translation of Indian Sign Language
          gestures into text and speech. Leveraging cutting-edge machine
          learning algorithms and computer vision techniques, our application
          works to break down communication barriers faced by the deaf and
          hearing-impaired community in India.
        </p>
        <p>
          This initiative represents a significant step forward in making
          digital technology more inclusive and accessible to all members of
          society.
        </p>
      </div>

      <div className="supervisor-section">
        <h2>Project Supervisors</h2>
        <div className="supervisor-grid">
          {supervisors.map((supervisor) => (
            <div className="supervisor-card" key={supervisor.id}>
              <div className="supervisor-image">
                <img src={supervisor.image} alt={supervisor.name} />
              </div>
              <div className="supervisor-details">
                <h3>{supervisor.name}</h3>
                <h4>{supervisor.title}</h4>
                <p className="supervisor-designation">
                  {supervisor.designation}
                </p>
                <p className="supervisor-bio">{supervisor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-section">
        <h2>Project Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-details">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
