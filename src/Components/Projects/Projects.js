import React from 'react';
import HowToPlay from '../HowToPlay/HowToPlay';
import TrainingTracker from'../TrainingTracker/TrainingTracker';
import Sportshack from '../Sportshack/Sportshack';
import './Projects.css';

export default function Projects() {
    return (
        <div className="projects-container">
            <h4 className="projects-title title">Projects</h4>

            <div className="projects-display-container">
                <HowToPlay />
                <div className="space"></div>
                <TrainingTracker />
                <div className="space"></div>
                <Sportshack />
                <div className="space"></div>
            </div>

        </div>
    )
}
