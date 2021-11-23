import React from 'react';
import { Facebook, LinkedIn, Instagram, Pinterest } from '@material-ui/icons';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

   
            <div className="footer-container">

                <div className="footer-content">

                    <ul class="footer-menu">
            
                        <li class="footer-menu-item">
                        About
                        </li>
                    
                        <li class="footer-menu-item">
                        Something else
                        </li>
                    
                        <li class="footer-menu-item">
                        Another link
                        </li>
                    
                    </ul>

                </div>

                <div className="social-stuff">
                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank"><Facebook/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank"><LinkedIn/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank"><Instagram/></a>

                    <a href="https://www.facebook.com/" className="footer-social-link icon" target="_blank"><Pinterest/></a>
    
                </div>
                
            </div>

        </footer> 
    )
}

export default Footer;