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
        // config: {
        //     provider: 'mailgun',
        //     providerOptions: {
        //         apiKey: env('MAILGUN_API_KEY'),
        //         domain: env('MAILGUN_DOMAIN'),
        //         host: env('MAILGUN_HOST'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
        //     },
        //     settings: {
        //         defaultFrom: 'roicoroy@mercadoamigao.com',
        //         defaultReplyTo: 'roicoroy@mercadoamigao.com',
        //         testAddress: 'roicoroy@mercadoamigao.com',
        //     },
        // },
        config: {
            provider: 'nodemailer',
            providerOptions: {
              host: env('GOOGLE_SMTP_HOST'),
            //   port: env('SMTP_PORT', 587),
              port: env('GOOGLE_SMTP_PORT'),
              auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
              },
            //   auth: {
            //     type: "OAuth2",
            //     user: env('SMTP_USERNAME'),
            //     accessToken: env('ACCESS_TOKEN'),
            //   },
              // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: 'roicoroy@mercadoamigao.com',
                defaultReplyTo: 'roicoroy@mercadoamigao.com',
                testAddress: 'roicoroy@yahoo.com.br',
            },
          },
    },
});
