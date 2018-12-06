class Explain {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Explains which evidence impact probability of selected condition
     * @param {Object} context - { sex, age, evidence, extras, evaluated_at }
     * @param {Number} max_results - limit the size of array it returns
     * @return {Object} Explain
     * @throws {Error} throws an error if error occurs
     */
    async postExplain({ sex, age, evidence, extras, target, evaluated_at }) {
        try {
            const context = { sex, age, evidence, extras, target, evaluated_at }
            const explain = await this.axios.post(`${this.host}/explain`, context)
            return explain.data
        } catch (err) {
           this._handle(err)
        }
    }

    _handle(err) {
        console.log(err)
    }

}

module.exports = Explain