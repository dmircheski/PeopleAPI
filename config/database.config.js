const env = require('dotenv').config()

module.exports = {
   url: 'mongodb+srv://' + process.env.ATLAS_DB_USER + ':' + encodeURIComponent(process.env.ATLAS_DB_PASS) + '@cluster0.baj5y.mongodb.net/?retryWrites=true&w=majority'
}