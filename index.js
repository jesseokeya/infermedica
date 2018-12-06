const classes = require('extends-classes')
const request = require('axios')
const { Condition, Info, LabTest, LookUp, Search, RiskFactor, Symptom } = require('./lib')

class Infermedica extends classes (Condition, Info, LabTest, LookUp, Search, RiskFactor, Symptom) {
    constructor(options = {}) {
        const { appId, appKey } = options
        const host = 'https://api.infermedica.com/v2'
        const axios = setHeaders(appId, appKey)
        super({ host, axios })
    }

    setHeaders(app_id, app_key) {
        request.defaults.headers.common['app_id'] = app_id
        request.defaults.headers.common['app_key'] = app_key
        return request
    }
}

module.exports = Infermedica