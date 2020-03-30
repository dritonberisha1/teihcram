import React, { Fragment } from "react";
import altenBrand from '../../images/alten-brand.svg';
import bunny from '../../images/bunny.svg';
import lines from '../../images/total-lines.svg';
export default () => {
    return (
        <div className="section total">
            <div className="brand">
                <img src={altenBrand} />
            </div>
            <div className="title">
                <h1 class="first-word">THE EASTER</h1>
                <h1 class="second-word">CHALLENGE</h1>
            </div>
            <div className="lines">
                <img src={lines} />
            </div>
            <div className="total-points">
                <h1>
                    2145
                </h1>
                <h2>Minutes left to the goal</h2>
            </div>

            <div className="bunny">
                <img src={bunny} />
            </div>
        </div>
    );
};