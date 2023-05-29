import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './followCAL.css';

function FollowCAL()
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
                    <a href="https://steamcommunity.com/profiles/76561199204046189/" class="nav-link"><FontAwesomeIcon icon={faSteam} className="fa-steam"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="https://instagram.com/calista_belva?igshid=MjEwN2IyYWYwYw==" target="_blank" rel="noopener noreferrer" class="nav-link"><FontAwesomeIcon icon={faInstagram} className="fa-instagram"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="https://discordapp.com/users/868489299572715560" target="_blank" rel="noopener noreferrer" class="nav-link"><FontAwesomeIcon icon={faDiscord} className="fa-discord"/></a>
                    </li>
                    <li class="nav-item">
                    <a href="https://www.linkedin.com/in/calistabelva/" target="_blank" rel="noopener noreferrer" class="nav-link"><FontAwesomeIcon icon={faLinkedin} className="fa-linkedin-in"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    ); 
}

export default FollowCAL;