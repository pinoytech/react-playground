module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: [
      '', '.js', 'jsx'
    ]
  },
  module: {
    loaders: [{
      exclude: (/node_modules|bower_components/),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/
    }]
  }
}
