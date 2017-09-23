<template>

  <div>
    <!--<div class="col-md-3 col-lg-3 col-sm-0">-->
    <div class="container-fluid drawer" v-if="drawerMode">
    <ul class="label-list">
      <li class="label-list-item"> <span class="glyphicon glyphicon-list-alt"></span> Notes </li>
      <li class="label-list-item"> <span class="glyphicon glyphicon-hand-up"></span> Remainders </li>
    </ul>
    <hr>
    <ul>
      <li>
        <label class="pull-left small-font">Labels</label>
        <label class="pull-right label-btn" v-on:click="$store.commit('changeMode', 'label')">Edit</label>
      </li>
    </ul>
    <ul class="label-list" v-for="l in labels">
      <li class="label-list-item"> <span class="glyphicon glyphicon-tag"></span> {{l}}</li>
    </ul>
    <ul>
      <li class="label-list-item" v-on:click="$store.commit('changeMode', 'label')">
        <span class="glyphicon glyphicon-plus"></span>Create New Label
      </li>
    </ul>
    <hr>
    <ul class="label-list">
      <li class="label-list-item"> <span class="glyphicon glyphicon-inbox"></span> Archive</li>
      <li class="label-list-item"> <span class="glyphicon glyphicon-trash"></span>Trash</li>
      <li class="label-list-item"> <span class="glyphicon glyphicon-cog"></span>Settings</li>
    </ul>
    </div>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'nav-drawer',
    computed: {
      labels() {
        return this.$store.getters.labels;
      },
      editLabelMode() {
        return this.$store.state.editLabelMode;
      },
      drawerMode() {
        return this.$store.state.drawerMode;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .drawer{
    float: left;
    height: 100vh;
    width: 300px;
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: lightgray;
    overflow: hidden;
  }

  .drawer:hover{
    overflow-y: auto;
  }

  ul{
    padding-left: 0px;
    /*display:table;*/
  }

  ul li{
    height: 40px;
    line-height: 15px;
    font-size: 15px;
    list-style: none;
    padding: 15px;
    cursor: pointer;
    color: #3a3a3a;
    /*display:table-cell;*/
    /*vertical-align:middle;*/
    /*width: 100%;*/
  }

  ul li.label-list-item:hover{
    background-color: lightgray;
  }

  ul li span{
    margin-right: 10px;
  }

  .label-btn{
    padding: 8px;
    font-weight: normal;
    color: #3a3a3a;
    cursor: pointer;
    border-radius: 3px;
  }

  .label-btn:hover{
    background-color: lightgray;
  }

  .small-font{
    font-size: 12px;
  }


</style>
