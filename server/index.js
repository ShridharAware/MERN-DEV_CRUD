require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const studentRouter = require("./routes/student.route");
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const app = express();
app.use("/api", studentRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
