const mongoose = require('./mongoose')

module.exports = {
  mongoose: mongoose[process.env.NODE_ENV],
}
