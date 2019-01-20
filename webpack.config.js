module.exports = {
    entry: [
        '@babel/polyfill',
        './app/app.js',
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};