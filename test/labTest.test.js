const infermedica = require('./')

test('getLabTests()', async () => {
  const labTests = await infermedica.getLabTests()
  expect(labTests).toEqual(expect.arrayContaining(labTests))
  expect(typeof labTests).toEqual('object')
});

test('getLabTest()', async () => {
  const labTest = await infermedica.getLabTest('lt_350')
  expect(labTest).toMatchObject(labTest);
  expect(typeof labTest).toEqual('object')
})