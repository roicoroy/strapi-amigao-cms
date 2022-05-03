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
                cloud_name: 'roicoroy',
                api_key: '854797375527335',
                api_secret: '3ELa56bTj-tjdmraafVDGon5p1M',
            },
        },
    },
    // myplugin: {
    //     enabled: true,
    //     resolve: `./src/plugins/myplugin`, // From the root of the project
    //     config: {
    //         testConf: 3,
    //     },
    // },
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
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.gmail.com'),
            port: env('SMTP_PORT', 465),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
            secure: true,
            // ... any custom nodemailer options
          },
          settings: {
            defaultFrom: 'richiescotland@gmail.com',
            defaultReplyTo: 'richiescotland@gmail.com',
          },
        },
      },
});


