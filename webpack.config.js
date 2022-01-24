const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// فايدة البلجين ده عشان السيرفر لما بيجي يشتغل ويبني ملف الاابب عايزينه في كل مرة يشتغل فيها يمسح ملف الاابب القديم ويعمل ملف جديد بمحتوياته عشان لو كان فيه كاشش او مشكلة في الملف القديم تتشال وعشان كمان نبين ان الملف اللي كان موجود قبل مايتم تشغيل السيرفر ده كان ملف قديم في حالة ان الرايت تو ديسك مكنتش ترو 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'app' :'./src/index.js',
    },
    output: {
      publicPath : "/",  
      path: path.join(__dirname, '/app'),
      filename: 'app.js',
    },

    devServer: {
          contentBase: path.join(__dirname, '/app'),
          port: 8020,
          open: true ,
          writeToDisk: true,
    }, 

    module: {
        rules: [
          {
              test : /\.html$/,
              use:[
                  {
                      loader : "html-loader",
                  }
              ]
          },
          {
            test:/\.(sa|sc|c)ss$/,  
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                "postcss-loader",
                // بما ان اللودر ده بيستخدم انه يصلح اي مشاكل في شفرة التنسيقات فحيكون ده احسن مكان ليه بعد تنسيقات ساس تتحمل وقبل ماتتحول ل css
                "sass-loader"
            ],
          },
          {
            test: /\.(svg|woff|woff2|ttf|eot)$/,
            exclude :/images/,
            // هنا نقصد الصور اللي ليها نهاية شبخ الخطوط ماتخدهاش وحددت الملف بتاع الصور عشان يستبعده
            use : [
                {
                loader: 'file-loader',
                options: {
                name : '[name].[ext]',
                outputPath : "assets/fonts"
                },
            }
            ]
          },
          
        ],
      },
      
      plugins: [
          
          new HtmlWebpackPlugin({
              filename : "index.html",
              template : "./src/index.html"
          }),
          new MiniCssExtractPlugin({
            filename : "assets/css/style.css",
          }),
          new OptimizeCssAssetsPlugin(),
          new CleanWebpackPlugin(),

          
        ],
};