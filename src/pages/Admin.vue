<template>
    <!-- <option class="bg-white text-sm" v-for="activity in activities" :value="activity" :key="activity">{{ activity }}</option> -->
    <div class="sm:container sm:mx-auto xs:p-3 sm:p-0">
        <div class="flex justify-self-end">
            <div class="flex-none">
                <p class="text-sm font-light">Create</p>
            </div>
            <div class="flex-1 text-right">
                <button
                    @click="this.goBack"
                    class="text-xs text-right py-2 px-2 rounded-md font-light border mr-3"
                >
                    Cancel
                </button>
                <button @click="printEditorData()" ref="submitButton">
                    Post
                </button>
                <!-- <button class="text-xs text-right text-white py-2 px-2 rounded-md font-light bg-[#bc9978]" @click="printEditorData()">Post Media</button> -->
            </div>
        </div>
        <div
            class="flex mt-10 mb-10 h-20 xs:col-span-2 sm:col-span-1 space-x-5"
        >
            <textarea
                type="text"
                maxlength="130"
                v-model="title"
                class="border border-none focus:outline-none focus:ring-2 focus:ring-white my-auto text-3xl w-full rounded"
                placeholder="TITLE HERE"
            />
        </div>
        <p class="col-span-2 text-xs text-left text-red-600 font-normal">
            {{ this.validations.title }}
        </p>
        <div class="mt-10 mb-10 h-20 xs:col-span-2 sm:col-span-1 space-x-5">
            <textarea
                type="text"
                maxlength="130"
                v-model="description"
                class="border border-none focus:outline-none focus:ring-2 focus:ring-white my-auto text-xl w-full text-gray-600 rounded"
                placeholder="Description here"
            />
            <p class="col-span-2 text-xs text-left text-red-600 font-normal">
                {{ this.validations.description }}
            </p>
        </div>
        <div class="col-span-2 row-span-2">
            <h1 class="mb-4 text-sm font-light">Мэдээний төрөлөө сонгоно уу</h1>
            <p class="col-span-2 text-xs text-left text-red-600 font-normal">
                {{ this.validations.type }}
            </p>
            <select
                class="inline-flex justify-start max-w-5xl rounded-md border border-gray-300 shadow-sm px-4 py-2 mb-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 w-96"
                v-model="selectedType"
                @change="selectActivity($event)"
            >
                <option class="bg-white text-sm" value="news">Мэдээ</option>
                <option class="bg-white text-sm" value="event">
                    Үйл ажиллагаа
                </option>
            </select>
        </div>
        <div class="flex h-12 xs:col-span-2 sm:col-span-1 space-x-5">
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 23C18.5228 23 23 18.5228 23 13C23 7.47715 18.5228 3 13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23Z"
                    stroke="#333333"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M13 7.00391V13.0039L17 15.0039"
                    stroke="#333333"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <p class="text-xs pt-1 text-gray-500">Published {{ this.date }}</p>
        </div>
        <div class="flex bg-[#e8f1f1] rounded-xl h-96 mb-5 p-3">
            <div
                class="p-4 w-full h-full m-auto rounded-xl border border-dashed border-gray-400"
            >
                <!-- <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg> -->
                <div
                    class="h-full flex flex-col w-full rounded-xl mx-auto justify-center items-center text-center bg-no-repeat bg-cover bg-center"
                    :style="'background-image: url(' + previewImage + ')'"
                >
                    <label>
                        <input
                            class="text-sm cursor-pointer w-36 hidden"
                            type="file"
                            @change="$event;"
                            accept="image/*"
                        />
                        <!-- <input type="file" @change="previewFile($event)" accept="image/*" class="h-full w-full"> -->
                        <div
                            class="text-xs bg-white rounded-lg font-light cursor-pointer p-2 px-3"
                        >
                            file сонгох
                        </div>
                    </label>
                    <div class="text-xs text-gray-500 mt-5">PNG,JPG</div>
                </div>
            </div>
        </div>
        <p class="col-span-2 text-xs text-left mb-5 text-red-600 font-normal">
            {{ this.validations.previewImage }}
        </p>
        <Editor />
        <p class="col-span-2 text-xs text-left mt-3 text-red-600 font-normal">
            {{ this.validations.content }}
        </p>
        <div class="flex h-12 xs:col-span-2 sm:col-span-1 space-x-5 mt-10">
            <div class="flex-1 text-right">
                <button
                    @click="this.goBack"
                    class="text-xs text-right py-2 px-2 rounded-md font-light border mr-3"
                >
                    болих
                </button>
                <button @click="printEditorData()" ref="submitButton">
                    Create
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// Components
import Editor from "../components/Editor.vue";
import moment from "moment";

export default {
    name: "Create_media",
    components: {
        Editor,
    },
    props: {
        method: { type: Function },
    },
    data() {
        return {
            title: null,
            description: null,
            previewImage: null,
            imageFile: null,
            imageDownloadUrl: null,
            otherActivity: false,
            date: moment(new Date()).format("MMMM Do YYYY, h:mm a"),
            validations: {
                title: null,
                description: null,
                type: null,
                previewImage: null,
                content: null,
            },
        };
    },
    methods: {
        selectActivity(event) {
            if (event.target.value != null) {
                if (event.target.value == "5") {
                    this.otherActivity = true;
                    this.type = null;
                } else {
                    this.otherActivity = false;
                    this.type = event.target.value;
                }
                this.errors = this.errors.filter(
                    (e) => e !== "Activity required !"
                );
            }
        },
        previewFile(event) {
            var postImage = event.target.files[0];
            this.imageFile = postImage;

            const reader = new FileReader();

            reader.readAsDataURL(postImage);

            reader.onload = (e) => {
                this.previewImage = e.target.result;
            };
        },
        goBack() {
            this.method();
        },
    },
};
</script>

<style></style>
