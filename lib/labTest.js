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
            return labTests
        } catch (err) {
            throw err
        }
    }

    /**
     * Get lab test by Id
     * @param {string} labTestId - The id of a particular lab test
     * @return {Object} labTest
     * @throws {Error} throws an error if error occurs
     */
    async getLabTest(labTestId) {
        try {
            const labTest = await this.axios.get(`${this.host}/lab_tests/${labTestId}`)
            return labTest
        } catch (err) {
            throw err
        }
    }
}

module.exports = LabTest