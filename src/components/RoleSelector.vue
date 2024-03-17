<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="@/assets/Screenshot-2024-03-14-at-23.28.37.svg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome! Let's get you started.</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <button @click ="selectRole('owner')" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">I'm looking to manage my properties and find great tenants</button>
          </div>
          <br>
          <div>
            <button @click ="selectRole('tenant')" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">I'm looking to find your perfect rental and connect with owners.</button>
          </div>
      </div>
    </div>
  </template>

<script>
    export default {
        name: 'RoleSelector',
        data(){
            return{
                
            }
        },
        methods: {
            selectRole(role){
                this.$router.push({ path: `/dashboard/${role}` }); 
            }
        }
        
    }
</script>

<style scoped>

</style>