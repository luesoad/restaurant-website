var path = require("path");;

module.exports = {
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js"
  },
};