
<template>
  <div>
      <Navbar></Navbar>
        <div class="page-bread mb70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Gizlilik Politikası</h3>
                    </div>
                    <div class="col-sm-6">

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
          <div v-motion-slide-bottom>
            <div class="row mb30">
                <div class="col-sm-6 mb40">
                    <h2 class="left-title">DC Sunucuları Gizlilik Politikası</h2>
                    <p>
                      Gizliliğiniz bizim için önemlidir. Web sitemizden, DC Sunucuları adresinden ve sahip olduğumuz ve işlettiğimiz diğer sitelerden sizden toplayabileceğimiz herhangi bir bilgiyle ilgili gizliliğinize saygı duymak DC Sunucuları politikasıdır.
                    </p>
                    <p>
                      Kişisel bilgilerinizi yalnızca size bir hizmet sunmak için gerçekten ihtiyaç duyduğumuzda isteriz. Sizin bilginiz ve izninizle adil ve yasal yollardan topluyoruz. Ayrıca, neden topladığımızı ve nasıl kullanılacağını da size bildiririz.
                    </p>
                    <p>
                      Topladığımız bilgileri yalnızca size istenen hizmeti sağlamak için gerekli olduğu sürece saklarız. Hangi verileri sakladığımız, ticari olarak kabul edilebilir bir şekilde koruyacağımız, yetkisiz erişim, ifşa etme, kopyalama, kullanma veya değiştirmenin yanı sıra kayıp ve hırsızlığı önlemek anlamına gelir.
                    </p>
                    <p>
                      Kişisel olarak tanımlayıcı bilgileri, yasalarca gerekli olmadıkça, halka açık veya üçüncü taraflarla paylaşmayız.
                    </p>
                    <p>
                      Web sitemiz bizim tarafımızdan işletilmeyen harici sitelere link verebilir. Lütfen bu sitelerin içeriği ve uygulamaları üzerinde kontrol sahibi olmadığımızı ve kendi gizlilik politikaları için sorumluluk veya yükümlülük kabul edemeyeceğimizi unutmayın.
                    </p>
                    <p>
                      İstediğiniz hizmetlerin bir kısmını size sağlayamayacağımızı bilerek kişisel bilgileriniz için isteğimizi reddetmekte özgürsünüz.
                    </p>
                    <p>
                      Web sitemizi kullanmaya devam etmeniz, gizlilik ve kişisel bilgilerle ilgili uygulamalarımızı kabul etmiş sayılır. Kullanıcı verilerini ve kişisel bilgileri nasıl kullandığımızla ilgili herhangi bir sorunuz varsa, bizimle iletişime geçmekten çekinmeyin.
                    </p>
                    <h4>
                      Bu politika 2.06.2021 tarihinden itibaren geçerlidir.
                    </h4>
                </div>
            </div>
          </div>
        </div>
        <!--footer-->
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
