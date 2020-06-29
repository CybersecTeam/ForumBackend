require("custom-env").env();
require("./config/config");
require("./database/database");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//  Global routing configuration
app.use(require("./routes/forum"));


//  Using https or http depending of environment variable CURRENT_SERVER

if (process.env.CURRENT_SERVER === "https") {
  const options = {
    key: fs.readFileSync("www_nivel7_net.key"),
    cert: fs.readFileSync("certificate.pem")
  };

  https
    .createServer(options, app)
    .listen(process.env.PORT, () =>
      console.log("Listening port ", process.env.PORT)
    );
} else if (process.env.CURRENT_SERVER === "http") {
  app.listen(process.env.PORT, () =>
    console.log("Listening port ", process.env.PORT)
  );
}
