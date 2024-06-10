const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create the express app
const app = express();

const MONGODB_URL = "mongodb://127.0.0.1:27017/";

// middleware to handle JSON request
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// setup a cors policy
const corsHandler = cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
  optionsSuccessStatus: 200,
});

// apply the cors to middleware
app.use(corsHandler);

// connect to MongoDB
mongoose
  .connect(MONGODB_URL + "Note_taker")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
const categoriesRoute = require("./routes/category");
const userRoute = require("./routes/user");


app.use("/categories", categoriesRoute);
app.use("/users", userRoute);

// start the server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
