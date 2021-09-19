<template>
   <div class="hero-form bg-parallax parallax-overlay"  data-jarallax='{"speed": 0.2}' :style="{ backgroundImage: `url(${image})`}">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-7">
                        <h1>Discord Sunucu Listeleri</h1>
                        <p class="mb20">İlgilendiğiniz sunucuları bulun ve yeni arkadaşlarla tanışın</p>
                        <div class="hero-buttons">
                            <nuxt-link to="top30" class="btn btn-lg btn-white">En İyileri Keşfet</nuxt-link>
                            <nuxt-link to="/sunucuekle" class="btn btn-lg btn-danger">Sunucumu Eklemek İstiyorum</nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-4 col-md-offset-1 col-sm-5">
                        <div class="hero-search-form">
                            <h3>Sunucu Ara</h3>
                            <hr>
                            <form>
                                <div class="form-hero-group mb15">
                                    <i class="fa fa-search"></i>
                                    <input type="text" class="form-control" placeholder="Oyun,Topluluk...">
                                </div>

                                 <div class="form-hero-group mb15">
                                    <i class="fa fa-folder"></i>
                                    <select class="form-control" title="Category">
                                        <option>Restaurants</option>
                                        <option>Jobs</option>
                                        <option>Property</option>
                                        <option>Automotive</option>
                                    </select>
                                </div>
                                <input type="submit" class="btn btn-dark btn-lg btn-block" value="Ara">
                            </form>
                        </div>
                     </div>
                </div>
            </div>
        </div>
</template>

<script>
import bikeImg from "~/assets/images/bg2.jpg";
export default {
    data() {
        return {
            image: bikeImg,
            };
        },

}
</script>

<style>

</style>