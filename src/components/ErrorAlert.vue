<template>
    <div v-if="show" class="bg-red-200 text-red-800 p-3 rounded">
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
  