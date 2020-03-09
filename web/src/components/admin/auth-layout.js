import React from 'react';
import PropTypes from 'prop-types';

function AuthLayout(props) {
    const { firstBox, secondBox } = props; //Variables

    return (
        <div className="d-flex justify-content-center flex-row flex-wrap-reverse pt-lg-5 pt-3">
            <div className="d-flex flex-column col-lg-4 bg-secondary justify-content-between py-5 px-4 text-third">
                {firstBox}
            </div>
            <div className="d-flex flex-column bg-third col-lg-4 justify-content-between py-5 px-4 text-secondary">
                {secondBox}
            </div>
        </div>
    )
}

AuthLayout.prototypes = {
    firstBox: PropTypes.element,
    secondBox: PropTypes.element,
}

export default AuthLayout;