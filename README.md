# Infermedica (unofficial)
Node interface to the infermedica REST API https://www.npmjs.com/package/infermedica

## Description

This is a Node interface to the Infermedica REST API: https://developer.infermedica.com/docs/api

## Installation

```npm install Infermedica --save```

## Usage examples

#### Estimate triage level based on provided patient information
```js
const Infermedica = require('../index')
const infermedica = new Infermedica({ appId: '', appKey: '' })

const context = {
    sex: "male",
    age: 70,
    evidence: [
        {
            "id": "s_1193",
            "choice_id": "present"
        },
        {
            "id": "s_488",
            "choice_id": "present"
        },
        {
            "id": "s_418",
            "choice_id": "present"
        }
    ]
}

infermedica.postTriage(context).then(res => {
    console.log(res)
})

```

## Infermedica Methods

```js

infermedica.getConditions()` Returns a list of all available conditions.

infermedica.getConditions(conditionId) Returns details of a single condition specified by id parameter 

infermedica.postDiagnosis({ sex, age, evidence, extras, target, evaluated_at }) Suggests possible diagnoses and relevant observations

infermedica.postExplain({ sex, age, evidence, extras, target, evaluated_at }) Explains which evidence impact probability of selected condition

infermedica.getInfo() Returns information about data used by diagnostic engine

infermedica.getLabTests() Returns a list of all available lab tests

infermedica.getLabTest(labTestId) Returns details of a single lab test specified by id parameter

infermedica.getLookUp({ phrase, sex }) Returns a single observation matching given phrase

infermedica.postParse() Returns list of mentions of observation found in given text

infermedica.postParse({ text, context, concept_types, correct_spelling, include_tokens }) Returns list of mentions of observation found in given text

infermedica.getRiskFactors() Returns a list of all available risk factors

infermedica.getRiskFactor(riskFactorId) Returns details of a single risk factor specified by id parameter

infermedica.getRiskFactors() Returns a list of all available risk factors

infermedica.getRiskFactor(riskFactorId) Returns details of a single risk factor specified by id parameter

infermedica.getSearch({ phrase, sex, maxResults, type }) Returns list of observations matching the given phrase

infermedica.postSuggest({ sex, age, evidence, extras, evaluated_at }, max_results) Suggests possible symptoms based on provided patient information

infermedica.getSymptoms() Returns a list of all available symptoms

infermedica.getSymptom(symptomId) Returns details of a single symptom specified by id parameter

infermedica.postTriage({ sex, age, evidence, extras, evaluated_at }) Estimates triage level based on provided patient information

```


