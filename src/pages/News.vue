<template>
    <div class="sm:container mx-auto">
        <nav
            aria-label="breadcrumb"
            class="w-full p-4 bg-gray-100 text-gray-800"
        >
            <ol class="flex h-8 space-x-2">
                <li class="flex items-center">
                    <router-link to="/">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Back to homepage"
                            class="hover:underline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 pr-1 text-gray-600"
                            >
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                ></path>
                            </svg>
                        </a>
                    </router-link>
                </li>
                <li class="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        fill="currentColor"
                        class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
                    >
                        <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        class="flex items-center px-1 capitalize hover:underline"
                        >Мэдээ</a
                    >
                </li>
            </ol>
        </nav>
        <h2 class="pb-8 pl-4 text-2xl font-semibold">Мэдээ</h2>
        <div class="grid md:grid-cols-3 gap-4">
            <div class="md:col-span-2">
                <section class="bg-gray-100 text-gray-800">
                    <div
                        class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
                    >
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="block max-w-sm gap-3 group mx-auto sm:max-w-full lg:grid lg:grid-cols-12 bg-gray-50"
                        >
                            <img
                                src="https://source.unsplash.com/random/480x360"
                                alt=""
                                class="object-center my-auto w-full h-48 rounded sm:h-64 lg:col-span-6 transform transition duration-1000 hover:scale-110"
                            />
                            <div class="p-6 space-y-2 lg:col-span-5">
                                <h3
                                    class="text-xl font-semibold sm:text-2xl group-hover:text-ccblue"
                                >
                                    Noster tincidunt reprimique ad pro
                                </h3>
                                <p
                                    class="text-xs text-gray-600 flex items-center"
                                >
                                    <img
                                        class="w-5 h-5"
                                        src="https://img.icons8.com/material-rounded/24/000000/calendar--v1.png"
                                    />
                                    <span class="text-xs text-gray-600 ml-2"
                                        >January 21, 2021</span
                                    >
                                </p>
                                <p>
                                    Ei delenit sensibus liberavisse pri. Quod
                                    suscipit no nam. Est in graece fuisset, eos
                                    affert putent doctus id. affert putent
                                    doctus id. affert putent doctus id.
                                </p>
                            </div>
                        </a>
                        <div
                            class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2"
                        >
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?1"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 21, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?2"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 22, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?3"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 23, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?4"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 24, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?5"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 25, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
                            >
                                <img
                                    role="presentation"
                                    class="object-cover w-full rounded h-44 bg-gray-500"
                                    src="https://source.unsplash.com/random/480x360?6"
                                />
                                <div class="p-6 space-y-2">
                                    <h3
                                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                                    >
                                        In usu laoreet repudiare legendos
                                    </h3>
                                    <span class="text-xs text-gray-600"
                                        >January 26, 2021</span
                                    >
                                    <p>
                                        Mei ex aliquid eleifend forensibus, quo
                                        ad dicta apeirian neglegentur, ex has
                                        tantas percipit perfecto. At per tempor
                                        albucius perfecto, ei probatus consulatu
                                        patrioque mea, ei vocent delicata
                                        indoctum pri.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div class="flex justify-center">
                            <button
                                type="button"
                                class="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
                            >
                                Load more posts...
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <div
                class="lg:col-span-1 hidden md:block md:col-start-3 p-8 w-full rounded-lg"
            >
                <homeSidebarVue />
            </div>
        </div>
    </div>
</template>
<script>
import homeSidebarVue from "../components/homeSidebar.vue";
export default {
    components: {
        homeSidebarVue,
    },
};
</script>
