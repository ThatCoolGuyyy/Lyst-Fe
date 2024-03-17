<template>
    <div class=" fixed w-full">
        <nav class="bg-white border-gray-200 light:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img ro src="@/assets/Screenshot-2024-03-14-at-23.28.37.svg" class="h-8" alt="Lyst Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap light:text-white">Lyst</span>
            </RouterLink>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:light-gray-800 md:dark:light-gray-900 dark:border-gray-700">
                <!-- <div v-show="">
                    
                </div> -->
                <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-dark md:dark:hover:text-white-500 light:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-dark md:dark:hover:text-white-500 light:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-dark md:dark:hover:text-white-500 light:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name : 'NavBar'
        
    }
</script>