const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://xinhui22c:xinhui1226@cluster0.wvczi7d.mongodb.net/blog?retryWrites=true&w=majority"
);

app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Please work");
});

app.use(cors());
app.use(express.json());

app.use("/posts", require("./api/posts"));

app.listen(5000, () => console.log("App is flying on PORT 5000"));

mongoose.connection.once("open", () =>
  console.log("We are connected to MongoDB")
);