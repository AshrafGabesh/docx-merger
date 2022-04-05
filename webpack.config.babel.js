const {join} = require('path');

const include = join(__dirname, 'src')

module.exports = {
    entry: './src/index',
    target: 'node',
    mode: 'production',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'DocxMerger',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', include, options: {presets: ['@babel/preset-env']}},
            {test: /\.json$/, 'loader': 'json', include},
        ]
    }
}