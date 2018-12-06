class RiskFactors {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    async getRiskFactors() {}

    async getRiskFactor() {}
}

module.exports = RiskFactors