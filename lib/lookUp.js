class LookUp {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Returns a single observation matching given phrase
     * @param {String} phrase - condtion phrase
     * @param {String} sex - sex / gender of the individual
     * @return {[Object]} info
     * @throws {Error} throws an error if error occurs
     */
    async getLookUp(phrase, sex) {
        try {
            if (sex.toLowerCase() !== 'male' || sex.toLowerCase() !== 'female') {
                throw new Error('sex should either be male or female')
            }
            const lookUp = await this.axios.get(`${this.host}/lookup?phrase=${phrase}&sex=${sex}`)
            return lookUp
        } catch (err) {
            throw err
        }
    }
}

module.exports = LookUp