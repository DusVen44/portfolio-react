import React from 'react';
import '../../Components/HowToPlay/HowToPlay.css';
import sportshackscreenshot from '../../images/sportshack-screenshot.png';

export default function HowToPlay() {
    return (
        <div className="each-project-container">
            <div className="title-description-tech-links">
                <div className="each-project-title">
                    <h5 className="project-title">
                        Sportshack Supplement Depot
                    </h5>
                </div>

                <div className="project-description">
                    <p className="description">
                        Sportshack Supplement Depot is a brick & mortar business in Lafayette, LA. 
                        This full stack project was done as a redesign of the original site with the 
                        goal of creating a more user-friendly and aesthetically pleasing experience. 
                        Node, Express, and SQL are used for the API and React is handling the front-end.
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
                        <div className="tech-box">AWS Amplify</div>
                    </div>

                    <div className="link-buttons">
                        <a  className="link" 
                            href="https://sportshack-front.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View App
                        </a>
                        <a  className="link" 
                            href="https://github.com/DusVen44/sportshack-client.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Front-End
                        </a>
                        <a  className="link" 
                            href="https://github.com/DusVen44/sportshack-client.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Back-End
                        </a>
                    </div>
                </div>
            </div>

            <div className="screenshot">
                <img src={sportshackscreenshot} alt="sportshack website screenshot" className="sitescreenshot"></img>
            </div>


        </div>
    )
}
