const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

infermedica.getRiskFactor('p_1').then(res => {
    console.log(res.data)
})
