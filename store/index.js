import axios from "axios";
import Cookies from "js-cookie";
const jwt = require('jsonwebtoken')

export const state = () => ({

    homePageTrends: "",
    sunucularDataTable: "",
    yorumlarDataTable: "",
    user: null,
    top30: "",
    kategoriDatam: "",
    LoginMiAcaba:"",
})

export const mutations = {
 setPosts(state,posts) {
    state.homePageTrends = posts
    },

    setSunucularDataTable(state,posts) {
    state.sunucularDataTable = posts
    },

    setYorumlarDataTable(state,posts) {
    state.yorumlarDataTable = posts
    },

    set_user:(state, account) => {
    state.user = account;
    },

    setTop30(state,posts) {
    state.top30 = posts
    },

    setKategoriData(state,posts) {
    state.kategoriDatam = posts
    },

    setLoginMiAcaba(state,posts) {
    state.LoginMiAcaba = posts
    },


}


export const actions = {

    async getAlls(vuexContext, post) {
        return await axios.get("http://localhost:5000/all/")
            .then(res => {
                vuexContext.commit("setPosts", res.data)
            })
    },

    async getTop30(vuexContext, post) {
        return await axios.get("http://localhost:5000/top30/")
            .then(res => {
                vuexContext.commit("setTop30", res.data.all)
            })
    },

    async getSunucularDataTable(vuexContext, post) {
        return await axios.get("http://localhost:5000/onaysizlar/")
            .then(res => {
                vuexContext.commit("setSunucularDataTable", res.data.all)
            })
    },

    async getYorumlarDataTable(vuexContext, post) {
        return await axios.get("http://localhost:5000/yorumbuldashboard/")
            .then(res => {
                vuexContext.commit("setYorumlarDataTable", res.data.all)
            })
    },



      async nuxtServerInit({ commit }, { req, redirect,route }) {
    if (process.server && process.static) return;
          let dolumu = req.headers.cookie
          if (dolumu) {
              dolumu = dolumu.split("=")[1]
              commit('set_user', dolumu)
              return await axios.get('http://localhost:5000/me', {headers: {token: dolumu}})
                 .then(res => {
                     let durum = res.data.User
                     commit('setLoginMiAcaba', durum)
                 })
          }
    },

    //  nuxtServerInit({ commit }, { req, redirect,route }) {
    //      let dolumud = req.headers.cookie
    //      console.log(dolumud)
    //       if (dolumud) {
    //           dolumud = dolumud.split("=")[1]
    //           axios.get('http://localhost:5000/me', {headers: {token: dolumud}})
    //               .then(res => {
    //                   console.log(res.data.User);
    //                  commit('setLoginMiAcaba',res.data.User)
    //             })
    //       }
    // },






      async setKategoriDatam(vuexContext, post) {
        return await axios.get("http://localhost:5000/datalarim?pageNo=1&size=10")
            .then(res => {
                vuexContext.commit("setKategoriData", res.data)
            })
    },



}