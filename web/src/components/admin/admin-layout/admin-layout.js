import React from 'react';
import PropTypes from 'prop-types';
import Header from './_header';

//Styles
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/admin/admin.scss';

function AdminLayout(props) {
    const { children } = props; //Variables

    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.element
}

export default AdminLayout;