const infermedica = require('./')

test('getSymptoms()', async () => {
  const symptoms = await infermedica.getSymptoms()
  console.log(symptoms)
  expect(symptoms).toEqual(expect.arrayContaining(symptoms))
  expect(typeof symptoms).toEqual('object')
});

test('getSymptom()', async () => {
  const symptom = await infermedica.getSymptom('s_1190')
  expect(symptom).toMatchObject(symptom);
  expect(typeof symptom).toEqual('object')
})