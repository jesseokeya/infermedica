const infermedica = require('./index')

test('getInfo()', async () => {
    const info = await infermedica.getInfo()
    expect(typeof info).toEqual('object')
    expect(info).toMatchObject(info)
})