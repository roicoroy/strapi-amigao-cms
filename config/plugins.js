'use strict';

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
    email: {
        config: {
            // provider: 'nodemailer',
            // providerOptions: {
            //     host: env('SMTP_HOST', 'smtp.gmail.com'),
            //     port: env('SMTP_PORT', 465),
            //     auth: {
            //         user: env('SMTP_USERNAME'),
            //         pass: env('SMTP_PASSWORD'),
            //     },
            //     secure: true,
            //     // ... any custom nodemailer options
            // },
            provider: 'mailgun',
            providerOptions: {
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                secure:false,
                requireTLC:true,
                port: env('SMTP_PORT', 587),
                apiKey: env('MAILGUN_API_KEY'),
                domain: env('MAILGUN_DOMAIN'), //Required if you have an account with multiple domains
                host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
            },
            settings: {
                // defaultFrom: 'roicoroy@yahoo.com.br',
                // defaultReplyTo: 'roicoroy@yahoo.com.br',
                defaultFrom: env('SMTP_USERNAME'),
                defaultReplyTo: env('SMTP_USERNAME'),
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
