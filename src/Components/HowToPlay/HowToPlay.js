import React from 'react';
import "./HowToPlay.css";
import howtoplayscreenshot from '../../images/howtoplay-screenshot.png'; 

export default function HowToPlay() {
    return (
        <div className="each-project-container">
            <div className="title-description-tech-links">
                <div className="each-project-title">
                    <h5 className="project-title">
                        How to Play
                    </h5>
                </div>

                <div className="project-description">
                    <p className="description">
                        This app uses 3 APIs. I play multiple instruments, and learning new songs 
                        can be a major hassle. I created this app so users can have a home for the 
                        notation, lyrics, and video tutorials for their favorite songs. Each search 
                        will sheet music (Songsterr API), lyrics (Genius API), and video tutorials 
                        (Google/YouTube API).
                    </p>
                </div>

                <div className="tech-and-buttons">
                    <div className="project-tech">
                        <div className="tech-box">HTML</div>
                        <div className="tech-box">CSS</div>
                        <div className="tech-box">JavaScript</div>
                        <div className="tech-box">JQuery</div>
                    </div>

                    <div className="link-buttons">
                        <a  className="link" 
                            href="https://dusven44.github.io/How-To-Play/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View App
                        </a>
                        <a  className="link" 
                            href="https://github.com/DusVen44/How-To-Play" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="screenshot">
                <img src={howtoplayscreenshot} alt="how to play screenshot" className="sitescreenshot"></img>
            </div>


        </div>
    )
}
