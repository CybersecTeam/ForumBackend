const express = require("express");
const app = express();

app.use("/api", require("./comment"));
app.use("/api", require("./forum"));
module.exports = app;
