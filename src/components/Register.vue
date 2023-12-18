<template>
    <div>
        <div class="mt-1 bg-slate-700 " style="width: 200%;">
            <SiteNavigation/>
            <div class="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company">
                    <h2 class="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register in to
                        new
                        account</h2>
                </div>

                <div class="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" @submit.prevent="registerUser">
                        <div>
                            <label for="Name" class="block text-sm font-medium leading-6 text-gray-900">Name
                            </label>
                            <div class="mt-0">
                                <input v-model="formData.firstname" type="text" required
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div>
                            <label for="mobile" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                            <div class="mt-0">
                                <input v-model="formData.mobile" type="text" autocomplete="mobile" required
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                                address</label>
                            <div class="mt-0">
                                <input v-model="formData.email" type="email" autocomplete="email" required
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div class="mt-0">
                                <input v-model="formData.password" type="password" autocomplete="current-password" required
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                in</button>
                        </div>
                    </form>

                    <p class="mt-3 text-center text-sm text-gray-500">
                       if you have alredy account?
                        <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SiteNavigation from './SiteNavigation.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const formData = ref({
    firstname: '',
    mobile: '',
    email: '',
    password: '',
    role: 'customer'
});
const router = useRouter();
const registerUser = async () => {
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

        const response = await fetch("http://localhost:8000/api/register", requestOptions);
        const result = await response.json();
        console.log(result);
        alert(result.message)
        router.push('/login');
        // Handle success or redirect the user
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
};
</script>


<style lang="scss" scoped></style>