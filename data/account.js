const express = require('express');
const router = express.Router();
const middleware = require('../middleware/getAuth');
const uploads = require('../middleware/uploads');
const User = require('../model/user');
const Account = require('../model/account');
const { check, validationResult } = require('express-validator');
/**
 * ?desc        admin user adding enterprise data
 * ?Access      private
 * ?Request     POST  /account
 */

router.post(
  '/',
  middleware,
  uploads,
  [
    check('name', 'fill up empty feilds')
      .not()
      .isEmpty(),
    check('email', 'fill up empty feilds')
      .not()
      .isEmpty(),
    check('email', 'bad email format').isEmail(),
    check('services', 'fill up empty feilds')
      .not()
      .isEmpty(),
    check('tel', 'fill up empty feilds')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    try {
      if (req.user.id && req.image) {
        const { fileName, filePath } = req.image;
        const {
          name,
          email,
          category,
          siteUrl,
          services,
          tel,
          address,
          cord_lat,
          cord_long,
          location
        } = req.body;
        const account = new Account({
          name,
          email,
          category,
          siteUrl,
          services,
          imageUrl: `http://localhost:3000/${filePath}`,
          tel,
          address,
          cord_lat,
          cord_long,
          location,
          user: req.user.id
        });

        await account.save();
        return res.status(200).json(account);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
  }
);
/**
 * ?desc        admin get data from input ent
 * ?Access      private
 * ?Request     GET /account
 */
router.get('/', middleware, async (req, res) => {
  try {
    const ent = await Account.findOne({ user: req.user.id });
    if (!ent) return res.status(404).send('account not found');
    return res.status(200).json(ent);
  } catch (error) {
    console.log(error.message);

    return res.status(500).json('server errrr');
  }
});

/**
 * ?desc        admin edit data from input ent
 * ?Access      private
 * ?Request     PUT /account
 */
router.put('/:id', middleware, uploads, async (req, res) => {
  try {
    const ent = await Account.findById(req.params.id);
    if (!ent) return res.status(404).send('not found');
    

    if (ent.user.toString() === req.user.id.toString()) {
      

      const {
        name,
        email,
        category,
        siteUrl,
        services,
        tel,
        address,
        cord_lat,
        cord_long,
        imageUrl,
        location
      } = req.body;

      const { fileName, filePath } = req.image;
      const updateAccount = {};

      if (name) updateAccount.name = name;
      if (email) updateAccount.email = email;
      if (category) updateAccount.category = category;
      if (siteUrl) updateAccount.siteUrl = siteUrl;
      if (services) updateAccount.services = services;
      if (tel) updateAccount.tel = tel;
      if (address) updateAccount.address = address;
      if (location) updateAccount.location = location;
      if (imageUrl)
        updateAccount.imageUrl = `http://localhost:3000/${filePath}`;

      if (cord_lat) updateAccount.cord_lat = cord_lat;
      if (cord_long) updateAccount.cord_long = cord_long;

      console.log('reach here');

      const enterprise = await Account.findByIdAndUpdate(
        req.params.id,
        updateAccount,
        { new: true }
      );
      return res.status(200).json(enterprise);
    }

    return res.status(403).send('forbidden error');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('server  down');
  }
});

module.exports = router;
