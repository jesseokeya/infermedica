class Condition {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Gets all conditions available
     * @return {[Object]} All conditions
     * @throws {Error} throws an error if error occurs
     */
    async getConditions() {
        try {
            const conditions = await this.axios.get(`${this.host}/conditions`)
            return conditions.data
        } catch (err) {
            this._handleError(err)
        }
    }

    /**
     * Get condition by id
     * @param {String} conditionId - The id of a particular condition
     * @return {Object} condition
     * @throws {Error} throws an error if error occurs
     */
    async getCondition(conditionId) {
        try {
            const condition = await this.axios.get(`${this.host}/conditions/${conditionId}`)
            return condition.data
        } catch (err) {
            this._handleError(err)
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = Condition