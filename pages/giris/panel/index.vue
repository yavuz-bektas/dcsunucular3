<template>
  <div>
      <Navbar></Navbar>
      <AdminPaneli></AdminPaneli>
      <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import AdminPaneli from "~/components/adminPanel/adminPaneli"
import Footer from "~/components/homePage/Footer"

export default {

  components:{
      Navbar,
      AdminPaneli,
      Footer
  }



};
</script>

<style lang="scss" scoped>

</style>
