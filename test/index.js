const Infermedica = require('../')
const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

module.exports = infermedica