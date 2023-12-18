<template>
    <div>


        <header class="absolute inset-x-0 top-0 z-50 bg-weather-secondary">

            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <RouterLink :to="{ name: 'home' }">
                    <div class="flex lg:flex-1">
                        <a href="/" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="">
                        </a>
                    </div>
                </RouterLink>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="/Products" class="text-sm font-semibold leading-6 text-white-900">Product</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white-900">Features</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white-900">Marketplace</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white-900">Company</a>
                </div>
                <template v-if="token">
                    <a class="relative" @click="toggleCartModel">
                        Cart
                        <!-- Show badge only if there are items in the cart -->
                        <span v-if="cartLength" class="absolute bottom-1 left-8 font-semibold  bg-red-500 text-white  "
                            style="border-radius:770%;padding:13%">
                            {{ cartLength }}
                        </span>
                    </a>
                    <button @click="logoutUser" class="text-sm font-semibold leading-6 text-gray-900">
                        Logout <span aria-hidden="true">&rarr;</span>
                    </button>
                </template>
                <template v-else>
                    <a href="/login">
                        Log in / Register <span aria-hidden="true">&rarr;</span>
                    </a>

                </template>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden" role="dialog" aria-modal="true">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="fixed inset-0 z-50"></div>
                <div
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="">
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                            </div>
                            <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div v-if="isCartModelOpen" class="relative z-10" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">yyyyyyyyyy

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" @click="toggleCartModel"
                                                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="absolute -inset-0.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                <li v-for="(item, index) in cart" :key="index" class="flex py-6">
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?w=740&t=st=1702550042~exp=1702550642~hmac=251b58f424ed6fb690fbd4b3f325b7f560df80848a8f2f06850d7139279369b0"
                                                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                            class="h-full w-full object-cover object-center">
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">{{ item.productDetails.title }}</a>
                                                                </h3>
                                                                <p class="ml-4">$ {{ item.productDetails.price }}.00</p>
                                                            </div>
                                                            <p class="mt-1 text-sm text-gray-500">
                                                                {{ item.productDetails.content }}</p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <p class="text-gray-500">Qty 1</p>

                                                            <div class="flex">
                                                                <button type="button" @click="removeItem(item?._id)"
                                                                    class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$ {{ totalAmount }}.00</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div class="mt-6">
                                        <router-link :to="{ name: 'Checkout', params: { id: currentUserID } }"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </router-link>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <a href="/Products">
                                                <button type="button"
                                                    class="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
function removeItem(productId) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(`http://localhost:8000/api/Deletecart/${productId}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            // Handle the result or perform additional actions
            console.log(result);
            alert(result.message)
            window.location.reload()
        })
        .catch(error => {
            // Handle errors
            console.log('error', error);
        });
}
</script>
<script setup>
import { RouterLink } from 'vue-router'
import BaseModel from './BaseModel.vue';
import Features from './Features.vue';

const totalAmount = ref(0);
const calculateTotalAmount = () => {
    totalAmount.value = cart.value.reduce((total, item) => {
        // Assuming each item has a 'productDetails.price' property
        const itemTotal = item.quantity * parseFloat(item.productDetails.price);
        return total + itemTotal;
    }, 0);
};

let isCartModelOpen = ref(false);


const toggleCartModel = () => {
    isCartModelOpen.value = !isCartModelOpen.value;
};
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const token = localStorage.getItem('token');
const currentUserID = ref(null);
const cart = ref([]);
let cartLength = ref(null);
console.log(token, "Token")
const logoutUser = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');

    // Update the isLoggedIn flag

    // Redirect to the home page or login page
    router.push('/');
    window.location.reload()
};

const fetchDataWithUserId = async (userId) => {
    try {
        // Modify the API endpoint to use the userId
        const response = await fetch(
            `http://localhost:8000/api/Allcart/${userId}`,
            { method: 'GET' }
        );
        const result = await response.json();
        // Update the reactive cart property
        cart.value = result?.cart || [];
        console.log(result, "Data with userId");
        cartLength.value = result?.length;
        calculateTotalAmount();
    } catch (error) {
        console.error('Error fetching data with userId:', error);
    }
};

const fetchDataWithToken = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/editUserbytoken/${token}`,
            { method: 'GET' }
        );
        const result = await response.json();
        console.log(result, "Single User Data!");
        const userID = result?.data?._id;
           currentUserID.value = userID;

        await fetchDataWithUserId(userID);
        console.log(userID, "UserID")
    } catch (error) {
        console.error('Error fetching data with token:', error);
    }
};


// Fetch data when the component is mounted
onMounted(() => {
    if (token) {
        fetchDataWithToken();
    }
});
</script>

<style >
.page-enter-active,
.page-leave-active {
    transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>

