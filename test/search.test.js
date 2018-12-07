const infermedica = require('./index')

test('getSearch()', async () => {
    const context = {
        sex: "male",
        phrase: "stomache pain",
        type: "symptom",
        maxResults: 8
    }
    const search = await infermedica.getSearch(context)
    expect(typeof search).toEqual('object')
    expect(search).toMatchObject(search)
})
