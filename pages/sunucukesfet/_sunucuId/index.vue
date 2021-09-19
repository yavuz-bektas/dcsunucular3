
<template>
  <div>
      <Navbar></Navbar>
      <Detaylar></Detaylar>
      <Footer></Footer>






  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Detaylar from "~/components/detaylar/detaylarPage"
import Footer from "~/components/homePage/Footer"

export default {
  components:{
      Navbar,
      Detaylar,
      Footer
  }



};
</script>

<style lang="scss" scoped>

</style>
