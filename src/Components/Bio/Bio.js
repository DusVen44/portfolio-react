import React from 'react';
import './Bio.css';
import headshot from '../../images/venny-headshot-small-nobg.png';

export default function Bio() {
    return (
        <div className="bio-container">
            <h4 className="bio-title title">Bio</h4>
            
            

            <p className="bio-text text1">
                I am a web developer who graduated from Bloc's Remote Web Developer Track program. 
                My interest in tech stems from a love of making creative ideas
                come to fruition. I enjoy chasing the feeling of satisfaction that's provided when 
                the final product comes together, and I'm excited to start working with a team of 
                programmers and learn from the experts in this industry.
            </p>
            <p className="bio-text text2">
                In my free time, I'm usually playing guitar, drums, piano, bass guitar, and the 
                Otamatone (it's like a saxophone mixed with a bagpipe that looks like a Blobfish).
                I can be found in the gym 4-6 days a week, and I have an extreme passion for exotic
                sports cars. I also have an unsuccessful YouTube channel where I cover my favorite 
                songs, and I'm extremely proud of acquiring my 69 subscribers. Check out my portfolio 
                of recent projects, and feel free to contact me.
            </p>

            <div className="headshot-container">
                <img src={headshot} alt="picture of Dustin" className="headshot"></img>
            </div>
        </div>
    )
}
