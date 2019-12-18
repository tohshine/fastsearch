const express = require('express');
const router = express.Router();
const Account = require('../model/account');
/**
 * ?desc        get all enterprise
 * ?Access      public
 * ?Request     GET /searches
 */

router.get('/', async (req, res) => {
  try {
    const allEnt = await Account.find();
    return res.status(200).json(allEnt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server down');
  }
});

/**
 * ?desc        get  enterprise by id
 * ?Access      public
 * ?Request     GET /search/profile
 */

router.get('/profile/:id', async (req, res) => {
  try {
    const allEnt = await Account.findById(req.params.id);
    return res.status(200).json(allEnt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server down');
  }
});

/**
 * ?desc        get  enterprise by category
 * ?Access      public
 * ?Request     GET /search/profile
 */

router.post('/', async (req, res) => {
  const {category} = req.body;
  try {
    const allEnt = await Account.find({category:category});
    return res.status(200).json(allEnt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server down');
  }
});

module.exports = router;
