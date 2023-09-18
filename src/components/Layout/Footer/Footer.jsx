import React, { useState } from 'react';
import './Footer.css';
import { companyInfo, socialMediaContent } from '../../../db/db';

import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        console.log(`Subscribed with email: ${email}`);
        // Reset the email input
        setEmail('');
    };

    return (
        <footer className="footer">

            <div className="footer-col">
                <div className='footer-left'>
                    <div className="socialMedia">
                        <a href="https://www.facebook.com/nurturereach" target="_blank" rel="noopener noreferrer">
                            {socialMediaContent.iconFacebook}
                        </a>
                        <a href="https://www.instagram.com/nurturereach" target="_blank" rel="noopener noreferrer">
                            {socialMediaContent.iconInstaram}
                        </a>
                        <a href="https://www.twitter.com/nurturereach" target="_blank" rel="noopener noreferrer">
                            {socialMediaContent.iconTwitter}
                        </a>
                    </div>

                    <div className="subscribe">
                        <div className='subscribe-area'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSubscribe}>Subscribe</button>
                        </div>

                        <p className="subscribe-description">
                            Join 3000+ others getting our newsletters on our charity programs and services once every month.
                        </p>
                    </div>


                </div>
                <div className='footer-right'>
                    <div className="footer-links">
                        <Link to="/privacy-policy">Privacy Policy |</Link>
                        <Link to="/contact">Contact |</Link>
                        <Link to="/donate">Donate</Link>
                    </div>
                    <div className="logo">
                        <img src={companyInfo.logo} alt={companyInfo.name} />
                    </div>

                </div>
            </div>
            <div>
                <p className="copyRight">&copy;{new Date().getFullYear()} {companyInfo.name} {companyInfo.subName}.</p>
                <div className="disclaimer footer-links container">
                    <Link to="/disclaimer"
                        style={{
                            fontSize: "15px", color: "yellow", textAlign: "center",
                            textDecoration: "underline", fontWeight: "900",
                        }}>
                        READ DiSCLAIMER
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
