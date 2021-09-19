<template>
    <div class="">
            <div class="container">
                <div v-motion-slide-bottom>
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                        <h2>Öne çıkan 20 sunucu</h2>
                        <p>
                            Paylaşılan ilanlarda değişiklik yapma ve yayından kaldırma hakları Websitesin'e aittir.
                        </p>
                    </div>
                </div>
                 </div>
                <div v-motion-slide-bottom>
                <!-- People Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                <!-- User Card -->
                <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden" v-for="i in this.topotuz">
                    <div class="p-5 lg:p-6 flex-grow w-full text-center">
                    <a href="javascript:void(0)" class="block -mx-2 -mt-2 mb-5 transform origin-bottom transition ease-out duration-200 hover:scale-125 hover:shadow-xl active:shadow active:opacity-50">
                        <img :src="`${i.images}`" alt="Photo" class="inline-block rounded" />
                    </a>
                    <h3 class="text-lg font-semibold">
                        {{i.title}}
                    </h3>
                     <p class="truncate max-w-md">
                        {{i.description}}.
                    </p>
                    <h4 class="text-sm font-semibold text-green-500">
                        Premium Plan
                    </h4>
                    </div>
                    <nav class="flex justify-center p-2 bg-gray-50 text-center">
                    <nuxt-link :to="`sunucukesfet/${i._id}`"
                        class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-indigo-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
                        >
                        <i class="fa fa-search"></i>
                        <span>Keşfet</span>
                        </nuxt-link>
                    </nav>
                </div>
                <!-- END User Card -->
                </div>
                <!-- END People Grid -->
            </div>
        </div>
         </div>
</template>

<script>
import axios from "axios";
export default {

    data(){
        return{
        topotuz:"",
        }
  },

    async mounted(){
        await axios.get("http://localhost:5000/benzersunucular",{headers: {data: ('top20')}})
                 .then(res => {
                     this.topotuz = res.data.all
                     })

	},



}
</script>

<style>

</style>