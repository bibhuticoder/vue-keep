<template>
  <div id="app">
    <navbar></navbar>
    <br><br><br>
    <div class="container-more-fluid">
      <div class="row">
        <div class="col-md-2 col-lg-2 col-sm-0">
          <nav-drawer></nav-drawer>
        </div>
        <div class="col-md-10 col-lg-10 col-sm-12">
          <keep-container></keep-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import Navbar from "./components/Navbar.vue";
  import KeepContainer from "./components/KeepContainer.vue";
  import NavDrawer from "./components/NavDrawer.vue";
  var config = {
    apiKey: "AIzaSyBnJMWP-usTKJfnzE9GGCPAarm_njrGhaI",
    authDomain: "delta-subset-99516.firebaseapp.com",
    databaseURL: "https://delta-subset-99516.firebaseio.com",
    projectId: "delta-subset-99516",
    storageBucket: "",
    messagingSenderId: "949929107429"
  };
  let app = Firebase.initializeApp(config)
  let db = app.database()
  let kepRef = db.ref('keeps')

  export default {
    components: {
      NavDrawer,
      KeepContainer,
      Navbar},
    name: 'app',
    firebase: {
      keeps: kepRef
    },
    data () {
      return {
        newBook: {
          title: "",
          label: ""
        },
        filterLabel: "all"
      }
    },
    methods: {
      addBook: function () {
//        if(this.newBook.title !== "" && this.newBook.label !== ""){
//          booksRef.push(this.newBook);
//          this.newBook.title = "";
//          this.newBook.label = "";
//        }
      },

      deleteBook: function (book) {
//        booksRef.child(book[".key"]).remove();
      },

      setFilter(filter){
        this.filterLabel = filter;
      },

      filterBook(books, label){
//        if(label === "all") return this.books;
//        else return books.filter(function(book){
//          return(book.label === label);
//        });
      }

    },

    filters: {

    }

  }
</script>

<style>
  #app{

  }

  .container-more-fluid{
    padding:2px;
  }
</style>
