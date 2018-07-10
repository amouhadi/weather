module.exports = {
    entry: './src/index.js',

    devtool: 'source-map',

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js'],

    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: (path) => {
                    const matches = path.match(/node_modules\/(.+?)\//)

                    return matches && !NODE_MODULES_TO_BABELIFY.has(matches[1])
                },
                loader: 'babel-loader',

            },

        ],
    },

    devServer: {
        compress: true,
        port: 8080,
    },
}

