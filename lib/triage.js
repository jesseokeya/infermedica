class Triage {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Estimates triage level based on provided patient information.
     * @param {Object} context - { sex, age, evidence, extras, evaluated_at }
     * @return {Object} Triage
     * @throws {Error} throws an error if error occurs
     */
    async postTriage({ sex, age, evidence, extras, evaluated_at }) {
        try {
            const context = { sex, age, evidence, extras, evaluated_at }
            const triage = await this.axios.post(`${this.host}/triage`, context)
            return triage.data
        } catch (err) {
            this._handleError(err)
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Triage