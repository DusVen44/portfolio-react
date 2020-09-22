import React from 'react';
import '../../Components/HowToPlay/HowToPlay.css';
import trainingtrackerscreenshot from '../../images/trainingtracker-screenshot.png';

export default function HowToPlay() {
    return (
        <div className="each-project-container">
            <div className="title-description-tech-links">
                <div className="each-project-title">
                    <h5 className="project-title">
                        Training Tracker
                    </h5>
                </div>

                <div className="project-description">
                    <p className="description">
                        Training Tracker allows users to log their performance in the gym. 
                        This is a full stack application utilizing an SQL database with 
                        multiple tables, Express, and Node to create the back-end. React is 
                        being used for the front-end. Users are required to sign up and log 
                        in if they want to use the app.
                    </p>
                </div>

                <div className="tech-and-buttons">
                    <div className="project-tech">
                        <div className="tech-box">React</div>
                        <div className="tech-box">CSS</div>
                        <div className="tech-box">JSX</div>
                        <div className="tech-box">Express</div>
                        <div className="tech-box">Node</div>
                        <div className="tech-box">PostgreSQL</div>
                    </div>

                    <div className="link-buttons">
                        <a  className="link" 
                            href="https://training-tracker.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View App
                        </a>
                        <a  className="link" 
                            href="https://github.com/DusVen44/training-tracker-client" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Front-End
                        </a>
                        <a  className="link" 
                            href="https://github.com/DusVen44/training-tracker-api" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Back-End
                        </a>
                    </div>
                </div>
            </div>

            <div className="screenshot">
                <img src={trainingtrackerscreenshot} alt="how to play screenshot" className="sitescreenshot"></img>
            </div>


        </div>
    )
}
