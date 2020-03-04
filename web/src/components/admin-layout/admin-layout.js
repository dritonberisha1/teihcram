import React from 'react';
import PropTypes from 'prop-types';

function AdminLayout(props) {
    const { children } = props; //Variables

    return (
        <div>
            {children}
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.element
}

export default AdminLayout;