import React, { useState } from "react";
import "./header.css";

const Header = ({ logoText = "MyWebsite", menuItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Default menu items if none provided
  const defaultMenuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const items = menuItems.length > 0 ? menuItems : defaultMenuItems;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{logoText}</h1>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
