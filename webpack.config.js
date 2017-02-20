module.exports = {
  entry: "./src/scripts/index.js",
  output: { path: "build", filename: "bundle.js" },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["latest", "react"]
        }
      }
    ]
  }
};
