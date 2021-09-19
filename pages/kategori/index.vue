<template>
  <div>
      <Navbar></Navbar>
      <br><br>
      <Kategoris></Kategoris>
      <Footer></Footer>






  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Footer from "~/components/homePage/Footer"
import Kategoris from "~/components/homePageKategori/Kategoris"
export default {

  components:{
      Navbar,
      Footer,
      Kategoris
  }



};
</script>

<style lang="scss" scoped>

</style>
