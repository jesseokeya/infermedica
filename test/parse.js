const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '72c76576', appKey: '2c63689dc7de4d0cab1967cb1cd09ef7' })

const context = {
    "text": "I feel smoach pain but no couoghing today",
}
infermedica.postParse(context).then(res => {
    console.log(res)
})
