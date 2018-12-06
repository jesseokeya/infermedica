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
`infermedica.getConditions()` Returns a list of all available conditions. <br/>
`infermedica.getConditions(conditionId)` Returns details of a single condition specified by id parameter <br/>

`infermedica.postDiagnosis()` Suggests possible diagnoses and relevant observations based on provided patient information <br/>

`infermedica.postExplain()` Explains which evidence impact probability of selected condition<br/>

`infermedica.getInfo()` Returns information about data used by diagnostic engine. <br/>
