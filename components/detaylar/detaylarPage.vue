<template>
  <div>
       <div class="page-bread mb70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>{{this.posts.title}} Sunucusunun Detayları</h3>
                    </div>
                    <div class="col-sm-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 mb40">
                        <div class="row mb30">
                            <div class="col-sm-4 mb40">
                                <img :src="`${this.posts.images}`" alt="" class="img-responsive img-thumbnail">
                            </div>
                            <div class="col-sm-8 mb40">
                                <h2 class="font300">{{this.posts.title}}</h2>
                                <p>
                                    {{this.posts.description}}
                                </p>
                                <p><strong>Email:</strong> {{this.posts.email}}</p>
                                 <a :href="`${this.posts.discord_url}`" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                                    Sunucuya git
                                  </a>

                            </div>
                        </div>
                        <h2 class="left-title">Benzer Sunucular</h2>
                        <div class="row">
                     <div class="row">
                    <div class="col-sm-6 col-md-3 mb30" v-for="i in this.benzersunucular" :key="i.ID">
                       <!-- Card -->

                    <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden transition duration-500 ease-in-out  hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110">
                    <!-- Card Cover -->
                    <div>
                        <img :src="`${i.images}`" class="h-full w-full" alt="Story Image" />
                    </div>
                    <!-- END Card Cover -->

                    <!-- Card Body -->
                    <div class="p-5 lg:p-6 flex-grow w-full ">
                        <p class="font-semibold mb-1 text-indigo-500">
                        {{i.card_tag}}
                        </p>
                        <h3 class="font-semibold text-xl mb-2 truncate max-w-md">
                        {{i.title}}
                        </h3>
                        <p class="truncate max-w-md">
                        {{i.description}}.
                        </p>
                        <nuxt-link :to="`${i._id}`"
                        class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-indigo-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
                        >
                        <i class="fa fa-search"></i>
                        <span>Keşfet</span>
                        </nuxt-link>

                    </div>
                    <!-- END Card Body -->
                    </div>
                    <!-- END Card -->
                    </div>
            </div>
                </div>
                         <h3 class="left-title mb25">İncelemeler</h3>
                         <!-- Warning Alert -->
                        <div class="p-4 md:p-5 rounded text-orange-700 bg-orange-100" v-if="this.yorumlar.length === 0">
                        <div class="flex items-center">
                            <svg class="hi-solid hi-exclamation inline-block w-5 h-5 mr-3 flex-none text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                            <h3 class="font-semibold flex-grow">
                            Herhangi bir yorum bulunamadı
                            </h3>
                        </div>
                        </div>
                        <!-- END Warning Alert -->
                    <div class="clearfix review-box mb35" v-for="i in this.yorumlar" :key="i._id">
                        <div class="overflow-hidden">
                            <span class=" pull-right">{{ $moment(i.createdAt).format('MMM Do YYYY hA')}}  </span>
                            <ul class="list-inline rating-list mb20">
                                <li><i class="fa fa-star text-warning"></i></li>
                                <li><i class="fa fa-star text-warning"></i></li>
                                <li><i class="fa fa-star text-warning"></i></li>
                                <li><i class="fa fa-star text-warning"></i></li>
                                <li><i class="fa fa-star-half-empty text-warning"></i></li>
                            </ul>
                            <h4>{{i.commentitle}}</h4>
                            <p>
                                {{i.commentdesc}}
                            </p>
                        </div>
                    </div>
                    <h3 class="left-title mb25">İnceleme Paylaş</h3>
                    <form id="review">
                        <div class="form-group">
                            <label for="title">Yorumunuzun başlığı</label>
                            <input v-model="inputTitle" type="text" id="title" class="form-control" placeholder="Güzel DC...!">
                        </div>
                        <div class="form-group">
                                 <label for="msgr">Mesajınız</label>
                                 <textarea v-model="inputDesc" class="form-control" rows="6" id="msgr" placeholder="Deneyimini tanımla"></textarea>
                             </div>
                    </form>
                        <button @click="yorumAt" type="button" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                            <span>Yolla</span>
                            <svg class="hi-solid hi-annotation inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
                            </button>
                </div>
                    </div><!--/col-->
                    <!-- Info Alert -->
                    <div class="p-4 md:p-5 rounded text-blue-700 bg-blue-100">
                    <div class="flex items-center mb-2">
                        <svg class="hi-solid hi-information-circle inline-block w-5 h-5 mr-3 flex-none text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                        <h3 class="font-semibold">Sunucular hakkında yorum yazma ve puan ekleme</h3>
                    </div>
                    <p class="ml-8">
                         Bu yorum ve görüşler gönüllülük esasına göre eklenir. Yorumunuz <a class="underline text-blue-600 hover:text-blue-400" href="#">yönetici</a> onayından sonra yayınlanacaktır.
                    </p>
                    <div class="ml-8 mt-3">
                        <nuxt-link to="/" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white">
                        <svg class="hi-solid hi-refresh w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                        Ana Sayfa
                        </nuxt-link>
                    </div>
                    </div>
                    <!-- END Info Alert -->
<br>
            </div>
        </div>

  </div>
</template>

<script>
import axios from "axios";
export default {

  data(){
    return{
      posts:"",
      benzersunucular:"",
      inputTitle:"",
      inputDesc:"",
      yorumlar:"",
    }
  },

  async mounted(){
		await axios.get("http://localhost:5000/detaybul",{headers: {data: (this.$route.params.sunucuId)}})
                 .then(res => {
                    this.posts = res.data.all[0]
                     })
        await axios.get("http://localhost:5000/benzersunucular",{headers: {data: (this.posts.card_tag)}})
                 .then(res => {
                     this.benzersunucular = res.data.all
                     })
        await axios.get("http://localhost:5000/yorumbul",{headers: {data: (this.$route.params.sunucuId)}})
                 .then(res => {
                    this.yorumlar = res.data.all
                     })
	},

    methods:{
        async yorumAt(){
            let yorums = {
          title: this.inputTitle,
          description:this.inputDesc,
          yorumid:this.$route.params.sunucuId
        }
             await axios.post("http://localhost:5000/yorumat",{yorums})
                 .then(res => {
                     this.$swal({
                icon: 'success',
                title: res.data.doc.commentitle + "- Yorumunuz yönetici onayından sonra yayınlanacaktır.",
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                })
                this.inputTitle = "";
                this.inputDesc="";
                     }).catch(err=>{
            this.$swal({
                icon: 'error',
                title: err.response.data.err.message,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
              })
          })
        },
    },


}
</script>

<style>

</style>