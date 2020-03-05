import React from 'react';
import { Link } from 'react-router-dom';

function FrontPage() {

    return (
        <div>
            <h1>Front Page</h1>
            <Link to="/admin/login"><h2>Login</h2></Link>
        </div>
    );
}

export default FrontPage;