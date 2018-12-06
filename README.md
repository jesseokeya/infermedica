# Infermedica (unofficial)
Node interface to the infermedica REST API

## Description

This is a Node interface to the Infermedica REST API: https://developer.infermedica.com/docs/api

## Installation

```npm install --save```

## Usage examples

#### Fetching symptoms
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
