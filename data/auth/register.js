const express = require('express');
const router = express.Router();
const User = require('../../model/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const nodemailertransport = require('nodemailer-sendgrid-transport');
const nodeMailer = require('nodemailer');
//?init send grid mailer here
const transport = nodeMailer.createTransport(
  nodemailertransport({
    auth: {
      api_key:
        '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'
    }
  })
);

/**
 * ?desc        account  creation
 * ?Access      public
 * ?Request     POST /create_account
 */
router.post(
  '/',
  [
   
    check('email', 'not an Email Address').isEmail(),
    check('password', 'input cannot be empty')
      .not()
      .isEmpty(),
    check(
      'password',
      'password length must be at least 6 characters length'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json( error.array() );

    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) return res.status(400).send('Email Already Taken');
      user = new User({
        name,
        email,
        password
      });
      const genSalt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, genSalt);

      await user.save();

      const payload = {
        user: {
          id: user._id
        }
      };

      jwt.sign(payload, config.get('security'), (err, token) => {
        if (err) throw err;
        res.json({ token: token });
        //?mailing user for success regitration
        return transport.sendMail({
          to: email,
          from: 'FastSearch@store.com',
          subject: 'Welcome to Fast Search ',
          html:
            'Thank you for Registering with us , Hope you have getting what you want with us'
        });
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Down');
    }
  }
);

module.exports = router;
