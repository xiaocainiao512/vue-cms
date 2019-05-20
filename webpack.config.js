const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
	entry:path.join(__dirname,"src/main.js"),
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.js'
	},
	mode:'development',
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'src/index.html'),
			filename:'index.html'
			/*
		    title: 'Custom template',
		    template: './src/index.html', //指定要打包的html路径和文件名
		    filename:'../index.html' ,//指定输出路径和文件名 
		    favicon:'./src/img/apple-touch-icon.png',//给生成的 html 文件生成一个标签<link rel="shortcut icon" href="apple-touch-icon.png">
		    hash: true,//给生成的 js 文件一个独特的 hash 值 <script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
		    showErrors:true,//webpack 编译出现错误
		    minify:{//对 html 文件进行压缩，minify 的属性值是一个压缩选项或者 false 。默认值为false, 不对生成的 html 文件进行压缩
	                 removeComments:true, // 去除注释
	                 collapseWhitespace: true //是否去除空格
	        }
			*/		
		}),
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			//配置处理.css文件的第三方loader规则
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader规则 npm install --save-dev less-loader 
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.sass为念的第三方loader规则 npm install --save-dev sass-loader
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置Babel来转换高级的es语法
			{test: /\.vue$/, use: 'vue-loader'},
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=161647&name=[hash:8]-[name].[ext]']},//配置处理，处理图片的loader
			//处理字体文件的loader
			{test:/\.(ttf|eot|svg|woff|woff2|)$/,use:'url-loader'}
		]
	},
	/*resolve:{
		alias:{//这是设置vue被导入包的路径
			"vue$":"vue/dist/vue.js"
		}
	}*/
}
	