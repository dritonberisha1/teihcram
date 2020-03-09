import AWS from 'aws-sdk';
import config from '../config';
import Amplify, { Auth } from 'aws-amplify';

const oauth = {
    // Domain name
    domain: config.aws.cognitoDomain,

    // Authorized scopes
    scope: ['email'],

    // Callback URL
    redirectSignIn: config.aws.cognitoRedirectSignin,

    // Sign out URL
    redirectSignOut: config.aws.cognitoRedirectSignout,

    // 'code' for Authorization code grant,
    // 'token' for Implicit grant
    responseType: 'token',

    // optional, for Cognito hosted ui specified options
    options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag: true
    }
}

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        identityPoolId: config.aws.cognitoIdentityPoolId,
        region: config.aws.region,
        userPoolId: config.aws.cognitoUserPoolId,
        userPoolWebClientId: config.aws.cognitoUserPoolWebClientId,
        redirectSignOut: config.aws.cognitoRedirectSignout,
        oauth: oauth
    },
    // ...
});

class AuthService {

    getCurrentSession = () => {
        return Auth.currentSession();
    }

    login = (username, password) => {
        return Auth.signIn(username, password);
    }

    signOut = async () => {
        const currentUser = await Auth.currentAuthenticatedUser()
        return currentUser.signOut();
    }

    signUp = (data) => {
        const { username, password, email } = data
        console.log("EMAIL", email);
        return Auth.signUp({
            username,
            password,
            attributes: {
                email
            }
        });
    }

    verifyAccount = (username, code) => {
        return Auth.confirmSignUp(username, code)
    }

}

export default new AuthService();