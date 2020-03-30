import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state:{
    books:[],
  },
  actions:{
    async setNewBooks({commit},args){
      await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + args.bookName)
        .then(r => commit('SET_BOOKS', r.data))
        .catch(error => console.log(error))
    },
  },
  mutations:{
    SET_BOOKS(state, books){
      state.books = books;
    },
  }
})