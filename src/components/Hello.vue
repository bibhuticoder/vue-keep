<template>
  <div>


    <div class="container">
      <h1>{{books}}</h1>
    </div>



  </div>


</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: {Todo},
  props: ["books"],
  name: 'hello',
  data () {
    return {
      newBook: ""
    }
  },

  methods: {
    addBook: function () {
      booksRef.push(this.newBook);
      this.newBook = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    border-radius: 0px !important;
  }
</style>
