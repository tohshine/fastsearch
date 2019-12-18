const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/getAuth');
const User = require('../../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

/**
 * ?desc        load user
 * ?Access      private
 * ?Request     GET /auth
 */

router.get('/', middleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return;

    return res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server error');
  }
});

/**
 * ?desc        login user
 * ?Access      public
 * ?Request     POST /auth
 */
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    //?checking if email is correct
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(403).json({ msg: 'incorrect  username and password' });
    const compare = await bcrypt.compare(password, user.password);
    if (!compare)
      return res.status(403).json({ msg: 'incorrect  username and password' });
    //?crete payload
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.get('security'), (err, token) => {
      if (err) throw err;
      return res.status(200).json({ token: token });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error ');
  }
});
module.exports = router;
