/* required packages */
const express = require("express");
const http = require("http");
const https = require("https");
const helmet = require("helmet");
const compression = require("compression");
const { readFileSync } = require("fs");
const { join } = require("path");

/* Route Imports */
const assetsRoute = require("./routes/assets/assets.route");
const indexRoute = require("./routes/index/index.route");

/* Load .env File */
require("dotenv").config();

/* Init Express App */
const app = express();

/* Basic Security and better Performance */
app.use(helmet({ hidePoweredBy: true }));
app.use(compression());

/* Routes */
app.use("/", indexRoute);
app.use("/assets", assetsRoute);

app.use((req, res) => {
  res.status(404).send("404, Not found!");
});

/*
Fill the two files for HTTPS Support

CloudFlare: 

1. Add your Domain to Cloudflare
2. Go to the "SSL/TLS" Tab and click onto Origin Server
3. Click “Create Certificate” and follow the instructions provided to generate and install a certificate. 
   If not already set, you can now optionally change the SSL setting about to use “Full (strict)” mode.

NOTE: This Certificate is only valid between CloudFlare and your Server.
*/
const httpsOptions = {
  key: readFileSync(join(__dirname, "cert/domain.key")),
  cert: readFileSync(join(__dirname, "cert/domain.pem")),
};

/* Listen on ports of .env */
http.createServer(app).listen(process.env.httpPort, () => {
  console.log("Listening via HTTP on Port:", process.env.httpPort);
});

https.createServer(httpsOptions, app).listen(process.env.httpsPort, () => {
  console.log("Listening via HTTPS on Port:", process.env.httpsPort);
});
