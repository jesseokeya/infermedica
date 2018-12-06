class Parse {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Returns list of mentions of observation found in given text
     * @param {Object} context - { text, context, concept_types, correct_spelling, include_tokens }
     * @return {Object} Parse
     * @throws {Error} throws an error if error occurs
     */
    async postParse({ text, context, concept_types, correct_spelling, include_tokens }) {
        try {
            const ctx = { text, context, concept_types, correct_spelling, include_tokens }
            const parse = await this.axios.post(`${this.host}/parse`, ctx)
            return parse.data
        } catch (err) {
            throw err
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Parse