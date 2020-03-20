import React, {useLayoutEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import CreateForm from './_create-form';


import '../styles/frontPage.scss'

function FrontPage() {


    const HideNow = {
        display: 'none'
    };

    return (
        <>
            <div className="fb">
                <section className="fb-section fb-section_1">
                    <div className="fb-section_title">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182 19">
                            <title>Asset 1</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="ALTEN_FRANCE" data-name="ALTEN FRANCE">
                                    <path className="cls-1"
                                          d="M10.51,14.13,7.68,17.78H.61L14,0h5.21L32.29,17.78H25.13l-2.65-3.65Zm5.8-9h-.09l-3.79,6.29h8.18Z"/>
                                    <path className="cls-1" d="M55.2,14.84h9.5v2.94H48.49V.46H55.2Z"/>
                                    <path className="cls-1" d="M92.18,17.78H85.47V3.4H78.53V.46H99.12V3.4H92.18Z"/>
                                    <path className="cls-1"
                                          d="M122.44,3.4V7.21h10.69v2.94H122.44v4.69h11.1v2.94H115.73V.46h17.81V3.4Z"/>
                                    <path className="cls-1"
                                          d="M152.16,0H157l18.12,12.11h.09V.46h6.72V18.12h-4.84L159,6h-.09V17.78h-6.71Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="fb-section_1_circles">
                        <svg className="circle_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <svg className="circle_2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <svg className="circle_3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <svg className="circle_4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <svg className="circle_5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <svg className="circle_6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                    </div>
                    <div className="easter">
                        <h5>THE EASTER</h5>
                        <h4>CHALLENGE</h4>
                    </div>
                    <div className="numOfMin">
                        <h1>2541</h1>
                        <small>
                            Minutes left to the goal
                        </small>
                    </div>
                </section>

                <section className="fb-section fb-section_2">
                    <h3>
                        ABOUT THE <br/>
                        CHALLENGE
                    </h3>
                    <p>
                        Stand the plank – if we reach 1000 <br/>
                        minutes together ALTEN will donate xxx<br/>
                        SEK to EWB
                    </p>
                    <div className="triAngles">
                        <div className="triAngles_tri triAngles_1"></div>
                        <div className="triAngles_tri triAngles_2"></div>
                        <div className="triAngles_tri triAngles_3"></div>
                        <div className="triAngles_tri triAngles_4"></div>
                        <div className="triAngles_tri triAngles_5"></div>
                        <div className="triAngles_tri triAngles_5"></div>
                    </div>
                </section>

                <section className="fb-section fb-section_3">
                    <h3>
                        LEADER BOARD
                    </h3>
                </section>

                <section className="fb-section fb-section_4">
                    <h3>
                        HOW TO DO IT
                    </h3>

                    <div className="directions">
                        <h3>1</h3>
                        <p>Stand in the plank <br/> with the team at the <br/> customer </p>
                    </div>
                    <div className="directions">
                        <h3>2</h3>
                        <p>Film and send the <br/> movie to XX </p>
                    </div>
                    <div className="directions">
                        <h3>3</h3>
                        <p>Register your <br/> result here </p>
                    </div>

                </section>

            </div>

            {/*Hide old Login Login for Now*/}
            <div style={HideNow}>
                <Link to="/admin/login"><h2>Login</h2></Link>

                <div className="d-flex justify-content-center flex-row">
                    <div className="d-flex col-lg-4 flex-column">
                        <CreateForm/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrontPage;