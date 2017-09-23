<template>
  <div class="container-fluid keep-container">
    <br>
    <br>
    <keep-input></keep-input>
    <br>
    <br>
    <div v-for="(keep, i) in keeps">
      <keep :data="keeps[i]"></keep>
    </div>

  </div>
</template>

<script>
  import Keep from "./Keep.vue";
  import KeepInput from "./KeepInput.vue";

  export default {
    components: {
      KeepInput,
      Keep
    },
    name: 'keep-container',
    computed: {
      keeps() {
        return this.$store.getters.keeps;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .keep-container{
    height: 100vh;
    overflow: auto;
    padding-bottom: 100px;
  }

</style>
