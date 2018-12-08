const infermedica = require('./')

test('getRiskFactors()', async () => {
  const riskFactors = await infermedica.getRiskFactors()
  expect(riskFactors).toEqual(expect.arrayContaining(riskFactors))
  expect(typeof riskFactors).toEqual('object')
});

test('getRiskFactor(riskFactorId)', async () => {
  const riskFactor = await infermedica.getRiskFactor('p_28')
  expect(riskFactor).toMatchObject(riskFactor);
  expect(typeof riskFactor).toEqual('object')
})