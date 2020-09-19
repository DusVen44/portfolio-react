import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h4 className="contact-title title">Contact</h4>

            <div className="name-career">
                <h4>Dustin Venable</h4>
                <h4>Web Developer</h4>
            </div>

            <div className="contact-options">
                <h5 className="email-link"><a href="mailto:djvenable@gmail.com">DJVenable@gmail.com</a></h5>
                <h5 className="github-link"><a href="https://github.com/DusVen44?tab=repositories" target="_blank">My Github</a></h5>
            </div>
            
        </div>
    )
}
