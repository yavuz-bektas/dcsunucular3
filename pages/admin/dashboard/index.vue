<template>
 <div>
<div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64">
  <Navandheader></Navandheader>
  <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <Statistic></Statistic>
    </div>
  </main>
  <Footer></Footer>
</div>
 </div>
</template>

<script>
import Navandheader from "~/components/adminDashboard/Navandheader"
import Footer from "~/components/adminDashboard/Footer"
import Statistic from "~/components/adminDashboard/Statistic"

export default {

  components:{
    Navandheader,
    Footer,
    Statistic
  },


}
</script>

<style scoped >

</style>