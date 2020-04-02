<template>
  <div>

    <div id="app-instasearch">

      <form class="form-inline mr-auto">
        <input v-model="bookName" class="form-control col-12" type="text" placeholder="Search" aria-label="Search"/>
        <mdb-btn style="display: none" @click="function (){
          currentIndex = 0; currentPage = 1;
          setNewBooks({'bookName': bookName, 'index' : currentIndex})
        }"></mdb-btn>
      </form>


      <div v-if="books.totalItems">

        <blockquote @click="greet" class="blockquote text-center">
          {{ books.totalItems }}
        </blockquote>

        <mdb-pagination circle class="mb-2">
          <div class="d-flex flex-row">

            <div class="p-2"
                 @click="function (){
                   if(currentIndex !== 0){
                      currentIndex = 0; currentPage = 1;
                      setNewBooks({'bookName': bookName, 'index' : currentIndex});
                    }
                  }">
              <mdb-page-item>First</mdb-page-item>
            </div>

            <div class="p-2"
                 @click="function (){
                   if(currentIndex !== 0){
                      currentIndex -= 10; currentPage -= 1;
                      setNewBooks({'bookName': bookName, 'index' : currentIndex});
                    }
                  }">
              <mdb-page-nav prev></mdb-page-nav>
            </div>

            <div class="p-2" v-for="page in parseInt(books.totalItems /10)-1" :key="page"
                 @click="function (){
                     currentIndex = page*10-10; currentPage = page;
                     setNewBooks({'bookName': bookName, 'index' : currentIndex});
                   }">
              <mdb-page-item :class="currentPage === page ? 'active' : ''">
                {{ page }}
              </mdb-page-item>
            </div>

            <div class="p-2">
              <mdb-page-nav next></mdb-page-nav>
            </div>

            <div class="p-2">
              <mdb-page-item>Last</mdb-page-item>
            </div>
          </div>
        </mdb-pagination>

        <mdb-card v-for="book in books.items" v-bind:key="book.id" class="mb-2">
          <mdb-card-body>
            <div class="d-flex flex-row">
              <div class="align-self-start col-lg-2 col-xs-4">
                <img style="
                      height: 150px;
                      width: auto;
                      max-width: 100%;
                      max-height: 100%;"
                     :src="book.thumbnail" alt="">
              </div>
              <div class="align-self-start col-lg-10 col-xs-8">
                <h5>{{ book.title }}</h5>
                <div>
                  <span>Authors:</span>
                  <span v-for="author in book.authors" :key="author.id">
                  {{ author }},
                </span>
                </div>
              </div>
            </div>
          </mdb-card-body>
        </mdb-card>

      </div>


    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {mdbBtn, mdbCard, mdbCardBody, mdbPagination, mdbPageItem, mdbPageNav} from "mdbvue";

  export default {
    name: "BookList",
    components: {
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbPagination,
      mdbPageItem,
      mdbPageNav
    },
    data() {
      return {
        bookName: 'Дмитрий Глуховский',
        currentIndex: 0,
        currentPage: 1
      }
    },
    computed: mapState(['books', 'booksFind']),
    methods: {
      ...mapActions(['setNewBooks']),
      greet: function (event) {
        // `this` внутри методов указывает на экземпляр Vue
        alert('Привет, ' + this.name + '!');
        // `event` — нативное событие DOM
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  }
</script>

<style scoped>

</style>