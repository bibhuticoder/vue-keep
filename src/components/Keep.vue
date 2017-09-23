<template>
  <div class="keep" v-bind:style="{'background-color': data.color }">
    <p class="lead" v-if="(data.title.length>0)">{{data.title}}</p>
    <div class="content" v-html="data.text"></div>
    <div class="chips" v-for="l in data.labels">
      <div class="chip" >
        {{l}} <span class="glyphicon glyphicon-remove chip-remove"
                    data-toggle="tooltip" data-placement="bottom" title="Remove Label" v-on:click="removeLabel(l)"></span>
      </div>
    </div>
    <div class="controls">
      <div class="dropup control-item" data-toggle="tooltip" data-placement="bottom" title="More">
        <span class="glyphicon glyphicon-option-vertical dropdown-toggle" id="moreMenu" data-toggle="dropdown"></span>
        <ul  class="dropdown-menu" aria-labelledby="moreMenu" >
          <li><a href="#">Change Labels</a> </li>
          <li><a href="#">Make a copy</a></li>
          <li><a href="#">Hide checkboxes</a></li>
        </ul>
      </div>

      <div class="control-item" data-toggle="tooltip" data-placement="bottom" title="More">

      </div>

      <div class="control-item" data-toggle="tooltip" data-placement="bottom" title="Remind me">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
      </div>

      <div class="control-item" data-toggle="tooltip" data-placement="bottom" title="Remove">
        <span class="glyphicon glyphicon-trash"></span>
      </div>

      <div class="dropup control-item" data-toggle="tooltip" data-placement="bottom" title="Change colors">
        <i class="fa fa-gg-circle dropdown-toggle" id="colorMenu" data-toggle="dropdown"></i>
        <ul  class="dropdown-menu" aria-labelledby="colorMenu" >
          <li v-for="(c, i) in colors">
            <div class="color" v-bind:style="{'background-color': c }"  v-on:click="setColor(c)"></div>
          </li>
        </ul>
      </div>

    </div>
    <div class="selector" data-toggle="tooltip" data-placement="bottom" title="Select Note">
      <i class="fa fa-check" aria-hidden="true"></i>
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
    computed:{
      colors(){
        return this.$store.getters.colors;
      },
    },

    methods: {
      removeLabel: function(label){
        var index = this.data.labels.indexOf(label);
        this.data.labels.splice(index, 1);
      },

      setColor: function(color){
        this.data.color = color;
      }

    },

    mounted: function(){
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        console.log("asdasd");
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .keep{
    position: relative;
    float: left;
    width: 250px;
    min-height: 100px;
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

  .content{
    min-height: 50px;
  }

  .chip {
    display: inline-block;
    padding: 0 5px;
    height: 20px;
    font-size: 10px;
    line-height: 20px;
    border-radius: 5px;
    cursor: pointer;
    border-style: solid;
    border-color: #3a3a3a;
    border-width: 1px;
  }

  .chip-remove{
    visibility: hidden;
  }

  .chip:hover .chip-remove{
    visibility: visible;
  }

  .chip-remove:hover{
    color: maroon;
  }

  .controls{
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    width:100%;
    height: 20px;
  }

  .keep:hover .controls{
    visibility: visible;
    opacity: 1;
  }

  .control-item{
    float: right;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 16px;
    cursor: pointer;
    color: gray;
  }

  .control-item:hover{
    color: #3a3a3a;
  }

  .color{
    width:20px;
    height: 20px;
    border-radius: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    float: left;
    margin: 5px;
    cursor: pointer;
  }

  .color:hover{
    border-color: black;
  }

  .selector{
    position: absolute;
    left: -14px;
    top: -14px;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    box-shadow: 1px 1px 1px lightgrey;
    background-color: white;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .keep:hover .selector{
    visibility: visible;
    opacity: 1;
  }

</style>
