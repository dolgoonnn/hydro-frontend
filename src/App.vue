
<template>

  <Navbar/>
  <div class="bg-gray-100">
    <router-view/>

  </div>
  <Footer/>
</template>

<script >
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'

export default {
    components: {
        Navbar,

        Footer
    },
}
</script>
<style>

</style>
