class RiskFactors {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }
}

module.exports = RiskFactors