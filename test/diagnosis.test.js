const infermedica = require('./')

test('postDiagnosis(context)', async () => {
    const context = {
        sex: "MalE",
        age: '70',
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

    const diagnosis = await infermedica.postDiagnosis(context)
    expect(typeof diagnosis).toEqual('object')
    expect(diagnosis).toMatchObject(diagnosis)
})
