const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  siteUrl: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  public_id: {
    type: String,
    required: false
  },
  tel: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cord_lat: Number,
  cord_long: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }
});
module.exports = mongoose.model('account', accountSchema);
