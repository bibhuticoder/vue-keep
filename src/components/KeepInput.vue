<template>
  <div>
    <div class="keep-input">

      <div v-if="keepInputMode">
        <input type="text" placeholder="Title" class="title" v-model="inputKeep.title" />
        <div class="text" ref="text" placeholder="Take a note ..." contenteditable="true"></div>
        <div class="controls">
          <button class="btn btn-default btn-sm pull-right" v-on:click="addKeep">Done</button>
        </div>
      </div>

      <div v-else v-on:click="inputMode">
        <p>
          Take a note ...
          <span class="glyphicon glyphicon-pencil pull-right" data-toggle="tooltip" data-placement="bottom" title="Add Text"></span>
          <span class="glyphicon glyphicon-th-list pull-right" data-toggle="tooltip" data-placement="bottom" title="Add List"></span>
          <span class="glyphicon glyphicon-picture pull-right" data-toggle="tooltip" data-placement="bottom" title="Add Image"></span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    name: 'keep-input',
    data() {
      return {
        mode: false,
        inputKeep:{
          title: "",
          text: "",
          list: []
        }

      }
    },

    computed:{
      keepInputMode(){
        return this.$store.state.keepInputMode;
      },
      keeps() {
        return this.$store.getters.keeps;
      },
    },

    methods: {
      addKeep: function(){
        this.$store.commit('changeMode', 'input');
        this.inputKeep.text = this.$refs.text.innerHTML;
        if(this.inputKeep.title.length > 0 || this.inputKeep.text.length > 0){
          this.$store.commit('addKeep', {
            title: this.inputKeep.title,
            text: this.inputKeep.text,
            list: this.inputKeep.list,
            labels: [],
            color: "white"
          });
          this.$refs.text.innerHTML = "";
          this.inputKeep.title = "";
          this.inputKeep.text = "";
        }
      },

      inputMode: function () {
        this.$store.commit('changeMode', 'input');
        var self = this;
        setTimeout(function () {
          self.$refs.text.focus();
        }, 100);

      }
    },

    mounted: function(){
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .keep-input{
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    width: 500px;
    padding: 10px;
    font-size: 15px;
    color: #3a3a3a;
    margin: 0 auto;
  }

  .keep-input p{
    margin-top: 5px;
    cursor: text;
    font-size: 16px;
  }

  .keep-input p span{
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
  }

  input[type='text'],.text{
    border-style: none;
    outline: none;
    background-color: transparent;
  }

  .title{
    height: 20px;
    width: 480px;
    font-size: 16px;
    font-weight: bolder;
  }

  .text{
    width: 480px;
    margin-top: 15px;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 14px;
    cursor: text;
  }

  .controls{
    width: 100%;
    height: 30px;
  }

  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block;
  }

</style>
