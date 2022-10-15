import React from "react";
import "./Nav.scss"
import Music from "../music/Music";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="navsx">
                <div className="title">CLARA SCHILLACI</div>
                <div className="fullstackdeveloper">Full Stack Developer</div>
            </div>
            <Music />
        </nav>
    );
}