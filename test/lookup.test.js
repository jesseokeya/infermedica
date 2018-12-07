const infermedica = require('./index')

test('getLookUp()', async () => {
    const context = {
        sex: "male",
        phrase: "headache"
    }
    const lookup = await infermedica.getLookUp(context)
    expect(typeof lookup).toEqual('object')
    expect(lookup).toMatchObject(lookup)
})
