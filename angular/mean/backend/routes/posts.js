const express = require('express');
const multer = require('multer');

const Post = require('../models/post');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     const error = new Error("Invalid mime type");
//     // console.log("error", error)

//     if (isValid) {
//       error = null;
//     }

//     cb(error, "backend/images");
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname.toLowerCase().split(' ').join('-');
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + '-' + Date.now() + '.' + ext);
//   }
// });

const upload = multer({dest: 'backend/images'});

router.post("", upload.single("image"), (req, res, next) => {
// router.post("", multer({storage: storage}).single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" +  req.file.filename
  });
  // console.log('post', post)

  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully!",
      post: {
        ...createdPost,
        id: createdPost._id
      }
    })
  }
  );
});

router.get("", upload.single('image'), (req, res, next) => {
  Post.find()
    .then(documents => {
    // console.log("documents", documents)
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      })
    })
    .catch(err => console.log('Error: ', err));
});

router.get('/:id', upload.single('image'), (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);

    } else {
      res.status(404).json({message: "Post not found!"});
    }
  })
});

router.put('/:id', upload.single('image'), (req, res, next) => {
  let imagePath = req.body.imagePath;

  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    imagePath = url + '/images/' + req.file.filename;
  }

  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath
  });

  // console.log('post', post);
  Post.updateOne({ _id: req.params.id }, post)
    .then(response => {
      // console.log('response-server', response);
      res.status(200).json({message: 'Update succsessful!'});
    });
});

router.delete('/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(res => console.log("_id", res));
  res.status(200).json({ message: "Post deleted!!!" });
});

module.exports = router;
