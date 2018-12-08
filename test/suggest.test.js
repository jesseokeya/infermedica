const infermedica = require('./index')

test('postSuggest(context)', async () => {
    const context = {
        sex: "mAle",
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

    const suggest = await infermedica.postSuggest(context)
    expect(typeof suggest).toEqual('object')
    expect(suggest).toMatchObject(suggest)
})