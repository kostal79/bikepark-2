const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components/'),
            "@assets": path.resolve(__dirname, 'src/assets/'),
            "@hooks": path.resolve(__dirname, 'src/hooks/'),
            "@api": path.resolve(__dirname, 'src/api/'),
            "@redux": path.resolve(__dirname, 'src/redux/'),
            "@utils": path.resolve(__dirname, 'src/utils/'),
        }
    }
};