const classes = require('extends-classes')
const axios = require('axios')
const {
    Condition,
    Info,
    LabTest,
    LookUp,
    Search,
    RiskFactor,
    Symptom,
    Suggest,
    Explain,
    Parse,
    Diagnosis,
    Triage
} = require('./lib')

const Classes = classes(
    Condition,
    Info,
    LabTest,
    LookUp,
    Search,
    RiskFactor,
    Symptom,
    Suggest,
    Explain,
    Parse,
    Diagnosis,
    Triage
)

class Infermedica extends Classes {
    constructor(options = {}) {
        const { appId, appKey } = options
        const host = 'https://api.infermedica.com/v2'
        axios.defaults.headers.common['app_id'] = appId
        axios.defaults.headers.common['app_key'] = appKey
        super({ host, axios })
        this.appId = appId
        this.appKey = appKey
    }

    __call(method, args) {
        console.log(`${method.toString()}(${args.toString() || ''}) is missing!`);
    }

    _handleError(err) {
        let errorCtx
        if (err.response) {
            const status = err.response.status
            switch (status) {
                case 400:
                    errorCtx = {
                        statusText: err.response.statusText,
                        status,
                        message: `Request Error: invalid JSON (e.g. extra comma), missing or invalid parameter (e.g. missing fields in request body)`,
                        method: err.response.config.method.toUpperCase(),
                        url: err.response.config.url,
                        data: err.response.config.data || ""
                    }
                    break
                case 403:
                    errorCtx = {
                        statusText: err.response.statusText,
                        status,
                        message: `Request Error: missing or invalid credentials for App-Id: ${this.appId} or App-Key: ${this.appKey}`,
                        method: err.response.config.method.toUpperCase(),
                        url: err.response.config.url,
                        data: err.response.config.data || ""
                    }
                    break
                case 404:
                    errorCtx = {
                        statusText: err.response.statusText,
                        status,
                        message: `Request Error: invalid URL or object not found`,
                        method: err.response.config.method.toUpperCase(),
                        url: err.response.config.url,
                        data: err.response.config.data || ""
                    }
                    break
                case 405:
                    errorCtx = {
                        statusText: err.response.statusText,
                        status,
                        message: `Request Error: invalid HTTP method (e.g. GET instead of POST)`,
                        method: err.response.config.method.toUpperCase(),
                        url: err.response.config.url,
                        data: err.response.config.data || ""
                    }
            }
        } else {
            errorCtx = err.toString()
        }
        errorCtx = JSON.stringify(errorCtx, null, 4)
        throw new Error(errorCtx)
    }
}

module.exports = Infermedica