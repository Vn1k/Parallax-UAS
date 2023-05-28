import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './followACD.css';

function FollowACD()
{
    return (
        <div id="containerFollow">
            <nav class="nav">
                <div id="iconFlw">
                </div>
                <h4 class="sm-header">Follow me on</h4>
                <div class="line"></div>
                <ul class="nav-list">
                    <li class="nav-item">
                    <a href="#" class="nav-link"><FontAwesomeIcon icon={faSteam} className="fa-steam"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="https://instagram.com/its.acd?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"  class="nav-link"><FontAwesomeIcon icon={faInstagram} className="fa-instagram"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="ACD#1708" target="_blank" rel="noopener noreferrer" class="nav-link"><FontAwesomeIcon icon={faDiscord} className="fa-discord"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="https://www.linkedin.com/in/amanda-citra-dewanti-838631245" target="_blank" rel="noopener noreferrer" class="nav-link"><FontAwesomeIcon icon={faLinkedin} className="fa-linkedin-in"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    ); 
}

export default FollowACD;