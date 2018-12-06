const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

infermedica.getSymptoms().then(res => {
    console.log(res.data)
})
