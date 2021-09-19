<template>
  <div>
    <div v-motion-slide-bottom>
        <div class="">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 text-center center-heading mb40 m-5">
                        <h2> {{this.posts[0].card_tag}} Kategorisindeki Sonuçlar Listeleniyor </h2>
                        <p>
                              <strong>Bu kriterlere uygun {{this.posts.length}} ilan bulunuyor</strong>
                        </p>
                        <!-- Tabs with Icons -->
                      <nav class="grid gap-4 grid-cols-4 items-center border-b border-gray-200">
                        <a class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-gamepad"></i>
                          <span  @click="getPosts()" class="sm:inline-block cursor-pointer">Oyun</span>
                        </a>
                        <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-users"></i>
                          <span @click="getTopluluks('topluluk')"  class=" sm:inline-block cursor-pointer">Topluluk</span>
                        </a>
                        <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-music"></i>
                          <span @click="getTopluluks('music')"  class=" sm:inline-block cursor-pointer">Müzik</span>
                        </a>
                        <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-desktop"></i>
                          <span @click="getTopluluks('teknoloji')"  class=" sm:inline-block cursor-pointer">Teknoloji</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-microchip"></i>
                          <span @click="getTopluluks('hobi')"  class=" sm:inline-block cursor-pointer">Hobi</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-video-camera"></i>
                          <span @click="getTopluluks('yayinci')"  class=" sm:inline-block cursor-pointer">Yayıncı</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-android"></i>
                          <span @click="getTopluluks('bot')"  class=" sm:inline-block cursor-pointer">Bot</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-code"></i>
                          <span @click="getTopluluks('yazilim')"  class=" sm:inline-block cursor-pointer">Yazılım</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-question-circle"></i>
                          <span @click="getTopluluks('destek')"  class=" sm:inline-block cursor-pointer">Destek</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-user-o"></i>
                          <span @click="getTopluluks('egitim')"  class=" sm:inline-block cursor-pointer">Eğitim</span>
                        </a>
                         <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-universal-access"></i>
                          <span @click="getTopluluks('roleplay')"  class=" sm:inline-block cursor-pointer">Rol</span>
                        </a>
                        <a  class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 border-b-2 text-indigo-500">
                          <i class="fa fa-paint-brush"></i>
                          <span @click="getTopluluks('tasarim')"  class=" sm:inline-block cursor-pointer">Tasarım</span>
                        </a>
                      </nav>


                      <!-- END Tabs with Icons -->
                    </div>

                </div><!--/row-->
                  <div class="row">
                    <div class="col-sm-6 col-md-3 mb30" v-for="i in displayedPosts" :key="i.ID">
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
                         <nuxt-link :to="`sunucukesfet/${i._id}`"
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
                <div class="text-center mb30">

            <nav aria-label="Page navigation example">
			<ul class="pagination">
				<li class="page-item">
					 <button v-if="page != 1" @click="page--" type="button" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    <span>Önceki </span>
                    <svg class="hi-solid hi-arrow-left inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/></svg>
                    </button>
				</li>
				<li class="page-item">
                    <button @click="page++" v-if="page < pages.length" type="button" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    Sonraki
                    <svg class="hi-solid hi-arrow-right inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                    </button>
				</li>
			</ul>
		</nav>
                </div>
            </div>
        </div>

</div>
  </div>
</template>

<script>
import axios from "axios";

export default {

     data () {
		return {
			posts : [''],
			page: 1,
			perPage: 8,
			pages: [],
      attachedClass:false,
      attachedClass2:false

		}
	},


  methods:{
        getOyun(){
            this.$store.dispatch('setKategoriDatam')
        },
        	async getPosts () {
                await axios.get("http://localhost:5000/datalarim?pageNo=1&size=50",{headers: {data: ("oyun")}})
                 .then(res => {
                     this.posts = res.data.message
                    this.attachedClass = true
                     })
		},

    	async getTopluluks(datam) {
                console.log(datam);
                this.pages = []
                await axios.get("http://localhost:5000/datalarim?pageNo=1&size=50",{headers: {data: (datam)}})
                 .then(res => {
                     this.posts = res.data.message
                     this.attachedClass2 = true
                     })
		},

		setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}

    },
    computed: {
		displayedPosts () {
			return this.paginate(this.posts);
		}
	},

    watch: {
		posts () {
			this.setPages();
		}
	},

    created(){
		this.getPosts();
	},

    filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}


}
</script>

<style scoped>

button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;
}

.yellow{
  border-color: indigo;
}


</style>
