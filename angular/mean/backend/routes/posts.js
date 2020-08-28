const express = require('express');
const multer = require('multer');

const Post = require('../models/post');
const checkAuth = require('../middleware/check-auth');

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

const upload = multer({ dest: 'backend/images' });

// router.post("", multer({storage: storage}).single("image"), (req, res, next) => {
router.post("", checkAuth, upload.single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.userId
  });
  // console.log("post", post)

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
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPosts;

  if (pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }

  postQuery
    .then(documents => {
      fetchedPosts = documents;
      return Post.countDocuments();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
        maxPosts: count
      })
    })
    .catch(err => console.log('Error: ', err));
});

router.get('/:id', upload.single('image'), (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);

    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  })
});

router.put('/:id', checkAuth, upload.single('image'), (req, res, next) => {
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

  Post.updateOne({ _id: req.params.id, creator: req.userData.userId }, post)
    .then(result => {
      if (result.nModified > 0) {
        res.status(200).json({ message: 'Update succsessful!' });

      } else {
        res.status(401).json({ mwssage: 'Not authorised!' });
      }
    });
});

router.delete('/:id', checkAuth, (req, res, next) => {
  Post.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
    console.log("result", result)
      if (result.n > 0) {
        res.status(200).json({ message: 'Deletion succsessful!' });

      } else {
        res.status(401).json({ mwssage: 'Not authorised!' });
      }
    });
});

module.exports = router;
