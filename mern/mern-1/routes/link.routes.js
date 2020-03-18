const { Router } = require('express');
const Link = require('../models/Link');
const router = Router();

router.post('/generate', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const links = await Link.find({ owner: null }) // ???
    res.json(links);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const links = await Link.findById(req.params.id);
    res.json(links);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

module.exports = router;