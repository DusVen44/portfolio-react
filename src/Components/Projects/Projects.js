import React from 'react';
import './Projects.css';
import PROJECTLIST from '../../PROJECTLIST';

export default function Projects() {
    return (
        <div className="projects-container">
            <h4 className="projects-title title">Projects</h4>

            <div className="project-loop">
                {PROJECTLIST.map(project => {
                    return (
                        <div className="project-box" key={project.id}>
                            <h6 className="project-title">{project.title}</h6>
                            <p className="project-description">{project.description}</p>

                            <div className="tech-loop">
                                {project.tech.map((tech, index) => {
                                    return (
                                        <div className="tech-box" key={index}>
                                            {tech}
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="button-links">
                                <a 
                                    href={project.live_link} 
                                    target="_blank" 
                                    className="project-link-button"
                                >
                                    View App
                                </a>
                                <a
                                    href={project.github_front}
                                    target="_blank"
                                    className="project-link-button"
                                >
                                    View Front-End Code
                                </a>
                                <a
                                    href={project.github_back}
                                    target="_blank"
                                    className="project-link-button"
                                >
                                    View Back-End Code
                                </a>
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}
