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
                    <h4 className="contact-career">Cloud Engineer & Web Developer</h4>
                </div>

                <div className="contact-options">
                    <h5 className="email-link">
                        <a href="mailto:djvenable@gmail.com"><AiOutlineMail className="icon"/></a>
                    </h5>

                    <h5 className="github-link">
                        <a href="https://github.com/DusVen44?tab=repositories" target="_blank" rel="noopener noreferrer"><GoMarkGithub className="icon"/></a>
                    </h5>

                    <h5 className="linkedin">
                        <a href="https://www.linkedin.com/in/dustin-venable/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon"/></a>
                    </h5>
                </div>
            </div>
            
        </div>
    )
}
