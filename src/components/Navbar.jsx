import './Navbar.css';
import logo from '../assets/hospital-logo.jpg';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="Hospital Logo" className="logo-img" />
                <span className="logo-text">MediLink</span>
            </a>

            <input
                type="checkbox"
                id="menu-toggle"
                className="menu-btn"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
            />
            <label htmlFor="menu-toggle" className="menu-icon">
                <span className="navicon"></span>
            </label>

            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/book">Booking</a>
                <a href="/doctor">Doctors</a>
            </nav>
        </header>
    );
}
