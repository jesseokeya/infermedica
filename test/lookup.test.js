const infermedica = require('./index')

test('getLookUp(context)', async () => {
    const context = {
        sex: "FemAle",
        phrase: "Headache"
    }
    const lookup = await infermedica.getLookUp(context)
    expect(typeof lookup).toEqual('object')
    expect(lookup).toMatchObject(lookup)
})
