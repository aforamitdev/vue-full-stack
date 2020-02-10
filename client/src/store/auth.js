import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state={
    isLogined:null,
    role:null,
    backend:""
}

const getters = {};

const actions ={
        async getData({commit}){
                axios.get("http://localhost:5000/this").then(e=>{console.log(e); commit("setData",e.data)} )
        }
}

const mutations={
    setData:(state,data)=>{
        state.backend=data
    }
}
export default {
  state,
  getters,
  actions,
  mutations
};