class Diagnosis {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Suggests possible diagnoses and relevant observations based on provided patient information
     * @param {Object} context - { sex, age, evidence, extras, evaluated_at }
     * @return {Object} Diagnosis
     * @throws {Error} throws an error if error occurs
     */
    async postDiagnosis({ sex, age, evidence, extras, target, evaluated_at }) {
        try {
            const context = { sex, age, evidence, extras, target, evaluated_at }
            const diagnosis = await this.axios.post(`${this.host}/diagnosis`, context)
            return diagnosis.data
        } catch (err) {
           this._handleError(err)
        }
    }
}

module.exports = Diagnosis