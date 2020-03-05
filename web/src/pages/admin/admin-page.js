import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminLayout from '../../components/admin/admin-layout/admin-layout';

//Components
import CreateTeamPage from './create-team-page';
import LoginPage from './login-page';
import ResetPassword from './reset-password-page';
import SignUpPage from './signup-page';

function Admin() {
    return (
        <AdminLayout>
            <Switch>
                <Route exact path="/admin/create-team">
                    <CreateTeamPage />
                </Route>
                <Route exact path="/admin/login">
                    <LoginPage />
                </Route>
                <Route exact path="/admin/reset-password">
                    <ResetPassword />
                </Route>
                <Route exact path="/admin/sign-up">
                    <SignUpPage />
                </Route>
            </Switch>
        </AdminLayout>
    )
}

export default Admin;