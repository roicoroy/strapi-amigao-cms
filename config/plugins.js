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
    }

});
