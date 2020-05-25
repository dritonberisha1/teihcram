import React from 'react';
import { Link } from 'gatsby';

import LogoSmall from '../components/logo-small';
import Linkedin from '../images/icons/linkedin.svg';
import Angelist from '../images/icons/angellist.svg';

const Footer = (props) => {
    return (
        <div className="footer p-5">
            <div className="top-section d-flex flex-row justify-content-between">
                <div className="logo">
                    <LogoSmall />
                </div>
                <div className="social d-flex flex-row">
                    <div className="linkedin mr-4">
                        <Link>
                            <Linkedin className="mr-2" />
                            Linkedin
                        </Link>
                    </div>
                    <div className="angelist">
                        <Link>
                            <Angelist className="mr-2" />
                            Angel.co
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom-section d-flex flex-row justify-content-between mt-8">
                <div className="copyright">
                    <p>©  2020  Teihcram</p>
                </div>
                <div className="terms">
                    <Link className="mr-4">Terms & conditions</Link>
                    <Link>Privacy policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;