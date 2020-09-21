import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">

            <div className="name">
                <Link to="/">
                    <h1 className="top-name">Dustin <span className="name-bar">|</span> Venable</h1>
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/bio" className="nav-link">Bio</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>

        </div>
    )
}
