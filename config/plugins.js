'use strict';

module.exports = ({ env }) => ({
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',

            defaultLimit: 25,
            maxLimit: 100,

            apolloServer: {
                tracing: true,
            },
        },
    },
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
    placeholder: {
        enabled: true,
        config: {
            size: 10,
        },
    },
    'email-designer': {
        enabled: true,
        config: {
            editor: {
                // optional - if you have a premium unlayer account
                projectId: ['amigao'],

                tools: {
                    heading: {
                        properties: {
                            text: {
                                value: 'This is the new default text!',
                            },
                        },
                    },
                },
                options: {
                    features: {
                        colorPicker: {
                            presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
                        },
                    },
                    fonts: {
                        showDefaultFonts: false,
                        /*
                         * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
                         */
                        customFonts: [
                            {
                                label: 'Anton',
                                value: "'Anton', sans-serif",
                                url: 'https://fonts.googleapis.com/css?family=Anton',
                            },
                            {
                                label: 'Lato',
                                value: "'Lato', Tahoma, Verdana, sans-serif",
                                url: 'https://fonts.googleapis.com/css?family=Lato',
                            },
                        ],
                    },
                    mergeTags: [
                        {
                            name: 'Email',
                            value: '{{= USER.username }}',
                            sample: 'john@doe.com',
                        },
                    ],
                },
                appearance: {
                    theme: 'dark',
                    panels: {
                        tools: {
                            dock: 'left',
                        },
                    },
                },
            },
        },
    },
    // email: {
    //     config: {
    //         // provider: 'nodemailer',
    //         // providerOptions: {
    //         //     host: env('SMTP_HOST', 'smtp.gmail.com'),
    //         //     port: env('SMTP_PORT', 465),
    //         //     auth: {
    //         //         user: env('SMTP_USERNAME'),
    //         //         pass: env('SMTP_PASSWORD'),
    //         //     },
    //         //     secure: true,
    //         //     // ... any custom nodemailer options
    //         // },
    //         provider: 'mailgun',
    //         providerOptions: {
    //             auth: {
    //                 user: env('SMTP_USERNAME'),
    //                 pass: env('SMTP_PASSWORD'),
    //             },
    //             secure:false,
    //             requireTLC:true,
    //             port: env('SMTP_PORT', 587),
    //             apiKey: env('MAILGUN_API_KEY'),
    //             domain: env('MAILGUN_DOMAIN'), //Required if you have an account with multiple domains
    //             host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
    //         },
    //         settings: {
    //             // defaultFrom: 'roicoroy@yahoo.com.br',
    //             // defaultReplyTo: 'roicoroy@yahoo.com.br',
    //             defaultFrom: env('SMTP_USERNAME'),
    //             defaultReplyTo: env('SMTP_USERNAME'),
    //         },
    //     },
    // },

    settings: {
        cors: {
            enabled: true,
            // origin: ['http://localhost:8100'],
            origin: env('CORS_ORIGIN', 'http://localhost:8100'),
        }
    }

});
