<template>
    <div style="width:195%">
        <SiteNavigation />
        <div class="bg-white mt-11" style="margin-top:10%" v-if="product">
            <div class="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div class="flex items-center">
                                    <a href="/" class="mr-2 text-sm font-medium text-gray-900">Home</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                                    class="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <a href="/Products" class="mr-2 text-sm font-medium text-gray-900">All Products</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                                    class="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li class="text-sm">
                            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
                                product.title }}
                            </a>
                        </li>
                    </ol>
                </nav>

                <!-- Image gallery -->
                <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                            alt="Two each of gray, white, and black shirts laying flat."
                            class="h-full w-full object-cover object-center">
                    </div>
                    <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                                alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                        </div>
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                                alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                        </div>
                    </div>
                    <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                            alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>

                <!-- Product info -->
                <div
                    class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.title }} <span
                                style="background-color: green;padding: 2%;border-radius: 80%;color: aliceblue;">{{
                                    product.resturant_id.Offers }}% Off</span></h1>
                    </div>

                    <!-- Options -->
                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl tracking-tight text-gray-900">$ {{ product.price }}</p>

                        <!-- Reviews -->
                        <div class="mt-6">
                            <h3 class="sr-only">Reviews</h3>
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg class="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="sr-only">4 out of 5 stars</p>
                                <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                                    product.resturant_id.Likes }}
                                    reviews</a>
                            </div>
                        </div>

                        <!-- Colors -->
                        <div>
                            <h3 class="text-sm font-medium text-gray-900">Color</h3>

                            <fieldset class="mt-4">
                                <legend class="sr-only">Choose a color</legend>
                                <div class="flex items-center space-x-3">
                                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                                    <label
                                        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                        <input type="radio" name="color-choice" value="White" class="sr-only"
                                            aria-labelledby="color-choice-0-label">
                                        <span id="color-choice-0-label" class="sr-only">White</span>
                                        <span aria-hidden="true"
                                            class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                                    </label>
                                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                                    <label
                                        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                        <input type="radio" name="color-choice" value="Gray" class="sr-only"
                                            aria-labelledby="color-choice-1-label">
                                        <span id="color-choice-1-label" class="sr-only">Gray</span>
                                        <span aria-hidden="true"
                                            class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                                    </label>
                                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                                    <label
                                        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                        <input type="radio" name="color-choice" value="Black" class="sr-only"
                                            aria-labelledby="color-choice-2-label">
                                        <span id="color-choice-2-label" class="sr-only">Black</span>
                                        <span aria-hidden="true"
                                            class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <!-- Sizes -->
                        <div class="mt-10">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                    guide</a>
                            </div>

                            <fieldset class="mt-4">
                                <legend class="sr-only">Choose a size</legend>
                                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                                        <input type="radio" name="size-choice" value="XXS" disabled class="sr-only"
                                            aria-labelledby="size-choice-0-label">
                                        <span id="size-choice-0-label">XXS</span>
                                        <span aria-hidden="true"
                                            class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                            <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                            </svg>
                                        </span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="XS" class="sr-only"
                                            aria-labelledby="size-choice-1-label">
                                        <span id="size-choice-1-label">XS</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="S" class="sr-only"
                                            aria-labelledby="size-choice-2-label">
                                        <span id="size-choice-2-label">S</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="M" class="sr-only"
                                            aria-labelledby="size-choice-3-label">
                                        <span id="size-choice-3-label">M</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="L" class="sr-only"
                                            aria-labelledby="size-choice-4-label">
                                        <span id="size-choice-4-label">L</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="XL" class="sr-only"
                                            aria-labelledby="size-choice-5-label">
                                        <span id="size-choice-5-label">XL</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="2XL" class="sr-only"
                                            aria-labelledby="size-choice-6-label">
                                        <span id="size-choice-6-label">2XL</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <!-- Active: "ring-2 ring-indigo-500" -->
                                    <label
                                        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="3XL" class="sr-only"
                                            aria-labelledby="size-choice-7-label">
                                        <span id="size-choice-7-label">3XL</span>
                                        <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                                        <span class="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <button @click="addToCart(product._id)"
                            class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add
                            to Cart</button>

                    </div>

                    <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        <!-- Description and details -->
                        <div>
                            <h3 class="sr-only">Description</h3>

                            <div class="space-y-6">
                                <p class="text-base text-gray-900">{{ product.content }} ({{ product.tags }})</p>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h3 class="text-sm font-medium text-gray-900">Resturant Details</h3>

                            <div class="mt-4">
                                <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                    <li class="text-gray-400"><span class="text-gray-600"> Resturant Name :- {{
                                        product.resturant_id.Resturnat_name }}</span>
                                    </li>
                                    <li class="text-gray-400"><span class="text-gray-600"> Resturant Address :- {{
                                        product.resturant_id.resturant_address }} ,{{
        product.resturant_id.resturant_city }}, {{ product.resturant_id.state }}
                                        </span></li>
                                    <li class="text-gray-400"><span class="text-gray-600"> Resturant Opening and Closing
                                            Timing :- {{ product.resturant_id.Timming }} </span>
                                    </li>
                                    <li class="text-gray-400"><span class="text-gray-600"> About :- {{
                                        product.resturant_id.About }}</span></li>
                                    <li class="text-gray-400"><span class="text-gray-600"> Contact Details :- {{
                                        product.resturant_id.email }} ,{{ product.resturant_id.Resturant_helpline_no }}
                                        </span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">Category</h2>

                            <div class="mt-4 space-y-6">
                                <p class="text-sm text-gray-600">{{ product.category_id.title }}</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h2 class="text-sm font-medium text-gray-900">Comments</h2>

                            <div class="mt-4 space-y-6">
                                <p class="text-sm text-gray-600">{{ product.resturant_id.Comments }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white mt-11" style="margin-top:10%" v-else>
            <div class="border-t-4 border-blue-500 border-solid h-12 w-12 animate-spin"></div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SiteNavigation from '../components/SiteNavigation.vue';

// Create a reactive variable to store products
const products = ref([]);

// Define a ref to store the product data
const product = ref(null);

// Access the current route using useRoute
const route = useRoute();
const router = useRouter();

// Use onMounted to fetch data when the component is mounted
onMounted(async () => {
    try {
        // Check if params are available
        if (route.params) {
            // Extract the product ID from the URL
            const productId = route.params.id;
            console.log(productId, "This is Product Id!")
            // Fetch data using the product ID
            const response = await fetch(`http://localhost:8000/api/editmenu/${productId}`);
            const data = await response.json();

            // Log the received data
            console.log('Received data:', data);

            // Assign the data to the product variable
            product.value = data.data;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Check if the user is logged in (token exists in localStorage)
const token = localStorage.getItem('token');
console.log(token, "kkkk");

// Use computed for a reactive property indicating whether the user is logged in
const isUserLoggedIn = computed(() => !!token);

// Fetch data from the API when the component is mounted
const fetchDataWithToken = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/editUserbytoken/${token}`,
            { method: 'GET' }
        );
        const result = await response.json();
        console.log(result, "Single User Data!");
        const userID = result?.data?._id;
        console.log(userID, "UserID");
    } catch (error) {
        console.error('Error fetching data with token:', error);
    }
};

// Function to handle adding to cart
const addToCart = async (productId) => {
    try {
        // Check if the user is logged in
        if (!isUserLoggedIn.value) {
            // Redirect to the login page or handle the case when the user is not logged in
            router.push('/login');
            return;
        }

        // Fetch user data with token
        const response = await fetch(
            `http://localhost:8000/api/editUserbytoken/${token}`,
            { method: 'GET' }
        );
        const userData = await response.json();
        const customerId = userData?.data?._id;

        // Make a POST request to addToCart API
        const addToCartHeaders = new Headers();
        addToCartHeaders.append("Content-Type", "application/json");
        addToCartHeaders.append("Authorization", `Bearer ${token}`);

        const addToCartRaw = JSON.stringify({
            "productId": productId,
            "customerId": customerId,
            "quantity": 1 // You can adjust the quantity as needed
        });

        const addToCartRequestOptions = {
            method: 'POST',
            headers: addToCartHeaders,
            body: addToCartRaw,
            redirect: 'follow'
        };

        const addToCartResponse = await fetch("http://localhost:8000/api/addToCart", addToCartRequestOptions);
        const addToCartResult = await addToCartResponse.json();
        console.log(addToCartResult, "Product added to cart!");
        alert(addToCartResult.message)
        window.location.reload()
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}
</script>

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