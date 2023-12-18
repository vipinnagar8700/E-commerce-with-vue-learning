<template>
    <div style="width:195%;margin-top:20%" class="bg-white mt-11">
        <SiteNavigation />
        <div class=" grid grid-cols-2 gap-5">
            <div class="space-y-12">

                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <div class="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First
                                name</label>
                            <div class="mt-2">
                                <input v-model="firstName" type="text" name="first-name" id="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required>
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last
                                name</label>
                            <div class="mt-2">
                                <input v-model="lastName" type="text" name="last-name" id="last-name"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required>
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                                address</label>
                            <div class="mt-0">
                                <input v-model="email" type="email" name="email" id="email" autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required>
                            </div>
                        </div>



                        <div class="col-span-full">
                            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street
                                address</label>
                            <div class="mt-0">
                                <input v-model="streetAddress" type="text" name="streetAddress" required id="streetAddress"
                                    autocomplete="street-address"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-2 sm:col-start-1">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                            <div class="mt-0">
                                <input v-model="city" type="city" name="city" id="city" required
                                    autocomplete="address-level2"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State /
                                Province</label>
                            <div class="mt-0">
                                <input v-model="region" required type="text" name="region" id="region"
                                    autocomplete="address-level1"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP /
                                Postal
                                code</label>
                            <div class="mt-0">
                                <input type="text" v-model="postalCode" name="postalCode" required id="postalCode"
                                    autocomplete="postal-code"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-b border-gray-900/10 ">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Payment</h2>

                    <div class=" space-y-10">
                        <fieldset>
                            <div class=" space-y-6 flex" style="align-items: end;gap:12px">
                                <div class="relative flex gap-x-3">
                                    <div class=" h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="comments" class="font-medium text-gray-900">COD</label>
                                    </div>
                                </div>

                                <div class="relative flex gap-x-3">
                                    <div class=" h-6 items-center">
                                        <input id="candidates" name="candidates" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="candidates" class="font-medium text-gray-900">Credit
                                            Card</label>
                                    </div>
                                </div>
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="offers" name="offers" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="offers" class="font-medium text-gray-900">UPI ID</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                </div>
            </div>
            <div class="grid-cols-4">
                <div class="space-y-1">
                    <div class="border-b border-gray-900/10">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Order Summary</h2>
                        <div class="mt-1">
                            <div class="flow-root" style="height: 400px;overflow: scroll;overflow-x: hidden;">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                    <li v-for="(item, index) in cart" :key="index" class="flex p-6">
                                        <div
                                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?w=740&t=st=1702550042~exp=1702550642~hmac=251b58f424ed6fb690fbd4b3f325b7f560df80848a8f2f06850d7139279369b0"
                                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                class="h-full w-full object-cover object-center">
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
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
                    <div class="border-b border-gray-900/10 ">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Subtotal</h2>
                            </div>
                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">$ {{ totalAmount }}.00</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-5">
                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Shipping</h2>
                            </div>
                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">$ 0</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-5">
                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Total</h2>

                            </div>

                            <div class="grid-cols-6">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">$ {{ totalAmount }}.00</h2>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
                    <button @click="placeOrder"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Place
                        Order</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import SiteNavigation from '../components/SiteNavigation.vue'

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
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const token = localStorage.getItem('token');
const route = useRoute();
const cart = ref([]);
let cartLength = ref(null);
console.log(token, "Token")


const fetchDataWithUserId = async () => {
    try {
        if (route.params) {
            const userId = route.params.id;
            console.log(userId, "This is Product Id!")
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
        }
    } catch (error) {
        console.error('Error fetching data with userId:', error);
    }
};

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const streetAddress = ref('');
const city = ref('');
const region = ref('');
const postalCode = ref('');


const placeOrder = async () => {
    if (
        !firstName.value ||
        !lastName.value ||
        !email.value ||
        !streetAddress.value ||
        !city.value ||
        !region.value ||
        !postalCode.value
    ) {
        // Display an error message or handle the validation error as needed
        alert("Please fill in all required fields.");
        return;
    }
    if (route.params) {
        const userId = route.params.id;
        console.log(userId, "This is Product Id!")
        // Modify the API endpoint to use the userId
        const orderDetails = {
            user_id: userId, // Replace with the actual user ID
            f_name: firstName.value,
            l_name: lastName.value,
            email: email.value,
            address: streetAddress.value,
            city: city.value,
            state: region.value,
            postal_code: postalCode.value,
            paymentMode: "cod", // You can update this based on the selected payment method
        };
        try {
        const response = await fetch("http://localhost:8000/api/OrderMake", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        });

        const result = await response.json();
        console.log(result.message);
        alert(result.message)
        window.location.reload()
        // Optionally, you can handle the result or perform additional actions here
        // For example, redirect to a thank you page or display a success message
    } catch (error) {
        console.error('Error placing order:', error);
        // Optionally, handle errors here
    }
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
        await fetchDataWithUserId(userID);
        console.log(userID, "UserID")
        Checkout(userID)
    } catch (error) {
        console.error('Error fetching data with token:', error);
    }
};

const Checkout = (userID) => {
    router.push(`/Checkout/${userID}`);
}
// Fetch data when the component is mounted
onMounted(() => {
    if (token) {
        fetchDataWithToken();
    }
});
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

<style lang="scss" scoped></style>