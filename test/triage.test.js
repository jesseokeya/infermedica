const infermedica = require('./index')

test('postTriage()', async () => {
    const context = {
        sex: "malE",
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

    const triage = await infermedica.postTriage(context)
    expect(typeof triage).toEqual('object')
    expect(triage).toMatchObject(triage)
})