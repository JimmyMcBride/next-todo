require("dotenv").config();

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    // DATABASE_URL: process.env.DATABASE_URL,
  },
};
