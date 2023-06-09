const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { VueLoaderPlugin } = require("vue-loader")
require("dotenv").config()

const SIDEPANEL_URL = process.env.SIDEPANEL_URL || "http://localhost:3003"

module.exports = (_, argv) => ({
	output: {
		publicPath: `${SIDEPANEL_URL}/`
	},

	resolve: {
		extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"]
	},

	devServer: {
		port: 3003,
		historyApiFallback: true
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.tsx?$/,
				use: [
					"babel-loader",
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							appendTsSuffixTo: ["\\.vue$"],
							happyPackMode: true
						}
					}
				]
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ["style-loader", "css-loader", "postcss-loader"]
			}
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new ModuleFederationPlugin({
			name: "sidepanel",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./mountVueSidepanel": "./src/mountVueSidepanel.js"
			},
			shared: require("./package.json").dependencies
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html"
		})
	]
})
