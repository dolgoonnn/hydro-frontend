<template>
  <Welcome />
  <div class="sm:container mx-auto">
    <div class="grid md:grid-cols-3 gap-4">
      <div class="md:col-span-2">
        <Post />
      </div>
      <div
        class="lg:col-span-1 hidden md:block md:col-start-3 p-8 w-full rounded-lg"
      >
        <homeSidebarVue />
      </div>
    </div>
  </div>
  <homeStatsVue />
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Post from "../components/Post.vue";
import homeSidebarVue from "../components/homeSidebar.vue";
import homeStatsVue from "../components/homeStats.vue";

export default {
  components: {
    Welcome,
    Post,
    homeSidebarVue,
    homeStatsVue,
  },
};
</script>
<style></style>
