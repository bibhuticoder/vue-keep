<template>
  <div class="container">
    <br>
    <br>
    <keep-input :keeps="keeps"></keep-input>
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
      Keep},
    name: 'keep-container',
    props:[],
    data() {
      return {
        keeps:[
          {
            title: "Sample Keep",
            list: [],
            text: "This isn a sample etxt."
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
