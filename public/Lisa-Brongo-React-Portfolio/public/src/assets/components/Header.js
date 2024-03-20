import React from "react";
import PropTypes from 'prop-types';
import Nav from "../Nav";

// Header component that displays the header section of the portfolio
function Header({ currentTab, handleTabChange }) {
  return (
    <header>
      <div className="header-content">
        <h1>Lisa Brongo</h1> {/* Displaying the name in the header */}
        <Nav currentTab={currentTab} handleTabChange={handleTabChange} /> {/* Rendering the navigation component */}
      </div>
      <section className="hero">
        <div className="hero-cta">
          <h2>welcome !</h2> {/* Displaying a welcome message */}
          <p>
            to my portfolio built with React
            ... as a full stack web developer
            here, you can find a small sample of the projects I worked on
            as a UCF Coding Boot Camp student
          </p> {/* Providing a brief description of the portfolio */}
        </div>
      </section>
    </header>
  );
}

// PropTypes for type-checking
Header.propTypes = {
  currentTab: PropTypes.string.isRequired, // Requires currentTab as a string
  handleTabChange: PropTypes.func.isRequired // Requires handleTabChange as a function
};

export default Header;