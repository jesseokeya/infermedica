const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

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

// Explains which evidence impact probability of selected condition
infermedica.postExplain(context).then(res => {
    console.log(res)
})
