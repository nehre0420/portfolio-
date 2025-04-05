import React from "react";
import "./home.css";


const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <img
          src="https://avatars.githubusercontent.com/u/136724948?v=4"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="title">Hello, I'm sahil</h1>
        <p className="description">A passionate web developer creating beautiful and functional websites.</p>
      </div>

      {/* Projects Section */}
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3 className="project-title">Project 1</h3>
            <p className="project-description">Brief description of the project.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Project 2</h3>
            <p className="project-description">Brief description of the project.</p>
          </div>
        </div>
      </div>
      
      {/*slider start */}


      <div className="slider-box">
        <h1>welcome sahil</h1>
       
      </div>
      {/*slider start */}
    </div>
  );
};

export default Home;