import React from 'react';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';


export default function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div id="navbar">
                    <div className="title">Portfolio</div>
                    <ul>
                        <li><a href="https://github.com/Vivekv634"><img src={github} alt="Github" /></a></li>
                        <li><a href="https://www.instagram.com/v.codr/"><img src={instagram} alt="Instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/in/vivekv634"><img src={linkedin} alt="LinkedIn" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
