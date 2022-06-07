<template>
    <div class="container ">
        <nav aria-label="breadcrumb" class="w-full p-4 bg-gray-100 text-gray-800">
                <ol class="flex h-8 space-x-2">
                    <li class="flex items-center">
                        <router-link to="/">
                            <a rel="noopener noreferrer" href="#" title="Back to homepage" class="hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 pr-1 text-gray-600">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                            </a>
                        </router-link>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Хууль</a>
                    </li>

                </ol>
            </nav>
        <div class="p-4 h-8 space-y-2 text-2xl ">
            <h1>Хууль</h1>
        </div>
        <div class="flex flex-row xs:py-5 md:py-10 space-y-2">
                <div class="flex xs:w-5 md:w-10 justify-center self-center ">
                    <svg class="h-5 w-5" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>date-line</title>
                        <path class="clr-i-outline clr-i-outline-path-1" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"></path><rect class="clr-i-outline clr-i-outline-path-2" x="8" y="14" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-3" x="14" y="14" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-4" x="20" y="14" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-5" x="26" y="14" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-6" x="8" y="19" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-7" x="14" y="19" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-8" x="20" y="19" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-9" x="26" y="19" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-10" x="8" y="24" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-11" x="14" y="24" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-12" x="20" y="24" width="2" height="2"></rect><rect class="clr-i-outline clr-i-outline-path-13" x="26" y="24" width="2" height="2"></rect><path class="clr-i-outline clr-i-outline-path-14" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"></path><path class="clr-i-outline clr-i-outline-path-15" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"></path><rect class="clr-i-outline clr-i-outline-path-16" x="13" y="6" width="10" height="2"></rect>
                        <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                    </svg>
                </div>
                <p class="text-gray-500 xs:text-sm md:text-xs">
                    <!--  {{date}} -->
                    2022.06.06
                </p>
        </div>
        <div class="grid">
            <div class="lg:col-span-9 md:col-span-7 sm:col-span-12">
                <div class="overflow-x-auto">
                    <table class="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200">
                        <thead>
                        <tr class="divide-x divide-gray-100">
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Name</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Date of Birth</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Role</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Salary</th>
                        </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                        <tr class="divide-x divide-gray-100">
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">John Doe</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Web Developer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$120,000</td>
                        </tr>

                        <tr class="divide-x divide-gray-100">
                            <td class="px-4 py-2 font-medium whitespace-nowrap">Jane Doe</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">04/11/1980</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Web Designer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$100,000</td>
                        </tr>

                        <tr class="divide-x divide-gray-100">
                            <td class="px-4 py-2 font-medium whitespace-nowrap">Gary Barlow</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>