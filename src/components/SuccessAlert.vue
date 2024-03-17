<template>
    <div v-if="show" class="bg-green-200 text-green-800 p-3 rounded">
      {{ msg }}
      <button @click="dismiss">Dismiss</button> 
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean, 
        default: false 
      },
      msg: {
        type: String,
        required: true
      }

    },
    methods: {
      dismiss() {
        this.$emit('dismiss');
      }
    }
  }
  </script>
  