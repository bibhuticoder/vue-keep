<template>

  <div>
    <div class="edit-label-model" v-if="editLabelMode">
      <h4>Edit Labels</h4>
      <hr>
      <input type="text" placeholder="Create new label..." class="edit-label-input" v-model="newLabel" @keyup.enter="addLabel"/>
      <br>
      <br>
      <div class="labels-list">
        <ul v-for="l in labels">
          <li>
            <span class="glyphicon glyphicon-tag"></span> &nbsp;&nbsp;&nbsp;
            {{l}}
            <span class="glyphicon glyphicon-trash pull-right remove" v-on:click="removeLabel(l)"></span>
          </li>
        </ul>
      </div>
      <hr>
      <button class="btn btn-default btn-sm pull-right" v-on:click="$store.commit('changeMode', 'label')">Done</button>
    </div>
    <div class="back" v-if="editLabelMode"></div>
  </div>

</template>

<script>
  export default {
    name: 'edit-label',
    data() {
      return {
        newLabel: ""
      }
    },
    methods: {
      addLabel: function(){
        this.labels.push(this.newLabel);
        this.newLabel = "";
      },
      removeLabel: function(label){
        var index = this.labels.indexOf(label);
        this.labels.splice(index, 1);
      }
    },
    computed:{
      editLabelMode(){
        return this.$store.state.editLabelMode;
      },
      labels() {
        return this.$store.getters.labels;
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .back{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3a3a3a;
    opacity: 0.5;
    z-index: 5;
    width: 100%;
    height: 100%;
  }


  .edit-label-model{
    background-color: white;
    box-shadow: 1px 1px 5px black;
    position: absolute;
    top: 150px;
    z-index: 10;
    max-width: 200px;
    min-width: 300px;
    overflow: auto;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 10px;

  }

  .edit-label-input{
    width: 100%;
    outline: none;
    border-style: none;
    border-bottom-style: solid;
    border-bottom-color: gray;
  }

  .labels-list{
    max-height: 200px;
    overflow: auto;
  }

  ul{
    padding-left: 10px;

  }

  ul li{
    color: dimgray;
    list-style: none;
  }

  .remove{
    cursor: pointer;
    margin-right: 10px;
  }

  .remove:hover{
    color: black;
  }

</style>
