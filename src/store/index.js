import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state:{
    books:{},
    sidenav: true
  },
  getters: {
    sidenav: state => state.sidenav
  },
  mutations:{
    SET_BOOKS(state, books){
      state.books = books;
    },
    toggleSideNav: (state, value) => {
      if (typeof value === 'boolean') {
        state.sidenav = value;
        return;
      }
      state.sidenav = !state.sidenav;
    }
  },
  actions:{
    async setNewBooks({commit},args = {'index': 0}){
      if(args.bookName){
        await axios
          .get('https://www.googleapis.com/books/v1/volumes?' +
            'q=' + args.bookName +
            '&startIndex=' + args.index
          )
          .then(function(r){
            if(r.data.items){
              let books = {
                items: [],
                totalItems: 0
              };
              for (var i = 0; i< r.data.items.length; i++){
                let elem = r.data.items[i].volumeInfo.imageLinks;
                books.items[i] = {
                  title: r.data.items[i].volumeInfo.title,
                  authors: r.data.items[i].volumeInfo.authors,
                  id: r.data.items[i].id,
                  thumbnail: typeof(elem) !== 'undefined' ? elem.smallThumbnail : ''
                };
              }
              books.totalItems = r.data.totalItems;
              commit('SET_BOOKS', books)
            }else{
              commit('SET_BOOKS', [])
            }
          })
          .catch(error => console.log(error))
      }else{
        commit('SET_BOOKS', []);
      }

    },
    toggleSideNav({commit}, value) {
      commit('toggleSideNav', value)
    }
  },
})