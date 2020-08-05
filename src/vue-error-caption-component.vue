<template>
  <span>
    <div v-for="message in generateValidationMessage(model)" :key="message">
      <small class="text-error p-0 text-danger" v-if="model.$error">{{ message }}</small>
    </div>
  </span>
</template>

<script>
export default {
  name: 'ErrorCaption',

  props: {
    model: {
        type: Object,
        default: () => {}
    },
    validationMessages: {
        type: Object,
        default: () => {}
    },
    class: {
        type: String,
        default: ''
    }
  },

  methods: {
    generateValidationMessage: function (validation) {
      let message = []

      for (const key in validation) {
        if (validation[key] != true && this?.validationMessages[key]) {
          let matches = this.validationMessages[key].match(/(?<={{)([a-zA-Z0-9.]+)(?=}})/gi)
          let currMessage = this.validationMessages[key]
          if (matches != null)
            for (const innerKey in matches)
              currMessage = currMessage
                .replace(/(?<={{)([a-zA-Z0-9.]+)(?=}})/i, validation.$params[key][matches[innerKey]] ?? validation.$params[key].$sub[0][matches[innerKey]])
                .replace(/{{/i, '')
                .replace(/}}/i, '')
          message.push(currMessage + '. ')
        }
      }

      return message
    }
  },
}
</script>
