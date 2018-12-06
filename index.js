const classes = require('extends-classes')
const axios = require('axios')
const { Condition, Info, LabTest, LookUp, Search, RiskFactor } = require('./lib/index')

class Infermedica extends classes(Condition, Info, LabTest, LookUp, Search, RiskFactor) {
    constructor(options = {}) {
        const { appId, appKey } = options
        const host = 'https://api.infermedica.com/v2'
        axios.defaults.headers.common['app_id'] = appId
        axios.defaults.headers.common['app_key'] = appKey
        super({ host, axios })
    }

    __call(method, args) {
        console.log(`'${method}(${args || ''})' is missing!`);
    }
}

module.exports = Infermedica