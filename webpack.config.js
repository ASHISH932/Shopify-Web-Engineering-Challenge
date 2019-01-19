module.exports = {
    entry: [
        './src/app.js',
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: './images/[name].[ext]',
                        outputPath: './',
                    },
                    },
                ],
            }
        ]
    }
};