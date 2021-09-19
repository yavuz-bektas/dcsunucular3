<template>
  <div>

      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <EnYeniEklenenler></EnYeniEklenenler>
      <Kategori></Kategori>
      <Seceneks></Seceneks>
      <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import SearchBar from "~/components/homePage/SearchBar"
import EnYeniEklenenler from "~/components/homePage/EnYeniEklenenler"
import Kategori from "~/components/homePage/Kategori"
import Seceneks from "~/components/homePage/Seceneks"
import Footer from "~/components/homePage/Footer"

export default {

  components:{
      Navbar,
      SearchBar,
      EnYeniEklenenler,
      Kategori,
      Seceneks,
      Footer
  }



};
</script>

<style lang="scss" scoped>

</style>
