class Suggest {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Suggests possible symptoms based on provided patient information
     * @param {Object} context - { sex, age, evidence, extras, evaluated_at }
     * @param {Number} max_results - limit the size of array it returns
     * @return {Object} Suggest
     * @throws {Error} throws an error if error occurs
     */
    async postSuggest({ sex, age, evidence, extras, evaluated_at }, max_results) {
        try {
            max_results = max_results || 8
            const context = { sex, age, evidence, extras, evaluated_at }
            const suggest = await this.axios.post(`${this.host}/suggest?max_results=${max_results}`, context)
            return suggest.data
        } catch (err) {
            this._handleError(err)
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Suggest