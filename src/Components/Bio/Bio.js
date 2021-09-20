import React from 'react';
import './Bio.css';
import headshot from '../../images/venny-headshot-small-nobg.png';
import solutionsarchitectcert from '../../images/AWS-SolArchitect-Associate-2020.png';
import syscert from '../../images/AWS-SysOpAdmin-Associate-2020.png';
import devcert from '../../images/AWS-Developer-Associate.png';

export default function Bio() {
    return (
        <div className="bio-container">
            <h4 className="bio-title title">Bio</h4>
            
            <p className="bio-text text1">
                I am a Cloud Engineer & Full-Stack Web Developer who graduated from Thinkful's Remote Web Developer Track program. 
                I have the 3 AWS associate-level certifications (see below).
                My interest in tech stems from a love of making creative ideas
                come to fruition. I enjoy chasing the feeling of satisfaction that's provided when 
                the final product comes together, and I love working with a team of 
                programmers to not only showcase my skills, but also to learn from the experts in this industry.
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

                <div className="certs-container">
                    <img src={solutionsarchitectcert} alt="AWS Certification" className="architectcertification"></img>
                    <img src={syscert} alt="AWS Certification" className="syscert"></img>
                    <img src={devcert} alt="AWS Certification" className="devcert"></img>
                </div>


                <img src={headshot} alt="picture of Dustin" className="headshot"></img>
            </div>
        </div>
    )
}
