import React from "react";
import bunny from '../../images/bunny.svg';
import circle from '../../images/rules-circle.svg';
import egg from '../../images/egg.svg';

export default () => {
    return (
        <section className="section rules">
            <div className="title">
                <h1>HOW TO DO IT</h1>
            </div>

            <div className="bunny">
                <img src={bunny} />
            </div>
            <div className="circle">
                <img src={circle} />
            </div>
            <div className="egg">
                <img src={egg} />
            </div>
            <div className="all-rules">
                <div className="rule">
                    <div className="number">
                        <h1>1</h1>
                    </div>
                    <p>Stand in the plank</p>
                    <p>with the team at the</p>
                    <p>customer</p>
                </div>
                <div className="rule">
                    <div className="number">
                        <h1>2</h1>
                    </div>
                    <p>Film and send the</p>
                    <p>movie to xx</p>
                </div>
                <div className="rule">
                    <div className="number">
                        <h1>3</h1>
                    </div>
                    <p>Register your</p>
                    <p>result <span>here</span></p>
                </div>
            </div>
        </section>
    );
};