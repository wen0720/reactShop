const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,  // 當檔案大小超過 25000 bytes 時，會使用 file-loader
            name: './images/[name].[ext]'
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(woff|ttf|eot|woff2)$/,
        loader: 'file-loader',
        options: {
          name: './font/[name].[ext]'
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'), // 啟動 server 後，靜態資料的路徑
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}



// webpack output is served from http://localhost:3000/dist/
// contentBase: Content not from webpack is served from /Users/wen/reactShop/public/
