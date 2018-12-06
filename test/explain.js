const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

const context = {
    sex: "male",
    age: 70,
    target: "c_49",
    evidence: [
        {
            "id": "s_1193",
            "choice_id": "present"
        },
        {
            "id": "s_488",
            "choice_id": "present"
        },
        {
            "id": "s_418",
            "choice_id": "present"
        }
    ]
}
infermedica.postExplain(context).then(res => {
    console.log(res)
})
