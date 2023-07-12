const path = require('path');
module.exports = {
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        "@atoms": path.resolve(__dirname, 'src/components/atoms'),
        "@organisms": path.resolve(__dirname, 'src/components/organisms'),
        "@containers": path.resolve(__dirname, 'src/components/containers'),
        "@images": path.resolve(__dirname, 'src/assets/images'),
        "@fonts": path.resolve(__dirname, 'src/assets/fonts'),
        "@services": path.resolve(__dirname, 'src/services'),
        "@store": path.resolve(__dirname, 'src/store'),
        "@styles": path.resolve(__dirname, 'src/styles'),
        "@constants": path.resolve(__dirname, 'src/constants')
    },
  },
};