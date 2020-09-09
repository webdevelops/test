const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const config = require('./config');

const app = express();

mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection to data base failed');
  });

  // app.use(bodyParser.json());
app.use(express.json({ extended: true }));  // such as bodyParser - convert json to javaScript

app.use("/images", express.static(path.join("backend/images")));
app.use("/", express.static(path.join(__dirname, "angular")));  // for production

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  )
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

app.use((req, res, next) => {    // for production
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

// app.use("*", (req, res) => {    // for production
//   res.sendFile(path.join(__dirname, 'angular/index.html'));
// });

module.exports = app;
