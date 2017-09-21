<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          Vue-Keep
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import Keep from "./Keep.vue";

export default {
  components: {Keep},
  props: [],
  name: 'navbar',
  data () {
    return {
    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    border-radius: 0px !important;
  }
</style>
