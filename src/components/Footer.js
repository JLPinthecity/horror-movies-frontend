import React from 'react';
import { Facebook, LinkedIn, Instagram, Pinterest } from '@material-ui/icons';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <ul className="footer-menu">
                        <li className="footer-menu-item">
                        About
                        </li>

                        <li className="footer-menu-item">
                        Movies
                        </li>

                        <li className="footer-menu-item">
                        Add Movie
                        </li>
                    </ul>

                </div>

                <div className="social-stuff">
                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank" rel="noreferrer"><Facebook/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank" rel="noreferrer"><LinkedIn/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank" rel="noreferrer"><Instagram/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank" rel="noreferrer"><Pinterest/></a>
                </div>

                <div className="copyright">
                    © 2021, horrorflix | stay scared
                </div>
        
            </div>
        </footer> 
    )
}

export default Footer;