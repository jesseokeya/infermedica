class Info {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Gets info on conditions, symptoms risk_factors and lab_tests
     * @return {[Object]} info
     * @throws {Error} throws an error if error occurs
     */
    async getInfo() {
        try {
            const info = await this.axios.get(`${this.host}/info`)
            return info.data
        } catch (err) {
            throw err
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Info