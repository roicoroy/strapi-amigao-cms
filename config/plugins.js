module.exports = ({ env }) => ({
    documentation: {
        config: {
            info: {
                version: '2.0.0',
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_API_KEY'),
                api_secret: env('CLOUDINARY_API_SECRET'),
            },
        },
    },
    settings: {
        cors: {
            enabled: true,
            origin: ['*'],
            // origin: env('CORS_ORIGIN', 'http://localhost:8100', 'http://localhost:1337'),
        }
    }

});
