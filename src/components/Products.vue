<template>
    <div class="container min-w-max-content" style="width: 200%;">
        <SiteNavigation />
        <div class="bg-white mt-11 ">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only  text-black">Products</h2>
                <nav aria-label="Breadcrumb">
                    <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div class="flex items-center">
                                <a href="/" class="mr-2 text-sm font-medium text-gray-900">Home</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                                    class="h-5 w-4 tc:\Users\Vipin Nagar\Downloads\Light Grayish Orange Special Offer Banner Landscape\5.jpgext-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <a href="/Products" class="mr-2 text-sm font-medium text-gray-900">All Products</a>

                            </div>  
                        </li>
                        <li class="flex items-end">
                            <div>
                                <div class="relative mt-2 ml-11 rounded-md shadow-sm">

                                    <input type="text" name="price" id="price"
                                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Search Products...">

                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
                    <!-- Iterate over the products from the API -->
                    <div v-for="product in paginatedProducts" :key="product._id" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <!-- Use the product image URL from the API -->
                            <img src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?w=740&t=st=1702550042~exp=1702550642~hmac=251b58f424ed6fb690fbd4b3f325b7f560df80848a8f2f06850d7139279369b0"
                                alt="product.title"
                                class="h-full w-full object-cover object-center group-hover:opacity-50" />
                        </div>

                        <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900 w-17">$ {{ product.price }}</p>

                        <!-- Add to cart button with conditional behavior -->
                        <button v-if="token" @click="addToCart(product._id)"
                            class="bg-blue-500 text-white font-semibold mt-2 py-2 px-4 rounded">
                            Add to cart
                        </button>
                        <button v-if="token" @click="view(product._id)"
                            class="bg-red-500 text-white font-semibold py-2 ml-3 px-10 rounded">
                            View
                        </button>
                        <template v-else>
                            <router-link to="/login" class="bg-blue-500 text-white  mt-2  font-semibold py-2 px-4 rounded">
                                Log in to Add to cart
                            </router-link>
                            <button @click="view(product._id)"
                                class="bg-red-500 text-white font-semibold py-2 ml-3 px-10 rounded">
                                View
                            </button>
                        </template>
                    </div>
                    <div class="flex items-center justify-center mt-8" style="margin-top: 116%;">
                        <button @click="prevPage" :disabled="currentPage === 1"
                            class="px-4 py-2 text-gray-600 border rounded-l focus:outline-none">
                            Previous
                        </button>
                        <span class="px-4 py-2 text-gray-700">{{ currentPage }}</span>
                        <button @click="nextPage" :disabled="currentPage * productsPerPage >= products.length"
                            class="px-4 py-2 text-gray-600 border rounded-r focus:outline-none">
                            Next
                        </button>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Create a reactive variable to store products
const products = ref([]);
const currentPage = ref(1);
const productsPerPage = ref(10);
import { computed } from 'vue';
import SiteNavigation from './SiteNavigation.vue';

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage.value;
    const end = start + productsPerPage.value;
    return products.value.slice(start, end);
});
const nextPage = () => {
    if (currentPage.value * productsPerPage.value < products.value.length) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Check if the user is logged in (token exists in localStorage)
const token = localStorage.getItem('token')
console.log(token, "kkkk")
const router = useRouter();
const fetchDataWithToken = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/editUserbytoken/${token}`,
            { method: 'GET' }
        );
        const result = await response.json();
        console.log(result, "Single User Data!");
        const userID = result?.data?._id;
        console.log(userID, "UserID")
    } catch (error) {
        console.error('Error fetching data with token:', error);
    }
};
// Fetch data from the API when the component is mounted
onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8000/api/Allmenus');
        const data = await response.json();

        // Update the reactive variable with the fetched data
        products.value = data?.[0]?.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Function to handle adding to cart
const addToCart = async (productId) => {
    try {
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
const view = async (productId) => {
    router.push(`/edit-product/${productId}`);
}
</script>
  
<style lang="scss" scoped></style>
  