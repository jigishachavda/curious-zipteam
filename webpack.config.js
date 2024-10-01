const path = require("path");
const { merge } = require('webpack-merge');

module.exports = {
    entry: [__dirname + "/src/assets/styles/scss/main.scss"],
    output: {
        path: path.resolve(__dirname, 'src/assets/styles/'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        options: { outputPath: "/", name: "[name].min.css" },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
};
