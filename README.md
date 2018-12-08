# Infermedica (unofficial)
Node Interface To The Infermedica Rest Api. [Npm Package](https://www.npmjs.com/package/infermedica)

## Description
This is a Node interface to the Infermedica [Rest Api](https://developer.infermedica.com/docs/api).

## Installation

```npm install infermedica --save```

## Usage examples

#### Estimate triage level based on provided patient information
```js

const Infermedica = require('infermedica')
/** 
 * Provide credentials
 * This reference can help you explore the Infermedica API with your own data. 
 * Make sure that your application id and application key are correct and get started. 
 * Below they are passed in as environment variables
 */
const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

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

// Returns a list of all available conditions
infermedica.getConditions()

// Returns details of a single condition specified by id parameter 
infermedica.getCondition(conditionId)

// Suggests possible diagnoses and relevant observations
infermedica.postDiagnosis({ sex, age, evidence, extras, target, evaluated_at }) 

// Explains which evidence impact probability of selected condition
infermedica.postExplain({ sex, age, evidence, extras, target, evaluated_at })

// Returns information about data used by diagnostic engine
infermedica.getInfo() 

// Returns a list of all available lab tests
infermedica.getLabTests()

// Returns details of a single lab test specified by id parameter
infermedica.getLabTest(labTestId)

// Returns a single observation matching given phrase
infermedica.getLookUp({ phrase, sex })

// Returns list of mentions of observation found in given text
infermedica.postParse({ text, context, concept_types, correct_spelling, include_tokens })

// Returns a list of all available risk factors
infermedica.getRiskFactors()

// Returns details of a single risk factor specified by id parameter
infermedica.getRiskFactor(riskFactorId) 

// Returns list of observations matching the given phrase
infermedica.getSearch({ phrase, sex, maxResults, type })

// Suggests possible symptoms based on provided patient information
infermedica.postSuggest({ sex, age, evidence, extras, evaluated_at }, max_results)

// Returns a list of all available symptoms
infermedica.getSymptoms()

// Returns details of a single symptom specified by id parameter
infermedica.getSymptom(symptomId)

// Estimates triage level based on provided patient information
infermedica.postTriage({ sex, age, evidence, extras, evaluated_at })

```

## Actions

### getAllConditions
Returns a list of all available conditions.

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

infermedica.getConditions().then(conditions => {
    console.log(conditons)
})
```

### getAllCondition
Returns details of a single condition specified by id parameter 

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

infermedica.getCondition('c_522').then(condition => {
    console.log(conditon)
})
```

### postDiagnosis
Suggests possible diagnoses and relevant observations

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

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

infermedica.postDiagnosis(context).then(diagnosis => {
    console.log(diagnosis)
})
```

### postExplain
Explains which evidence impact probability of selected condition

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

const context = {
    sex: "male",
    age: 70,
    target: "c_49",
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

infermedica.postExplain(context).then(explain => {
    console.log(explain)
})
```

### getInfo
Returns information about data used by diagnostic engine

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

infermedica.getInfo().then(info => {
    console.log(info)
})
```

### getLabTests
Returns a list of all available lab tests

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

infermedica.getLabTests().then(labTests => {
    console.log(labTests)
})
```

### getLabTest
Returns details of a single lab test specified by id parameter

```js
const Infermedica = require('infermedica')

const infermedica = new Infermedica({ appId: process.env.APP_ID, appKey: process.env.APP_KEY })

infermedica.getLabTest('lt_350').then(labTest => {
    console.log(labTest)
})
```