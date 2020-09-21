import React from 'react';
import './Contact.css';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go'

export default function Contact() {
    return (
        <div className="contact-container">
            <h4 className="contact-title title">Contact</h4>

            <div className="contact-info-container">
                <div className="name-career">
                    <h4 className="contact-name">Dustin Venable</h4>
                    <h4 className="contact-career">Web Developer</h4>
                </div>

                <div className="contact-options">
                    <h5 className="contact-options-title">~Contact Options~</h5>

                    <h5 className="email-link">
                        <AiOutlineMail className="icon"/>
                        <a href="mailto:djvenable@gmail.com">DJVenable@gmail.com</a>
                    </h5>

                    <h5 className="github-link">
                        <GoMarkGithub className="icon"/>
                        <a href="https://github.com/DusVen44?tab=repositories" target="_blank" rel="noopener noreferrer">My Github</a>
                    </h5>

                    <h5 className="linkedin">
                        <AiFillLinkedin className="icon"/>
                        <a href="https://www.linkedin.com/in/dustin-venable/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </h5>
                </div>
            </div>
            
        </div>
    )
}
