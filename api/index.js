import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//ROUTES
import teamRoutes from './routes/team-routes';

import config from './config';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//USE ROUTES
app.use('/teams', teamRoutes);

// catch 404 and forward to error handler
app.use((request, response, next) => {
    console.error('Path not found:', request.originalUrl);
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((error, request, response) => {
    console.error(error);
    const errorStatus = 500;
    response.status(error.statusCode || errorStatus).json(error);
});

export const handler = serverless(app, {
    request: function (request, event /*, context */) {
        // extracting a user identity
        const requestContext = event && event.requestContext;
        request.identity = requestContext && requestContext.identity || {};

        if (config.settings.environment === config.environments.LOCALHOST) {
            // Emulating a user identity for local testing
            request.identity = {
                claims: {
                    sub: request.identity.claims && request.identity.claims.sub,
                }
            };
        }
        request.user = identityToUser(request.identity);
    }
});

/**
 * Convert identity to user object, extracting the required claims into user fields
 * 
 * @param {object} identity Context identity
 * 
 * @returns {object} User object... returns null if provided identity is null or undefined
 */
function identityToUser(identity) {
    if (!identity) return null;
    const user = {
        id: identity.claims && identity.claims.sub,
        email: identity.claims && identity.claims.email,
        fullName: identity.claims && identity.claims.name,
        username: identity.claims && (identity.claims.username || identity.claims['cognito:username']),
        claims: []
    };

    for (let property in identity.claims) {
        user.claims.push({
            name: property,
            value: identity.claims[property]
        });
    }

    return user;
}