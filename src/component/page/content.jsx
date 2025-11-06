import React from "react";
import "./content.css";

const Content = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to My Website</h1>
        <p className="hero-subtitle">Building amazing web experiences with modern technology</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast loading times and optimized performance for the best user experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Seamlessly adapts to any screen size, from mobile phones to desktop computers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern UI</h3>
            <p>Clean and intuitive interface with attention to detail and user experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Built with security in mind to protect your data and privacy.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to creating exceptional web experiences that combine beautiful design with powerful functionality. Our team of experts works tirelessly to deliver solutions that exceed expectations.</p>
        <p>With years of experience in web development, we bring innovation and creativity to every project we undertake.</p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Custom web applications built with the latest technologies and best practices.</p>
          </div>
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces that enhance user engagement.</p>
          </div>
          <div className="service-item">
            <h3>Mobile Development</h3>
            <p>Native and cross-platform mobile applications for iOS and Android.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers and take your business to the next level.</p>
        <button className="cta-button">Contact Us Today</button>
      </section>
    </main>
  );
};

export default Content;
