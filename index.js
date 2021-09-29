const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect(
    "mongodb+srv://ml-user:DjJcIUcI51m4Liy6@clustersandbox20210724.wudsw.mongodb.net/moneylion-iv?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/", routes);

    app.listen(8000, () => {
      console.log("App listening on port 8000");
    });
  });
