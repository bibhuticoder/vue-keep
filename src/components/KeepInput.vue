<template>
  <div>
    <div class="keep-input">

      <div v-if="mode">
        <input type="text" placeholder="Title" class="title" v-model="title" />
        <div class="text" ref="text" placeholder="Take a note ..." contenteditable="true"></div>
        <div class="controls">
          <button class="btn btn-default btn-sm pull-right" v-on:click="addKeep">Done</button>
        </div>
      </div>

      <div v-else v-on:click="inputMode">
        <p>
          Take a note ...
          <span class="glyphicon glyphicon-pencil pull-right"></span>
          <span class="glyphicon glyphicon-th-list pull-right"></span>
          <span class="glyphicon glyphicon-picture pull-right"></span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    name: 'keep-input',
    props:['keeps'],
    data() {
      return {
        mode: false,
        title: "",
        text: "",
        list: []
      }
    },
    methods: {
      addKeep: function(){
        this.mode = false;
        this.text = this.$refs.text.innerHTML;
        if(this.title !== ""){
          this.keeps.push({
            title: this.title,
            text: this.text,
            list: this.list
          });
          this.$refs.text.innerHTML = "";
          this.title = "";
        }
      },

      inputMode: function () {
        this.mode=true;

        var self = this;
        setTimeout(function () {
          self.$refs.text.focus();
        }, 100);

      }
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
