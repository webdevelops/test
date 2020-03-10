const { Router } = require('express');
const bcrypt = require('bcrypt');
const router = Router();
const User = require('../models/User');

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email: email });  // ({ email });

    if (candidate) {
      return res.status(400).json({ message: "Such user exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User created successfully." });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again." });
  }
});

// /api/auth/login
router.post('/login', async (req, res) => {

});

module.exports = router;