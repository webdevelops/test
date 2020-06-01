const { Router } = require('mongoose');

const Link = require('../models/Link');
const auth = require('../middleware/auth.meddleware');

const router = Router();

router.post('/generate', async (req, res) => {
  try {


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

router.get('/:id', async (req, res) => {
  try {
    const link = link.findById(req.params.id);
    res.json(link);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

module.exports = router;