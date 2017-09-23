import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    labels: ["Health", "Coding", "Productivity", "Internet", "Apps", "Todos", "Movies"],
    colors: ['#ef9a9a', '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80CBC4', '#A5D6A7', '#E6EE9C', '#FFF59D', '#FFCC80', '#FFAB91', '#BCAAA4', '#EEEEEE', '#CFD8DC', 'white'],
    editLabelMode: false,
    drawerMode: true,
    keepInputMode: false,
    keepFilter: "all",
    keeps:[
      {
        title: "Sample Keep",
        list: [],
        text: "This isn a sample etxt.",
        labels: ["Health"],
        color: "white"
      }
    ]
  },

  getters: {
    keeps(state){
      return state.keeps;
    },
    labels(state){
      return state.labels;
    },
    colors(state){
      return state.colors;
    }
  },

  mutations:{
    addKeep(state, k){
      console.log(k);
      state.keeps.push(k);
    },

    removeKeep(state, keep){
      let index = state.keeps.indexOf(keep);
      state.keeps.splice(index, 1);
    },

    changeMode(state, modeName){
      if(modeName === "label") state.editLabelMode = !state.editLabelMode;
      if(modeName === "drawer") state.drawerMode = !state.drawerMode;
      if(modeName === "input") state.keepInputMode = !state.keepInputMode;
    },

    addLabel(state, label){
      state.labels.push(label);
    },

    addLabelToKeep(state, keep, label){

    }

  }
});
