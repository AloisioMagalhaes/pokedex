const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./config/config.js");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const logInternalIPs = async () => {
  const localIPv4 = await WebpackDevServer.internalIP("v4");
  const localIPv6 = await WebpackDevServer.internalIP("v6");

  console.log("Local IPv4 address:", localIPv4);
  console.log("Local IPv6 address:", localIPv6);
};

logInternalIPs();

server.startCallback(() => {
  console.log("Successfully started server on http://localhost:8080");
});

const stopServer = () =>
  server.stopCallback(() => {
    console.log("Server stopped.");
  });

setTimeout(stopServer, 5000);
