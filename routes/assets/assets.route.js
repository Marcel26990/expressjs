const { Router, static } = require("express");
const { join } = require("path");

const assetRoute = Router();

assetRoute.get("/images", static(join(__dirname, "/images")));
assetRoute.get("/css", static(join(__dirname, "/css")));
assetRoute.get("/etc", static(join(__dirname, "/etc")));
assetRoute.get("/js", static(join(__dirname, "/js")));

module.exports = assetRoute;
