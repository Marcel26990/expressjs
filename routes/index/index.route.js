const { Router } = require("express");
const { join } = require("path");

const indexRoute = Router();

indexRoute.get("/", (req, res) => {
  res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = indexRoute;
