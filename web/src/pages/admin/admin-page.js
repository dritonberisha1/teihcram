import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import authService from '../../services/auth-service';
import AdminLayout from '../../components/admin/admin-layout/admin-layout';

//Components
import DashboardPage from './dashboard/dashboard-page';
import LoginPage from './auth/login-page';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    // componentDidMount() {
    //     this.isAuthenticated();
    // }

    // componentDidUpdate(prevProps) {
    //     this.isAuthenticated();
    // }

    // isAuthenticated = () => {
    //     authService.getCurrentSession()
    //         .then(session => {
    //             console.log("HERE_SESSION", session);
    //             this.setState({
    //                 authenticated: true
    //             });
    //         }).catch(() => {
    //             // this.props.history.push('/login');
    //             this.setState({
    //                 authenticated: false
    //             })
    //         });
    // }

    render() {
        const { authenticated } = this.state //Variables
        return (
            <AdminLayout>
                <Switch>
                    <Route exact path="/admin/dashboard">
                        <DashboardPage />
                    </Route>
                    <Route exact path="/admin/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </AdminLayout >
        )
    }
}

export default withRouter(Admin);