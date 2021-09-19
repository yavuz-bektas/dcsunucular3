<template>
  <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>

  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Hero from "~/components/sunucuEkle/Hero"
import Footer from "~/components/homePage/Footer"
export default {
  components:{
      Navbar,
      Hero,
      Footer

  }



};
</script>

<style>

</style>