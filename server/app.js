// express part
const express = require("express");
const app = express();
const port = 4000;

// mongoose part
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeaaahh!!");
});
mongoose.connection.on("error", () => {
  console.log("Error while connecting!");
});

require("./models/user"); // requiring the mongoose user model
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth")); // requiring the auth router
app.use(require("./routes/post")); // requiring the auth router

// listining on Port
app.listen(port, () => {
  console.log("Server is running on ", port);
});
