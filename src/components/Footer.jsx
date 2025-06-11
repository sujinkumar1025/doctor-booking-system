import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>HealthCare+</h3>
          <p>Providing trusted care and expert advice.</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/doctor">Doctors</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 HealthCare+. All rights reserved.</p>
      </div>
    </footer>
  );
}
