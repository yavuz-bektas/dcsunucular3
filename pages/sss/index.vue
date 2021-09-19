<template>
  <div>
      <Navbar></Navbar>
      <Hero1></Hero1>
      <Footer></Footer>




  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Hero1 from "~/components/sss/Hero1"
import Footer from "~/components/homePage/Footer"

export default {
  components:{
      Navbar,
      Hero1,
      Footer


  }



};
</script>

<style lang="scss" scoped>

</style>
