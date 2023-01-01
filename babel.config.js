module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@app': './app',
                        'assets': './assets',
                        'constants': './constants',
                    },
                },
            ],
            'react-native-reanimated/plugin', // This line.
        ],
    };
};
