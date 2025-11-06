import React from "react";
import "./footer.css";

const Footer = ({
  aboutText = "Building amazing web experiences with React. Stay connected with us for more updates.",
  quickLinks = [],
  socialLinks = [],
  copyrightText = "2024 MyWebsite. All rights reserved.",
}) => {
  // Default quick links if none provided
  const defaultQuickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  // Default social links if none provided
  const defaultSocialLinks = [
    { label: "Facebook", href: "#facebook" },
    { label: "Twitter", href: "#twitter" },
    { label: "Instagram", href: "#instagram" },
    { label: "LinkedIn", href: "#linkedin" },
  ];

  const links = quickLinks.length > 0 ? quickLinks : defaultQuickLinks;
  const socials = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>{aboutText}</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            {socials.map((social, index) => (
              <a key={index} href={social.href} aria-label={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
