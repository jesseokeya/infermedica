const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

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
