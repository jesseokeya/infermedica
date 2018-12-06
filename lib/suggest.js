class Suggest {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    async postSuggest(context) {
        try {
            const suggest = await this.axios.post('')
            return suggest.data
        } catch (err) { 
            throw err
        }
    }
}

module.exports = suggest