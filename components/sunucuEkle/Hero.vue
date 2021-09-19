<template>
<div>
    <div v-motion-slide-bottom>
     <div class="page-bread mb70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Sunucu Ekle</h3>
                    </div>
                    <div class="col-sm-6">

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Info Alert -->
            <div class="p-4 md:p-5 rounded text-blue-700 bg-blue-100">
            <div class="flex items-center mb-2">
                <svg class="hi-solid hi-information-circle inline-block w-5 h-5 mr-3 flex-none text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                <h3 class="font-semibold">Önemli Hatırlatma</h3>
            </div>
            <p class="ml-8">
                 İlan ekledikten sonra doğrulama işlemi  <a class="underline text-blue-600 hover:text-blue-400">yönetici</a> tarafından yapılacaktır. Daha sonra yayına alınacaktır.
            </p>
            <div class="ml-8 mt-3">
                <nuxt-link to="/" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white">
                <svg class="hi-solid hi-refresh w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                Ana Sayfa
                </nuxt-link>


            </div>
            </div>
            <!-- END Info Alert -->
        </div>
        <br>
         <div class="container">

            <div class="row">
                <div class="col-md-9 mb30">
                    <div class="mb40">
                        <h2 class="left-title">Açıklama</h2>
                        <div class="form-group">
                            <input v-model="title" class="form-control" type="text" placeholder="Başlık">
                        </div>
                        <div class="form-group">
                            <textarea v-model="description" class="form-control" placeholder="Sunucu Detayları" rows="8"></textarea><div class="textarea-resize"></div>
                        </div>
                    </div>
                    <div class="mb40">
                        <h2 class="left-title">Diğer Bilgiler</h2>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group-icon mb15">
                                    <i class="fa fa-home"></i>
                                    <input v-model="discord_url" type="text" class="form-control" placeholder="Sunucu URL">
                                </div>
                                <div class="form-group-icon mb15">
                                    <i class="fa fa-location-arrow"></i>
                                    <input v-model="images" type="text" class="form-control" placeholder="Sunucu Resim URL">
                                </div>
                                <div class="form-group-icon mb15">
                                    <i class="fa fa-envelope-o"></i>
                                    <input v-model="email" type="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="form-group-icon mb15">
                                    <i class="fa fa-columns"></i>
                                    <input v-model="website" type="text" class="form-control" placeholder="Websitesi(opsiyonel)">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="mb40">
                        <h2 class="left-title">Sunucu Kategorisi</h2>
                         <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <select name="property" class="form-control" v-model="card_tag">
                                          <option disabled value="">Kategori Seç</option>
                                        <option>oyun</option>
                                        <option>topluluk</option>
                                        <option>bot</option>
                                        <option>destek</option>
                                        <option>diger</option>
                                        <option>egitim</option>
                                        <option>espor</option>
                                        <option>hobi</option>
                                        <option>music</option>
                                        <option>roleplay</option>
                                        <option>tasarim</option>
                                        <option>teknoloji</option>
                                        <option>yayinci</option>
                                        <option>yazilim</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-right mb40">
                        <a href="#" @click="sunucuyaPostla" class="btn btn-lg btn-primary">Gönder</a>
                    </div>
                </div><!--/col-->
                <div class="col-md-3">

                    <h4 class="left-title mb20">Son Eklenenler</h4>
                    <ul  class="list-unstyled recent-item-card mb40">
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img src="images/img1.jpg" alt="" class="img-responsive" width="90">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4><a href="#">Doloremque laudantium, totam rem aperiam</a></h4>
                                <em>New York / Coffee</em>
                                <span class="text-primary">$140/Person</span>
                            </div>
                        </li><!--/li-->
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img src="images/img2.jpg" alt="" class="img-responsive" width="90">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4><a href="#">Doloremque laudantium, totam rem aperiam</a></h4>
                                <em>New York / Coffee</em>
                                <span class="text-primary">$140/Person</span>
                            </div>
                        </li><!--/li-->
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img src="images/img3.jpg" alt="" class="img-responsive" width="90">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4><a href="#">Doloremque laudantium, totam rem aperiam</a></h4>
                                <em>New York / Coffee</em>
                                <span class="text-primary">$140/Person</span>
                            </div>
                        </li><!--/li-->
                    </ul><!--/ul-->
                    <h4 class="left-title mb20">Popular Tags</h4>
                    <ul class="list-inline tags-list">
                        <li><a href="#"><i class="fa fa-tag"></i> Shop</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Beer</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Beach</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Cinemas</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Hotel</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Dinner</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Lunch</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Taxi</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Bar & pubs</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Games</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Tickets</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {

    data(){
        return{

            title:"",
            description:"",
            email:"",
            images:"",
            website:"",
            card_tag:"",
            discord_url:"",

        }
    },

    methods:{
        sunucuyaPostla(){
             let allInfom = {
          title: this.title,
          description:this.description,
          email:this.email,
          images:this.images,
          card_tag:this.card_tag,
          website:this.website,
          discord_url:this.discord_url,
        }
        axios.post('http://localhost:5000/all', {allInfom})
          .then(res => {
            this.$swal({
                icon: 'success',
                title: res.data.doc.title + "- Kayıt Edildi",
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
            })
              this.title = "";
              this.description="";
              this.images = "";
              this.card_tag ="";
              this.discord_url="";
              this.kisi_sayisi="";
          }).catch(err=>{
              console.log(err);
            this.$swal({
                icon: 'error',
                title: err.response.data.err.message,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
              })


          })

        }
    }

}
</script>

<style scoped>

.info {
  background-color: #8BD6EC;
  border-color: #aaa;
  margin: 0 auto 15px;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  border-radius: 10px;
}




</style>>

</style>