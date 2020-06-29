const mongoose = require('mongoose');
const config = require('./config.js')

module.exports = async () => await mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });