class LabTest {
    constructor(options = {}) {
        const { host, axios } = options
        this.host = host
        this.axios = axios
    }

    /**
     * Gets all lab tests available
     * @return {[Object]} Lab Tests
     * @throws {Error} throws an error if error occurs
     */
    async getLabTests() {
        try {
            const labTests = await this.axios.get(`${this.host}/lab_tests`)
            return labTests.data
        } catch (err) {
            this._handleError(err)
        }
    }

    /**
     * Get lab test by Id
     * @param {String} labTestId - The id of a particular lab test
     * @return {Object} labTest
     * @throws {Error} throws an error if error occurs
     */
    async getLabTest(labTestId) {
        try {
            const labTest = await this.axios.get(`${this.host}/lab_tests/${labTestId}`)
            return labTest.data
        } catch (err) {
            this._handleError(err)
        }
    }

    _handleError(err) {
        throw err
    }
}

module.exports = LabTest