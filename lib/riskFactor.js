class RiskFactors {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }
    /**
     * Returns a list of all available risk factors
     * @return {[Object]} Risk factors
     * @throws {Error} throws an error if error occurs
     */
    async getRiskFactors() { 
        try {
            const riskFactors = await this.axios.get(`${this.host}/risk_factors`)
            return riskFactors
        } catch (err) {
            throw err
        }
    }

    /**
     * Returns details of a single risk factor specified by id parameter
     * @param {String} riskFactorId - The id of a particular risk factor
     * @return {Object} Risk Factor
     * @throws {Error} throws an error if error occurs
     */
    async getRiskFactor(riskFactorId) {
        try {
            const riskFactor = await this.axios.get(`${this.host}/risk_factors/${riskFactorId}`)
            return riskFactor
        } catch (err) {
            throw err
        }
    }
}

module.exports = RiskFactors