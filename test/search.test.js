const infermedica = require('./index')

test('getSearch(context)', async () => {
    const context = {
        sex: "malE",
        phrase: "Stomache pain",
        type: "Symptom",
        maxResults: 8
    }
    const search = await infermedica.getSearch(context)
    expect(typeof search).toEqual('object')
    expect(search).toMatchObject(search)
})
