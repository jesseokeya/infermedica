class Search {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Returns a single observation matching given phrase
     * @param {String} phrase - condtion phrase
     * @param {String} sex - sex / gender of the individual
     * @param {Number} maxResults - max result
     * @param {String} type - valid types [symptom, risk_factor, lab_test]
     * @return {[Object]} result
     * @throws {Error} throws an error if error occurs
     */
    async getSearch(phrase, sex, maxResults, type) {
        try {
            let validTypes = ['symptom', 'risk_factor', 'lab_test'], isValid = false
            if (sex.toLowerCase() !== 'male' || sex.toLowerCase() !== 'female' || sex.toLowerCase() !== 'both') {
                throw new Error('sex should either be male, female or both')
            }
            validTypes.forEach(validType => {
                if (validTypes.includes(validType.toLowerCase())) {
                    isValid = true
                }
            })
            if (!isValid) {
                throw new Error('type should either be symptom, risk_factor or lab_test')
            }
            const search = await this.axios.get(`${this.host}/search?phrase${phrase}&sex=${sex}&max_result=${maxResults}&type=${type}`)
            return search.data
        } catch (err) {
            throw err
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Search