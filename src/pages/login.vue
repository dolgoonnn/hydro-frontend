<template>
    <div class="container bg-gray-100 py-8 flex items-center justify-center">
        <div
            class="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-800"
        >
            <div class="mb-8 text-center">
                <h1 class="my-3 text-4xl font-bold">Sign in</h1>
                <p class="text-sm text-gray-400">
                    Sign in to access your account
                </p>
            </div>
            <form class="space-y-12 ng-untouched ng-pristine ng-valid">
                <div class="space-y-4">
                    <div>
                        <label for="email" class="block mb-2 text-sm"
                            >Email address</label
                        >
                        <input
                            type="email"
                            v-model="email"
                            name="email"
                            id="email"
                            placeholder="exapmle@email.com"
                            class="w-full px-3 py-2 border rounded-md border-gray-700"
                        />
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm"
                                >Password</label
                            >
                        </div>
                        <input
                            type="password"
                            v-model="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            class="w-full px-3 py-2 border rounded-md border-gray-700"
                        />
                    </div>
                </div>
                <div class="space-y-2">
                    <div>
                        <button
                            type="button"
                            @click="login"
                            class="w-full px-8 py-3 font-semibold rounded-md bg-ccblue text-white"
                        >
                            Sign in
                        </button>
                    </div>
                    <p class="px-6 text-sm text-center dark:text-gray-400">
                        Don't have an account yet?
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="hover:underline text-cindigo"
                            >Sign up</a
                        >.
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully logged in");
            console.log(auth.currentUser);
            router.push("./admin");
        })
        .catch((error) => {
            console.log(error);
        });
};
</script>
