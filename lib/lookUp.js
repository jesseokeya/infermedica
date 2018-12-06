class LookUp {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Returns a single observation matching given phrase
     * @param {string} phrase - condtion phrase
     * @param {string} sex - sex / gender of the individual
     * @return {[Object]} info
     * @throws {Error} throws an error if error occurs
     */
    getLookUp(phrase, sex) {
        try {
            if (sex.toLowerCase() !== 'male' || sex.toLowerCase() !== 'female') {
                throw new Error('Sex should either be male or female')
            }
            const lookUp = await this.axios.get(`${this.host}/lookup?phrase=${phrase}&sex=${sex}`)
            return lookUp
        } catch (err) {
            throw err
        }
    }
}