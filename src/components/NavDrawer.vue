<template>
  <div class="container-fluid drawer">
    <ul>
      <li> <span class="glyphicon glyphicon-list-alt"></span> Notes </li>
      <li> <span class="glyphicon glyphicon-hand-up"></span> Remainders </li>
    </ul>
    <hr>
    <ul>
      <li> <span class="glyphicon glyphicon-tag"></span> Label 1</li>
      <li> <span class="glyphicon glyphicon-tag"></span>Label 2</li>
      <li> <span class="glyphicon glyphicon-tag"></span>Label 3</li>
      <li> <span class="glyphicon glyphicon-tag"></span>Label 4</li>
    </ul>
    <hr>
    <ul>
      <li> <span class="glyphicon glyphicon-inbox"></span> Archive</li>
      <li> <span class="glyphicon glyphicon-trash"></span>Trash</li>
      <li> <span class="glyphicon glyphicon-cog"></span>Settings</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nav-drawer',
    props:[],
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

  .drawer{
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: lightgray;
  }

  ul{
    padding-left: 0px;
  }

  ul li{
    height: 40px;
    line-height: 15px;
    font-size: 15px;
    list-style: none;
    padding: 15px;
    cursor: pointer;
    color: #3a3a3a;
  }

  ul li:hover{
    background-color: lightgray;
  }

  ul li span{
    margin-right: 10px;
  }

</style>
