import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';

import TotalPointsSection from './sections/total-points-section';
import AboutSection from './sections/about-section';
import ApplySection from './sections/apply-section';
import LeaderboardSection from './sections/leaderboard-section';
import RulesSection from './sections/rules-section';

import '../styles/app.scss';

class FrontPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: null
        }
    }

    render() {
        return (
            <Fragment>
                <div className="front-container">
                    <ReactPageScroller
                        pageOnChange={this._handlePageChange}
                        customPageNumber={this.state.currentPage}>
                        <TotalPointsSection />
                        <AboutSection />
                        <LeaderboardSection />
                        <RulesSection />
                        <ApplySection />
                    </ReactPageScroller>
                </div>
            </Fragment >
        )
    }

    _handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };
}

export default FrontPage;