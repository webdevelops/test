const { Router } = require('express');
const User = require('../models/User');
const router = Router();

//  /api/auth/register
routes.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: 'Such user already exists' }); // 400 - Bad Request
    }

  } catch (err) {
    res.status(500).json({ message: 'Somethin went wrong, try again.' }); // 500 - Server Error
  }
});

//  /api/auth/login
routes.post('/login', async (req, res) => {

});

module.exports = router;