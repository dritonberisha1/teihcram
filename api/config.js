import AWS from 'aws-sdk';

const ENVIRONMENTS = {
    LOCALHOST: 'localhost',
    TESTING: 'testing',
    PRODUCTION: 'production'
};

const settings = {
    environment: process.env.AWS_EXECUTION_ENV ? ENVIRONMENTS.PRODUCTION : process.env.ENVIRONMENT,
    awsRegion: process.env.AWS_REGION,
};

if (settings.environment !== ENVIRONMENTS.PRODUCTION) {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        endpoint: process.env.AWS_DYNAMODB_ENDPOINT
    });
}

export default {
    AWS: AWS,
    environments: ENVIRONMENTS,
    settings: settings
};