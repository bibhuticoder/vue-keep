<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Vue-Todos
          </a>
        </div>
        <button  class="pull-right btn btn-success">
          <span class="glyphicon glyphicon-list-alt"></span>
          &nbsp;&nbsp; New Todo
        </button>
      </div>
    </nav>

    <div class="container">

      <div class="btn-group">
        <button type="button" class="btn btn-success" v-on:click="setFilter('all')">all</button>
        <button type="button" class="btn btn-default" v-on:click="setFilter('a')">a</button>
        <button type="button" class="btn btn-default" v-on:click="setFilter('b')">b</button>
        <button type="button" class="btn btn-default" v-on:click="setFilter('c')">c</button>
      </div>

      <ul v-for="b in filterBook(books, filterLabel)" class="list-group">
        <li class="list-group-item">
          <div class="container-fluid">
            <label class="pull-left">{{b.title}}</label>
            <button class="btn btn-sm btn-default pull-right" v-on:click="deleteBook(b)"><span class="glyphicon glyphicon-trash"></span></button>
          </div>
        </li>
      </ul>

      <hr>
      <form>
        <div class="input-group">
          <input type="text" placeholder="Title" class="form-control" v-model="newBook.title"/>
          <input type="text" placeholder="Label" class="form-control" v-model="newBook.label"/>
          <button type="button" v-on:click="addBook" class="btn btn-warning">Add</button>
        </div>
      </form>

    </div>


  </div>
</template>

<script>
  import Firebase from 'firebase'
  import Hello from "./components/Hello.vue";
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
  let booksRef = db.ref('books')

  export default {
    components: {Hello},
    name: 'app',
    firebase: {
      books: booksRef
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
        if(this.newBook.title !== "" && this.newBook.label !== ""){
          booksRef.push(this.newBook);
          this.newBook.title = "";
          this.newBook.label = "";
        }
      },

      deleteBook: function (book) {
        booksRef.child(book[".key"]).remove();
      },

      setFilter(filter){
        this.filterLabel = filter;
      },

      filterBook(books, label){
        if(label === "all") return this.books;
        else return books.filter(function(book){
          return(book.label === label);
        });
      }

    },

    filters: {

    }

  }
</script>

<style>

</style>
