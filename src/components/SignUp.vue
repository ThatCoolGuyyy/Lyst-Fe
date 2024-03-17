
<template>
    <form @submit.prevent="submitForm">
      <div class="flex min-h-full flex-1 justify-center px-6 py-12 lg:px-8">
        <div>
        <div>
          <h2 class="text-base font-semibold leading-7 text-gray-900">Sign Up</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600"></p>

        </div>
  
        <div >
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
              <div class="mt-2">
                <input v-model = "first_name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div class="mt-2">
                <input  v-model = "last_name" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900 ">Username</label>
                <div class="mt-2">
                  <input  v-model = "username" id="username" name="username" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"/>
                </div>
              </div>

            <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900 ">Phone</label>
            <div class="mt-2">
                <input  v-model = "phone" id="username" name="phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"/>
            </div>
            </div>
  
  
            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input  v-model = "email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900 ">Password</label>
                <div class="mt-2">
                  <input  v-model = "password" id="password" name="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"/>
                </div>
              </div>

            <div class="sm:col-span-3">
            <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900 ">Re-enter your password</label>
            <div class="mt-2">
                <input  v-model = "password_confirmation" id="password_confirmation" name="password_confirmation" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"/>
            </div>
            </div>

            <div class="sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900 ">Country</label>
                <div class="mt-2">
                  <select  v-model = "country" id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Nigeria</option>
                  </select>
                </div>
              </div>
  
            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
              <div class="mt-2">
                <input  v-model = "address" type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
              <div class="mt-2">
                <input  v-model = "city" type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
              <div class="mt-2">
                <input  v-model = "state" type="text" name="state" id="state" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
          </div>
        </div>
        <br>
        <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        <SuccessAlert :show="showSuccessAlert" @dismiss="handleSuccessDismiss" msg="Signup Successful!" /> 
        <ErrorAlert :show="showErrorAlert" @dismiss="handleFailureDismiss" msg="An error has occured" />
      </div>
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapMutations } from 'vuex'; 
  import SuccessAlert from '@/components/SuccessAlert.vue';
  import ErrorAlert from '@/components/ErrorAlert.vue';
  export default {
      name: 'SignUp',
      components: {
        SuccessAlert,
        ErrorAlert
        },
      data(){
        return{
            first_name : '',
            last_name: '',
            username: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            country: '',
            password: '',
            password_confirmation: '',
            showSuccessAlert: false,
            showErrorAlert:false
        }
      },
      methods: {
        ...mapMutations(['setAccessToken']),  
        submitForm(){
            axios.post('http://localhost:8000/api/auth/signup', {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                phone: this.phone,
                address: this.address,
                email: this.email,
                city: this.city,
                state:this.state,
                country: this.country,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(response => {
                this.showSuccessAlert = true;
                const token = response.data.access_token; 
                this.setAccessToken(token); 
                })
            .catch(error => {
                if(error.response.status === 422){
                    
                }
                this.showErrorAlert = true;
                console.log(error)
            })
        },
        handleSuccessDismiss(){
            this.$router.push('/login'); 
        },
        handleFailureDismiss(){
            this.$router.push('/'); 
        }
      }
  }

  </script>