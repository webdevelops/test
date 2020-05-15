const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const router = Router();
const User = require('../models/User');

//  /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Wrong email.').isEmail(),
    check('password', 'At last 6 characters.').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Unccorect registration data.'
        })
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Such user already exists' }); // 400 - Bad Request
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created.' });

    } catch (err) {
      res.status(500).json({ message: 'Somethin went wrong, try again.' }); // 500 - Server Error
    }
  });

//  /api/auth/login
router.post('/login', async (req, res) => {

});

module.exports = router;