import config from '../environment';
const domain = 'localhost:3000/';
export default {
    apiRootPath: environment.apiRootPath,
    domain: domain,
    aws: {
        region: config.awsRegion,
        cognitoUserPoolId: config.cognitoUserPoolId,
        cognitoIdentityPoolId: config.cognitoIdentityPoolId,
        cognitoDomain: config.cognitoDomain,
        cognitoRedirectSignin: config.cognitoRedirectSignIn,
        cognitoRedirectSignout: config.cognitoRedirectSignOut,
        cognitoUserPoolWebClientId: config.cognitoUserPoolWebClientId,
        cognitoHostedSigninPageUrl: config.cognitoHostedSigninPageUrl
    }
};