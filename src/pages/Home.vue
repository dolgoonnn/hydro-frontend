
<template>

    <Welcome/>
    <div class="sm:container mx-auto">
        <div class="grid grid-cols-3 gap-4  ">
            <Post/>
            <homeSidebarVue/>
        </div>

    </div>
    <homeStatsVue/>
</template>

<script >
import Welcome from '../components/Welcome.vue'
import Post from '../components/Post.vue'
import homeSidebarVue from '../components/homeSidebar.vue'
import homeStatsVue from '../components/homeStats.vue'

export default {
    components: {
        Welcome,
        Post,
        homeSidebarVue,
        homeStatsVue
    },
}
</script>
<style>

</style>
