<template>
  <div>
      <Navbar></Navbar>
      <Hero1></Hero1>
      <Hero2></Hero2>






  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Hero1 from "~/components/top30/Hero1"
import Hero2 from "~/components/top30/Hero2"
export default {

  components:{
      Navbar,
      Hero1,
      Hero2

  }



};
</script>

<style lang="scss" scoped>

</style>
