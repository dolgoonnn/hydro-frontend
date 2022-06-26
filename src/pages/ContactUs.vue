<template>
    <div class="">
        <div class="container">
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
                            >Холбоо барих</a
                        >
                    </li>
                </ol>
            </nav>
            <section class="py-6 bg-gray-100 text-gray-900">
                <div
                    class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"
                >
                    <div class="py-6 md:py-0 md:px-6">
                        <h1 class="text-4xl font-bold">Холбоо барих</h1>
                        <p class="pt-2 pb-4">Хувийн мэдээллээ оруулна уу?</p>
                        <div class="space-y-4">
                            <p class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="w-5 h-5 mr-2 sm:mr-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>Fake address, 9999 City</span>
                            </p>
                            <p class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="w-5 h-5 mr-2 sm:mr-6"
                                >
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    ></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="w-5 h-5 mr-2 sm:mr-6"
                                >
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    ></path>
                                    <path
                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    ></path>
                                </svg>
                                <span>contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form
                        novalidate=""
                        class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
                    >
                        <label class="block">
                            <span class="mb-1">Full name</span>
                            <input
                                type="text"
                                placeholder=""
                                class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-sky-600 bg-gray-100"
                            />
                        </label>
                        <label class="block">
                            <span class="mb-1">Email address</span>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-sky-600 bg-gray-100"
                            />
                        </label>
                        <label class="block">
                            <span class="mb-1">Message</span>
                            <textarea
                                rows="3"
                                class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 bg-gray-100"
                            ></textarea>
                        </label>
                        <button
                            type="button"
                            class="self-center px-8 py-3 text-lg font-medium text-white bg-ccblue hover:bg-chblue transition delay-75 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {};
</script>
