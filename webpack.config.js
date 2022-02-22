const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// فايدة البلجين ده عشان السيرفر لما بيجي يشتغل ويبني ملف الاابب عايزينه في كل مرة يشتغل فيها يمسح ملف الاابب القديم ويعمل ملف جديد بمحتوياته عشان لو كان فيه كاشش او مشكلة في الملف القديم تتشال وعشان كمان نبين ان الملف اللي كان موجود قبل مايتم تشغيل السيرفر ده كان ملف قديم في حالة ان الرايت تو ديسك مكنتش ترو 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { Chunk } = require('webpack');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    entry: {
        'app' :'./src/index.js',
        'assets/js/banner' : './src/assets/js/banner.js',
        'assets/js/tabs' : './src/assets/js/tabs.js',
        'assets/js/upload' : './src/assets/js/upload.js',
        'assets/js/chart' : './src/assets/js/chart.js'
    },
    output: {
      publicPath : "/",  
      path: path.join(__dirname, '/app'),
      filename: '[name].js',
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
            // هنا نقصد الصور اللي ليها نهاية شبه الخطوط ماتخدهاش وحددت الملف بتاع الصور عشان يستبعده
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
          {
            test: /\.(svg|png|jpe?g|gif)$/,
            exclude :/fonts/,
            // هنا نقصد الصور اللي ليها نهاية شبه الخطوط ماتخدهاش وحددت الملف بتاع الخطوط عشان يستبعده
            use : [
                {
                loader: 'file-loader',
                options: {
                name : '[name].[ext]',
                outputPath : "assets/images"
                },
            }
            ]
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          
        ],
      },
      
plugins: [
          
new HtmlWebpackPlugin({
  filename : "index.html",
  template : "./src/index.html",
  chunks : ['app','assets/js/banner','assets/js/tabs','assets/js/chart']
  // في العادي ويبباك بياخد كل ملفات جافا سكريبت اللي في الانتري بيحطها في صفحة ال اتش تي ام ال لكن هنا انا حددتله ملفات معينه
}),
new HtmlWebpackPlugin({
  filename : "orders.html",
  template : "./src/orders.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "add-user.html",
  template : "./src/add-user.html",
  chunks : ['app','assets/js/upload']
}),
new HtmlWebpackPlugin({
  filename : "products.html",
  template : "./src/products.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "users.html",
  template : "./src/users.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "add-product.html",
  template : "./src/add-product.html",
  chunks : ['app', 'assets/js/upload']
}),
new HtmlWebpackPlugin({
  filename : "components/button.html",
  template : "./src/components/button.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/textfield.html",
  template : "./src/components/textfield.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/card.html",
  template : "./src/components/card.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/banner.html",
  template : "./src/components/banner.html",
  chunks : ['app','assets/js/banner']
}),
new HtmlWebpackPlugin({
  filename : "components/list.html",
  template : "./src/components/list.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/tabs.html",
  template : "./src/components/tabs.html",
  chunks : ['app','assets/js/tabs']
}),
new HtmlWebpackPlugin({
  filename : "components/upload.html",
  template : "./src/components/upload.html",
  chunks : ['app' , 'assets/js/upload']
}),
new HtmlWebpackPlugin({
  filename : "components/help.html",
  template : "./src/components/help.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/summary.html",
  template : "./src/components/summary.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/actions.html",
  template : "./src/components/actions.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/sidebar.html",
  template : "./src/components/sidebar.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/table.html",
  template : "./src/components/table.html",
  chunks : ['app']
}),
new HtmlWebpackPlugin({
  filename : "components/chart.html",
  template : "./src/components/chart.html",
  chunks : ['app' , 'assets/js/chart']
}),
  new MiniCssExtractPlugin({
    filename : "assets/css/style.css",
    // البلجن دي هي اللي بتاخد التنسيقات من ملف جافاسكريبت وتخليها في فايل لوحده محددين مكانه
  }),
  new OptimizeCssAssetsPlugin(),
  new CleanWebpackPlugin(),

new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/help.html'),
  location:'help',
  template_filename :['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
}),
new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/sidebar.html'),
  location:'sidebar',
  template_filename :['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
}),
new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/actions.html'),
  location:'actions',
  template_filename :['index.html'],
}),
new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/banner.html'),
  location:'banner',
  template_filename :['index.html'],
}),
new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/chart.html'),
  location:'chart',
  template_filename :['index.html'],
}),
new HtmlWebpackPartialsPlugin({
  path:path.join(__dirname, './src/components/tabs.html'),
  location:'tabs',
  template_filename :['index.html'],
}),
  
],
};