import React from "react";
import { Link } from 'gatsby';
import ConferenceImg from '../images/conference-img';

const ContactInfo = (props) => {
    return (
        <div className="my-6 d-flex flex-row">
            <div className="col pl-0 pr-5">
                <ConferenceImg />
            </div>
            <div className="col p-0">
                <h1>
                    Contact Information
                </h1>
                <p className="mt-4">
                    If you would like to obtain more information or discuss <br />
                    a potential project, please contact us at <Link>info@teihcram.com</Link> or  <br />
                    telephone <Link>+371 263 681 11</Link>
                </p>
                <div className="d-flex flex-row mt-5">
                    <div className="col p-0">
                        <p>
                            Suppliers: <br />
                            <Link>suppliers@teihcram.com</Link>
                        </p>
                    </div>
                    <div className="col p-0">
                        <p>
                            For medical institutions: <br />
                            <Link>medical@teihcram.com</Link>
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                        <p>
                            Teihcram Ltd. <br />
                    Jaunmoku street 74, Riga <br />
                    LV-1011, Latvia <br />
                            <Link>View on map</Link>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
