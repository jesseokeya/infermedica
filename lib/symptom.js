class Symptom {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Returns a list of all available symptoms.
     * @return {[Object]} Symptoms
     * @throws {Error} throws an error if error occurs
     */
    async getSymptoms() {
        try {
            const symptoms = await this.axios.get(`${this.host}/symptoms`)
            return symptoms.data
        } catch (err) {
            this._handleError(err)
        }
    }

    /**
     * Returns details of a single symptom specified by id parameter
     * @param {String} riskFactorId - The id of a particular symptom
     * @return {Object} Symptom
     * @throws {Error} throws an error if error occurs
     */
    async getSymptom(symptomId) {
        try {
            const symptom = await this.axios.get(`${this.host}/symptoms/${symptomId}`)
            return symptom.data
        } catch (err) {
            this._handleError(err)
        }
    }
}

module.exports = Symptom