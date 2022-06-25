const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
// const mongoose = require("mongoose");
const connectDatabase = require("./databases/connectDatabase");

// Connect Database
connectDatabase();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

// Routes
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
