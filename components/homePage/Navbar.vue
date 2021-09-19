<template>
    <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid ">
                <div class="navbar-header ">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <nuxt-link to="/" class="navbar-brand"><img src="~/assets/images/logo.png" alt=""></nuxt-link>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><nuxt-link to="/">Ana Sayfa</nuxt-link></li>
                        <li><nuxt-link to="/top30">En Iyiler</nuxt-link></li>
                        <li><nuxt-link to="/kategori">Kategori</nuxt-link></li>
                        <li><nuxt-link to="/sss">SSS</nuxt-link></li>
                        <li class="button-navbar"><nuxt-link to="/sunucuekle"><i class="fa fa-plus"></i>Sunucu Ekle</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>