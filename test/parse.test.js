const infermedica = require('./index')

test('postParse()', async () => {
    const context = {
        "text": "I feel smoach pain but no couoghing today",
    }
    const parse = await infermedica.postParse(context)
    expect(typeof parse).toEqual('object')
    expect(parse).toMatchObject(parse)
})
