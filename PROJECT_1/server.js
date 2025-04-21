require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./app/router/index")
const db=require("./app/config/db")
db();
app.use("/api", routes);
app.listen(process.env.HTTP_PORT, () => {
  console.log("app run on port ",process.env.HTTP_PORT);
});



