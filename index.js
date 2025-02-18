require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const { resolve } = require('path');

const app = express();
const PORT = 3010;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.static('static'));

// MongoDB connection setup (without deprecated options)
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error("Error connecting to database:", error));

// Serve static file from 'pages'
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
