import React from "react";
import "../styles/Home.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Josh</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating
            (change this)
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JavaScript, ReactJs, NextJs, MaterialUI, NPM, Yarn,
              WordPress
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJs, ExpressJs, Python, REST API, MongoDB, SQL, MS SQL, SSMS
            </span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>Ansible, Splunk, PowerShell, Figma</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
