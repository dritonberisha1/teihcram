export default {
    aws: {
        cognitoIdentityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
        cognitoUserPoolId: process.env.REACT_APP_AWS_COGNITO_POOL_ID,
        cognitoUserPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_APP_CLIENT_ID,
        cognitoDomain: process.env.REACT_APP_AWS_COGNITO_DOMAIN,
        cognitoRedirectSignin: process.env.REACT_APP_AWS_COGNITO_REDIRECT_SIGNIN,
        cognitoRedirectSignout: process.env.REACT_APP_AWS_COGNITO_REDIRECT_SIGNOUT,
        region: process.env.REACT_APP_AWS_REGION
    }
};