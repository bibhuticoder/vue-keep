<template>
  <div class="keep">
    <p class="lead">{{data.title}}</p>
    <div class="content" v-html="data.text">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keep',
    props:['data'],
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .keep{
    float: left;
    width: 250px;
    min-height: 150px;
    max-height: 500px;
    background-color: white;
    padding: 10px;
    margin: 10px;
    box-shadow: 1px 1px 5px gray;
    cursor: default;
  }

  .keep:hover{
    box-shadow: 1px 1px 10px gray;
  }

</style>
