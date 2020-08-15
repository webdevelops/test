const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');
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

app.use(express.json({ extended: true }));  // such as bodyParser - convert json to javaScript

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  )
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // console.log('req', req.body)
  // console.log('post', post)

  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully!",
      postId: createdPost._id
    })
  }
  );
});

app.get('/api/posts', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      })
    })
    .catch(err => console.log('Error: ', err));
});

app.get('/api/posts/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    
    } else {
      res.status(404).json({message: "Post not found!"});
    }
  })
});

app.put('/api/posts/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });

  Post.updateOne({ _id: req.params.id }, post)
    .then(res => {
      console.log('res-server', res);
      res.status(200).json({message: 'Update succsessful!'});
    });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(res => console.log("_id", res));
  res.status(200).json({ message: "Post deleted!!!" });
});

module.exports = app;
