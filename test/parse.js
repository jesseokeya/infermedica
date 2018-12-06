const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

const context = {
    "text": "I feel smoach pain but no couoghing today",
}
infermedica.postParse(context).then(res => {
    console.log(res)
})
