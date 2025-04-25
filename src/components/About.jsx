import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const renderTabContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <ul>
            <li>
              <span>HTML & CSS</span>
              <br />
              The basics always work.
            </li>
            <li>
              <span>JavaScript</span>
              <br />
              To bring functionality to the site.
            </li>
            <li>
              <span>React (Basic)</span>
              <br />
              Exploring component-based development and state management.
            </li>
          </ul>
        );
      case "experience":
        return (
          <ul>
            <li>
              <span>FronEnd</span>
              <br />
              Online courses and projects.
              <br />
              Landing Pages, Portfolio, and more.
              <br />
              React projects.
            </li>
          </ul>
        );
      case "education":
        return (
          <ul>
            <li>
              <span>2022 - 2023</span>
              <br />
              Systems analysis and development - IESB College
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/user.png" alt="User" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I am a FrontEnd developer with a passion for creating beautiful
              and functional websites. I have experience in HTML, CSS, and
              JavaScript, and I am currently learning React to enhance my
              skills. I enjoy working on projects that challenge me and allow me
              to grow as a developer.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>
            <div className="tab-contents active-tab">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
