
<template>
  <div>
      <Navbar></Navbar>
         <div class="page-bread mb70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Hakkımızda</h3>
                    </div>
                    <div class="col-sm-6">

                    </div>
                </div>
            </div>
        </div>
        <div class="container mb40">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 text-center center-heading mb40">
                    <h2>Biz kimiz?</h2>
                    <p>Bu web sitesi için çalışıyoruz. İnsanların sorunlarına yardımcı olmak için buradayız. </p>
                </div>
            </div>
            <div class="row mb40">
                <div class="col-sm-4 mb30 text-center icon-box">
                    <i class="fa fa-envelope"></i>
                    <h4 class="font300">Email Desteği</h4>
                    <p>
                        Soru ve sorunlarınız için e-posta gönderebilirsiniz.
                    </p>
                </div><!--/col-->
                 <div class="col-sm-4 mb30 text-center icon-box">
                    <i class="fa fa-code-fork"></i>
                    <h4 class="font300">Hızlı ve kolay</h4>
                    <p>
                        Bir sonraki en iyi arkadaşını burada bul!
                    </p>
                </div><!--/col-->
                 <div class="col-sm-4 mb30 text-center icon-box">
                    <i class="fa fa-code"></i>
                    <h4 class="font300">Ücretsiz</h4>
                    <p>
                        Sitemiz'de ilanınızı ücretsiz olarak yayınlayın. Kolay ve ücretsizdir ve reklamınızı istediğiniz kadar yayınlayabilirsiniz.
                    </p>
                </div><!--/col-->
            </div>
            <hr class="mb70">


        </div>
      <Footer></Footer>






  </div>
</template>

<script setup>
import Navbar from "~/components/homePage/Navbar"
import Footer from "~/components/homePage/Footer"

export default {
  components:{
      Navbar,
      Footer
  }



};
</script>

<style lang="scss" scoped>

</style>
