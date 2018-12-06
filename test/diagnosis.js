const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '72c76576', appKey: '2c63689dc7de4d0cab1967cb1cd09ef7' })

const context = {
    sex: "male",
    age: 70,
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
infermedica.postDiagnosis(context).then(res => {
    console.log(res)
})
