<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-more-fluid container-fluid">
      <nav-drawer></nav-drawer>
      <keep-container></keep-container>
    </div>
    <edit-label></edit-label>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import Navbar from "./components/Navbar.vue";
  import KeepContainer from "./components/KeepContainer.vue";
  import NavDrawer from "./components/NavDrawer.vue";
  import EditLabel from "./components/EditLabel.vue";
  import KeepInput from "./components/KeepInput.vue";
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
      KeepInput,
      EditLabel,
      NavDrawer,
      KeepContainer,
      Navbar},
    name: 'app',
//    firebase: {
//      keepsF: kepRef
//    },


  }
</script>

<style>
  #app{
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .container-more-fluid{
    padding:5px;
    margin-top: 150px;
  }
</style>
