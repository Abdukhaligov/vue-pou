<template>
  <div>
    <header>
      <h1>Book finder</h1>
    </header>

    <div id="app-instasearch">
      <div class="input-container">
        <input type="text" placeholder="Type a name" v-model="bookName" @keydown="setNewBooks({'bookName': bookName})"/>
      </div>


      <ul>
        <li class="photo" v-for="book in books.items" v-bind:key="book.id">
          <div>
            <img style="height: 100px; width: auto" :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
          </div>
          <div>
            <div style="overflow: auto">
              <h5 style="float:left;">Title:</h5> {{ book.volumeInfo.title }}
            </div>

            <div style="overflow: auto">
              <h5 style="float:left;">Author:</h5> {{ book.volumeInfo.authors }}
            </div>
          </div>

        </li>
      </ul>


    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "BookList",
    data() {
      return {
        bookName: '',
      }
    },
    computed: mapState(['books']),
    methods: mapActions(['setNewBooks']),
    mounted() {
      this.setNewBooks({'bookName' : this.bookName});
    }
  }
</script>

<style scoped>
  .input-container {
    border-radius: 5px;
    background: #677482;
    padding: 10px;
  }

  .input-container input {
    border: none;
    background: transparent;
    color: white;
    padding: 6px 15px;
    font-size: 18px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a6b0ba;
    opacity: 1; /* Firefox */
  }

  .photo {
    list-style: none;
    display: grid;
    grid-template-columns: 200px auto;
    margin-top: 20px;
    align-items: center;
    background-color: #e9edf0;
    padding: 30px 50px;
    border-radius: 5px;
    border: 1px solid #e3e3e3;
  }

  .author {
    font-size: 25px;
    margin-left: 20px;
    color: #75818e;
  }

  .photo img {
    border-radius: 5px;
    width: 200px;
  }
</style>