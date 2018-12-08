const infermedica = require('./')

test('postExplain(context)', async () => {
    const context = {
        sex: "malE",
        age: '70',
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