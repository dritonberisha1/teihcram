import React from "react";
import planking from '../../images/planking.svg';

export default () => {
    return (
        <section className="section about">
            <div className="title">
                <h1 class="word">ABOUT THE</h1>
                <h1 class="word">CHALLENGE</h1>
            </div>
            <div className="description">
                <p>Stand the plank - if we reach 1000</p>
                <p>minutes together ALTEN will donate xxx</p>
                <p>SEK to EWB</p>
            </div>
            <div className="plank">
                <img src={planking}></img>
            </div>

        </section>
    );
};