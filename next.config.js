const path = require('path');
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
    webpack(config) {
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    }
  };

