const { Scheme, Types, model } = require('mongoose');

const scheme = new Scheme({
  from: { type: String, required: true },
  to: { type: String, required: true, unique: true },
  code: { type: String, require: true, unique: true },
  date: { type: Date, default: Date.now },
  click: { type: Number, default: 0 },
  owner: { type: Types.ObjectId, ref: 'User' }
});

module.exports = model('Link', scheme);