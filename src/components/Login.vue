<template>
    <div class="mt-11 bg-slate-700 " style="width: 200%;">
        <SiteNavigation/>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" @submit.prevent="loginUser">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input v-model="formData.email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input v-model="formData.password" name="password" type="password"
                                autocomplete="current-password" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">

                    <router-link to="/Register"
                        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SiteNavigation from './SiteNavigation.vue';
const isAuthenticated = ref(!!localStorage.getItem('token'));
const formData = ref({
    email: '',
    password: ''
});

const router = useRouter();

const loginUser = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(formData.value);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:8000/api/login", requestOptions);
        const result = await response.json();
        console.log(result);
        alert(result.message);

        // Assuming a successful login, redirect to the home page
        if (response.ok) {
            // Save token in localStorage
            localStorage.setItem('token', result.data.token);

            // Update the authentication status
            isAuthenticated.value = true;

            // Redirect to the home page using Vue Router
            router.push('/');

            // Reload the page after the router push
            window.location.reload()
        } else {
            // Handle login error
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle login error
    }
};
</script>

<style scoped>
/* Your styling goes here */
</style>
  