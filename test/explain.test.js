const infermedica = require('./')

test('postExplain()', async () => {
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
    const explain = await infermedica.postExplain(context)
    expect(typeof explain).toEqual('object')
    expect(explain).toMatchObject(explain)
})