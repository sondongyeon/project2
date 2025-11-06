import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './component/header/header';
import Content from './component/page/content';
import Footer from './component/header/foooter';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  // Customize your header menu items here
  const headerMenuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  // Customize your footer quick links here
  const footerQuickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // Customize your footer social links here
  const footerSocialLinks = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;

          // Check if user has scrolled to near the bottom (within 400px)
          const shouldShow = windowHeight + scrollTop >= documentHeight - 400;

          if (shouldShow !== showFooter) {
            setShowFooter(shouldShow);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showFooter]);

  return (
    <div className="App">
      <Header
        logoText="MyWebsite"
        menuItems={headerMenuItems}
      />

      <Content />

      <div className={`footer-wrapper ${showFooter ? 'visible' : 'hidden'}`}>
        <Footer
          aboutText="Building amazing web experiences with React. Stay connected with us for more updates and exciting projects!"
          quickLinks={footerQuickLinks}
          socialLinks={footerSocialLinks}
          copyrightText="2024 MyWebsite. All rights reserved."
        />
      </div>
    </div>
  );
}

export default App;
