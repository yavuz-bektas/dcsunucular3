<template>
 <div>
<div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64">
  <Navandheader></Navandheader>
  <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <Header></Header>
        <SunucularDataTable></SunucularDataTable>
    </div>
  </main>
  <Footer></Footer>
</div>
 </div>
</template>

<script>
import Navandheader from "~/components/adminDashboard/Navandheader"
import Footer from "~/components/adminDashboard/Footer"
import SunucularDataTable from "~/components/adminDashboard/sunucular/SunucularDataTable"
import Header from "~/components/adminDashboard/sunucular/Header"
export default {

  components:{
    Navandheader,
    Footer,
    SunucularDataTable,
    Header

  }

}
</script>

<style scoped >

</style>