<template>
  <div>
         <div class="page-bread mb70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Giriş Yap</h3>
                    </div>
                    <div class="col-sm-6">

                    </div>
                </div>
            </div>
        </div>
        <div class="container mb70">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                    <div class="border-card">
                        <h3 class="font300 mb0 text-center">Hesabınıza giriş yapın</h3> <hr>
                          <form role='form'>
                            <div class='form-group-icon mb15'>
                                <i class='fa fa-envelope'></i>
                                <input v-model="uid" type="text" class='form-control' placeholder="Kullanıcı Adı">
                            </div>
                            <div class='form-group-icon mb15'>
                                <i class='fa fa-lock'></i>
                                <input @keyup.enter="Login" v-model="password" type="password" class='form-control' placeholder="Şifre">
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="rm">
                                <label for="rm">
                                     Beni Hatırla
                                </label>
                            </div>
                            <input @click="Login" value="Giriş Yap" class='btn btn-default btn-lg btn-block'>
                        </form>
                        <hr>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {

    data(){
        return{
            uid:"",
            password:""
        }
    },

    methods:{
        async Login(){
            let user = {
            uid: this.uid,
            password: this.password
          }
          await axios.post('http://localhost:5000/login',user)
          .then(async res => {
             if (res.status == 200){
              Cookies.set("token",res.data.token, { expires: 1 })
              this.$store.commit('set_user',res.data.token)
              await axios.get('http://localhost:5000/me', {headers: {token: Cookies.get("token")}})
          .then(res => {
                this.$store.commit('setLoginMiAcaba',res.data.User)
		  })
              this.$router.push('/admin/dashboard')
            }
          }).catch( err=> {
              this.$swal({
                icon: 'error',
                title: 'Yanlış oldu bir şeyler, tekrar dene!',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
            })
          })



        }
    }

}
</script>

<style>

</style>