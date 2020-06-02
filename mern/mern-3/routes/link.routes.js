const { Router } = require('express');
const config = require('config');
const shortid = require('shortid');

const link = require('../models/Link');
const auth = require('../middleware/auth.meddleware');

const router = Router();

router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl');
    const { from } = req.body;
    const existing = await link.findOne({ from });

    if (existing) {
      return res.json({ link: existing });
    }

    const code = shortid.generate();
    // const code = 1;
    console.log("code", code)
    const to = baseUrl + '/t/' + code;
    const link = new link({
      code, from, to, owner: req.user.userId
    });

    await link.save();

    res.status(201).json({ link });

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const links = link.find({ owner: req.user.userId });
    res.json(links);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const link = link.findById(req.params.id);
    res.json(link);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

module.exports = router;