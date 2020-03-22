const request = require('superagent')

module.exports = {
  meta: {
    help: 'When someone posts something awful and you need to get it off the screen.',
    module: 'Fun',
    level: 0,
    timeout: 10,
  },
  fn: function (msg) {
    var randomcat = require('./randomcat')
    for (var i = 0; i < 5; i++) {
      randomcat.fn(msg)
    }
  }
}
