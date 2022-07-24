import React from 'react';

const Footer = (props) => (
    <footer id="footer">
        <div className="container">
            {props.children}
            <ul className="copyright">
                    <li>Softick LLC</li>
                    <li>23103 Turtle Rock Terrace, Clarksburg, MD 20871, United States</li>
                    <li>Tel: +1 5516894433</li>
            </ul>
        </div>
    </footer>
);

export default Footer;
