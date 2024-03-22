import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentTab, handleTabChange }) {
  // Define an array of navigation items with their names & labels
  const navItems = [
    { name: 'About', label: 'About' },
    { name: 'Portfolio', label: 'Portfolio' },
    { name: 'Contact', label: 'Contact' },
    { name: 'Resume', label: 'Resume' },
  ];

  // Update the document title when the currentTab changes
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        {/* Map over the navItems array to render each navigation item dynamically */}
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a
              href={`#${item.name.toLowerCase()}`}
              onClick={() => handleTabChange(item.name)}
              // Apply the 'active' class if the currentTab matches the item's name
              className={currentTab === item.name ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;