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
                cloud_name: env('CLOUDINARY_NAME', 'roicoroy'),
                api_key: env('CLOUDINARY_API_KEY', '854797375527335'),
                api_secret: env('CLOUDINARY_API_SECRET', '3ELa56bTj-tjdmraafVDGon5p1M'),
            },
        },
    },
    settings: {
        cors: {
            enabled: true,
            origin: ['*'],
            // origin: env('CORS_ORIGIN', 'http://localhost:8100', 'http://localhost:1337'),
        }
    },
    email: {
        config: {
            provider: 'mailgun',
            providerOptions: {
                apiKey: env('MAILGUN_API_KEY'),
                domain: env('MAILGUN_DOMAIN'), //Required if you have an account with multiple domains
                host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
            },
            settings: {
                defaultFrom: 'roicoroy@yahoo.com.br',
                defaultReplyTo: 'roicoroy@yahoo.com.br',
            },
        },
    },
});
