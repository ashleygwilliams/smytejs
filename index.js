'use strict'

const request = require('request')
const logger = require('bole')('smyte')

module.exports = class Smyte {
  constructor (key, secret) {
    this.key = key
    this.secret = secret
  }

  sendAction (data) {
    const options = {
      method: 'POST',
      url: 'https://api.smyte.com/v2/action',
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        user: this.key,
        pass: this.secret
      },
      body: JSON.stringify(data)
    }

    request(options, function (err, response, body) {
      if (response.statusCode !== 200) {
        logger.error('There was an error sending the action to Smyte. ERR:' + err)
      }
    })
  }
}
