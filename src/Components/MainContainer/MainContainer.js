import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function MainContainer() {
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/bio" component={Bio} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}
