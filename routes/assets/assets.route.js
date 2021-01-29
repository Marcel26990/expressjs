const { Router, static } = require("express");
const { join } = require("path");

const assetRoute = Router();

assetRoute.use("/images", static(join(__dirname, "/images")));
assetRoute.use("/css", static(join(__dirname, "/css")));
assetRoute.use("/etc", static(join(__dirname, "/etc")));
assetRoute.use("/js", static(join(__dirname, "/js")));

module.exports = assetRoute;
