const infermedica = require('./')

test('getConditions()', async () => {
  const conditions = await infermedica.getConditions()
  expect(conditions).toEqual(expect.arrayContaining(conditions))
  expect(typeof conditions).toEqual('object')
});

test('getCondition(conditionId)', async () => {
  const condition = await infermedica.getCondition('c_522')
  expect(condition).toMatchObject(condition);
})