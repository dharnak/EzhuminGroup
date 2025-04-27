import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Videos/Ezhumin.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="brand-name">Ezhumin Group</span>
                </Link>
            </div>

            <div className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link className="nav-link" to="/Service" onClick={() => setIsOpen(false)}>Service</Link>
                <Link className="nav-link" to="/Portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <Link className="nav-link" to="/Events" onClick={() => setIsOpen(false)}>Events</Link>
                <a className="nav-link" href="/#About" onClick={() => setIsOpen(false)}>About</a>
                <a className="nav-link" href="/#Contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

            <div className="menu-toggle" onClick={toggleNavbar}>
                {isOpen ? (
                    <span className="close-icon">&times;</span> // ❌ Close X icon
                ) : (
                    <span className="hamburger-icon">&#9776;</span> // ☰ Hamburger menu
                )}
            </div>
        </nav>
    );
}

export default Navbar;
