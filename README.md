# vuelidate-caption

### Description
A component that displays validation errors, built for Vuelidate

## Project setup
```
npm install vuelidate-caption
```
## Import the component
```javascript
import VuelidateCaption from 'vuelidate-caption'

export default {
    components: {
        VuelidateCaption
    }
}
```

### Usage

```Vue
<template>
    <div>
        <input type="text" v-model="$v.example.$model">
        <VuelidateCaption :model="$v.example" :validationMessages="validationMessages">
    </div>
</template>

import VuelidateCaption from 'vuelidate-caption'
import { required } from 'vuelidate/lib/validators'

export default {
    components: {
        VuelidateCaption
    },

    validations: {
        example: { required }
    },

    computed: {
        validationMessages: () => {
            required: 'Required value'
        }
    }

    data: () => {
        example: ''
    }
}
```

Whenever $error is triggered on the Vuelidate Model (```model``` prop), the corresponding validation message from ```validationMessages``` will be rendered.

### Props

Prop | Description | Default
------------ | ------------- | -------------
```model``` | The corresponding Vuelidate Model, which contains ```$error```, ```$invalid```, ```$dirty``` properties | Empty object (```() => {}```)
```validationMessages``` | An object that contains the validation messages (eg. ```{ validation-name: 'Validation message'}```) | Empty object (```() => {}```)
```textClass``` | String to be applied to the rendered component's ```class``` attribute | Empty String (```''```)
