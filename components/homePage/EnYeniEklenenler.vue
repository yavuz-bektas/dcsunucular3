<template>
  <div class="gray-bg pt80 pb40">

            <div class="container">
                <div v-motion-slide-bottom>
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 text-center center-heading mb40">

                        <h2>En Yeni Eklenenler</h2>
                        <p>
                            <strong>İlgilendiğin topluluğun seni doğrudan Discord üzerinden bulabilmesi için bu alanda görün!</strong>
                        </p>
                    </div>
                </div><!--/row-->



                <div class="row">
                    <div class="col-sm-6 col-md-3 mb30" v-for="i in this.data" :key="i.ID">
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
                </div>
                </div>
                </div>
</template>

<script>
import axios from "axios";
export default {


	data(){
		return{
			data:""
		}
	},

 mounted(){


	 axios.get('http://localhost:5000/tokenal', )
          .then(res => {
		      let tokens = res.data.token
              console.log(tokens);
              axios.get('http://localhost:5000/all',{headers: {token: tokens}} )
          .then(res => {
		      this.data = res.data.all
		  })
		  })




}
}
</script>

<style>

</style>