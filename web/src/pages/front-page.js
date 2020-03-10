import React from 'react';
import { Link } from 'react-router-dom';

import CreateForm from './_create-form';

function FrontPage() {

    return (
        <div className="bg-white">
            <h1>Front Page</h1>
            <Link to="/admin/login"><h2>Login</h2></Link>

            <div className="d-flex justify-content-center flex-row">
                <div className="d-flex col-lg-4 flex-column">
                    <CreateForm />
                </div>
            </div>

            <div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="my-5">-</div>
                <div className="mt-5">-</div>
            </div>
        </div>
    );
}

export default FrontPage;