<template>
  <div>
      <!-- Responsive Table Container -->
<div class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
  <!-- Striped Table -->
  <table class="min-w-full text-sm align-middle whitespace-nowrap">
    <!-- Table Header -->
    <thead>
      <tr>
        <th class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
          Yorum Adı
        </th>
        <th class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
          İçeriği
        </th>
        <th class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
          Durum
        </th>
        <th class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
          ONAYLA
        </th>
      </tr>
    </thead>
    <!-- END Table Header -->

    <!-- Table Body -->
    <tbody v-for="i in this.$store.state.yorumlarDataTable" :key="i._id">
      <tr>
        <td class="p-3">
          <p class="font-medium">
            {{i.commentitle}}
          </p>
        </td>
        <td class="p-3 text-gray-500">
          {{i.commentdesc}}
        </td>
        <td class="p-3 text-center">
          <div class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-red-200">Onaylanmamış</div>
        </td>
        <td class="p-3 text-center">
          <button @click="onayla(i._id)" type="button" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <svg class="hi-solid hi-pencil inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
            <span>Onayla</span>
          </button>
        </td>
      </tr>

    </tbody>
    <!-- END Table Body -->
  </table>
  <!-- END Striped Table -->
</div>
<!-- END Responsive Table Container -->
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
    this.$store.dispatch("getYorumlarDataTable")
  },

  methods:{
    onayla(i){
      axios.get('http://localhost:5000/yorumonayla', {headers: {id: i}})
          .then(res => {
             this.$swal({
                icon: 'info',
                title: res.data.doc.title,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
              })
              this.$store.dispatch("getYorumlarDataTable")

          })

    }
  }



}
</script>

<style>

</style>