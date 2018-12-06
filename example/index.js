const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '72c76576', appKey: '2c63689dc7de4d0cab1967cb1cd09ef7' })

const context = {
    sex: 'male', age: 22, evidence: [{
        "id": "s_1190'",
        "initial": true,
        "related": false,
        "choice_id": "present"
    }]
}
infermedica.postSuggest(context, 12).then(res => {
    console.log(res)
})
