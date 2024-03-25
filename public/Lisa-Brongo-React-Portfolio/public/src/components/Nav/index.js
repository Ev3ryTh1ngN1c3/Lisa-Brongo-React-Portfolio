import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Nav component responsible for rendering navigation tabs
function Nav(props) {
  // Destructuring props to extract currentTab and handleTabChange
  const {
    currentTab,
    handleTabChange,
  } = props;

  // Update the document title based on the current tab
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  // Render the navigation tabs
  return (
    <nav>
      <ul className="nav nav-tabs">
        {/* About Tab */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Apply active class if currentTab is 'About'
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        {/* Portfolio Tab */}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            // Apply active class if currentTab is 'Portfolio'
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        {/* Contact Tab */}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // Apply active class if currentTab is 'Contact'
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        {/* Resume Tab */}
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // Apply active class if currentTab is 'Resume'
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;