webpackJsonp([1],{"03Kp":function(t,e,a){"use strict";var i=a("YNvL"),s=a("Tlzp");e.a={components:{KeepInput:s.a,Keep:i.a},name:"keep-container",computed:{keeps:function(){return this.$store.getters.keeps}}}},"04DH":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.editLabelMode?a("div",{staticClass:"edit-label-model"},[a("h4",[t._v("Edit Labels")]),t._v(" "),a("hr"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newLabel,expression:"newLabel"}],staticClass:"edit-label-input",attrs:{type:"text",placeholder:"Create new label..."},domProps:{value:t.newLabel},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addLabel(e)},input:function(e){e.target.composing||(t.newLabel=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"labels-list"},t._l(t.labels,function(e){return a("ul",[a("li",[a("span",{staticClass:"glyphicon glyphicon-tag"}),t._v("    \n          "+t._s(e)+"\n          "),a("span",{staticClass:"glyphicon glyphicon-trash pull-right remove",on:{click:function(a){t.removeLabel(e)}}})])])})),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-default btn-sm pull-right",on:{click:function(e){t.$store.commit("changeMode","label")}}},[t._v("Done")])]):t._e(),t._v(" "),t.editLabelMode?a("div",{staticClass:"back"}):t._e()])},s=[],n={render:i,staticRenderFns:s};e.a=n},"4a3c":function(t,e){},"5OSX":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid keep-container"},[a("br"),t._v(" "),a("br"),t._v(" "),a("keep-input"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._l(t.keeps,function(e,i){return a("div",[a("keep",{attrs:{data:t.keeps[i]}})],1)})],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},"6l5s":function(t,e){},Drc2:function(t,e,a){"use strict";var i=a("YNvL");e.a={components:{Keep:i.a},name:"navbar",methods:{switchDrawerMode:function(){this.$store.commit("changeMode","drawer")}}}},E89H:function(t,e){},JfxN:function(t,e,a){"use strict";function i(t){a("6l5s")}var s=a("03Kp"),n=a("5OSX"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-5a49a858",null);e.a=r.exports},LBbB:function(t,e,a){"use strict";e.a={name:"keep",props:["data"],data:function(){return{}},computed:{colors:function(){return this.$store.getters.colors}},methods:{removeLabel:function(t){var e=this.data.labels.indexOf(t);this.data.labels.splice(e,1)},setColor:function(t){this.data.color=t}},mounted:function(){$(function(){$('[data-toggle="tooltip"]').tooltip(),console.log("asdasd")})}}},M93x:function(t,e,a){"use strict";function i(t){a("E89H")}var s=a("xJD8"),n=a("Wir/"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,null,null);e.a=r.exports},Mpj9:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("M93x"),n=a("1mcD"),l=a.n(n),o=a("olkN");i.a.config.productionTip=!1,i.a.use(l.a),new i.a({el:"#app",store:o.a,template:"<App/>",components:{App:s.a}})},Tlzp:function(t,e,a){"use strict";function i(t){a("hjIG")}var s=a("erE4"),n=a("dVx0"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-15bf9ea1",null);e.a=r.exports},VFTt:function(t,e,a){"use strict";function i(t){a("4a3c")}var s=a("zFZe"),n=a("04DH"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-11bce3e6",null);e.a=r.exports},"Wir/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("div",{staticClass:"container-more-fluid container-fluid"},[a("nav-drawer"),t._v(" "),a("keep-container")],1),t._v(" "),a("edit-label")],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},YNvL:function(t,e,a){"use strict";function i(t){a("zNs/")}var s=a("LBbB"),n=a("h/1L"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-da38ac4e",null);e.a=r.exports},dVx0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"keep-input"},[t.keepInputMode?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputKeep.title,expression:"inputKeep.title"}],staticClass:"title",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.inputKeep.title},on:{input:function(e){e.target.composing||(t.inputKeep.title=e.target.value)}}}),t._v(" "),a("div",{ref:"text",staticClass:"text",attrs:{placeholder:"Take a note ...",contenteditable:"true"}}),t._v(" "),a("div",{staticClass:"controls"},[a("button",{staticClass:"btn btn-default btn-sm pull-right",on:{click:t.addKeep}},[t._v("Done")])])]):a("div",{on:{click:t.inputMode}},[t._m(0)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n        Take a note ...\n        "),a("span",{staticClass:"glyphicon glyphicon-pencil pull-right",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Add Text"}}),t._v(" "),a("span",{staticClass:"glyphicon glyphicon-th-list pull-right",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Add List"}}),t._v(" "),a("span",{staticClass:"glyphicon glyphicon-picture pull-right",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Add Image"}})])}],n={render:i,staticRenderFns:s};e.a=n},eiTY:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.drawerMode?a("div",{staticClass:"container-fluid drawer"},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("label",{staticClass:"pull-left small-font"},[t._v("Labels")]),t._v(" "),a("label",{staticClass:"pull-right label-btn",on:{click:function(e){t.$store.commit("changeMode","label")}}},[t._v("Edit")])])]),t._v(" "),t._l(t.labels,function(e){return a("ul",{staticClass:"label-list"},[a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-tag"}),t._v(" "+t._s(e))])])}),t._v(" "),a("ul",[a("li",{staticClass:"label-list-item",on:{click:function(e){t.$store.commit("changeMode","label")}}},[a("span",{staticClass:"glyphicon glyphicon-plus"}),t._v("Create New Label\n    ")])]),t._v(" "),a("hr"),t._v(" "),t._m(1)],2):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"label-list"},[a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-list-alt"}),t._v(" Notes ")]),t._v(" "),a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-hand-up"}),t._v(" Remainders ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"label-list"},[a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-inbox"}),t._v(" Archive")]),t._v(" "),a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-trash"}),t._v("Trash")]),t._v(" "),a("li",{staticClass:"label-list-item"},[a("span",{staticClass:"glyphicon glyphicon-cog"}),t._v("Settings")])])}],n={render:i,staticRenderFns:s};e.a=n},erE4:function(t,e,a){"use strict";e.a={components:{},name:"keep-input",data:function(){return{mode:!1,inputKeep:{title:"",text:"",list:[]}}},computed:{keepInputMode:function(){return this.$store.state.keepInputMode},keeps:function(){return this.$store.getters.keeps}},methods:{addKeep:function(){this.$store.commit("changeMode","input"),this.inputKeep.text=this.$refs.text.innerHTML,(this.inputKeep.title.length>0||this.inputKeep.text.length>0)&&(this.$store.commit("addKeep",{title:this.inputKeep.title,text:this.inputKeep.text,list:this.inputKeep.list,labels:[],color:"white"}),this.$refs.text.innerHTML="",this.inputKeep.title="",this.inputKeep.text="")},inputMode:function(){this.$store.commit("changeMode","input");var t=this;setTimeout(function(){t.$refs.text.focus()},100)}},mounted:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})}}},"h/1L":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep",style:{"background-color":t.data.color}},[t.data.title.length>0?a("p",{staticClass:"lead"},[t._v(t._s(t.data.title))]):t._e(),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.text)}}),t._v(" "),t._l(t.data.labels,function(e){return a("div",{staticClass:"chips"},[a("div",{staticClass:"chip"},[t._v("\n      "+t._s(e)+" "),a("span",{staticClass:"glyphicon glyphicon-remove chip-remove",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Remove Label"},on:{click:function(a){t.removeLabel(e)}}})])])}),t._v(" "),a("div",{staticClass:"controls"},[t._m(0),t._v(" "),a("div",{staticClass:"control-item",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"More"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"dropup control-item",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Change colors"}},[a("i",{staticClass:"fa fa-gg-circle dropdown-toggle",attrs:{id:"colorMenu","data-toggle":"dropdown"}}),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"colorMenu"}},t._l(t.colors,function(e,i){return a("li",[a("div",{staticClass:"color",style:{"background-color":e},on:{click:function(a){t.setColor(e)}}})])}))])]),t._v(" "),t._m(3)],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropup control-item",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"More"}},[a("span",{staticClass:"glyphicon glyphicon-option-vertical dropdown-toggle",attrs:{id:"moreMenu","data-toggle":"dropdown"}}),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"moreMenu"}},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Change Labels")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Make a copy")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Hide checkboxes")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-item",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Remind me"}},[a("i",{staticClass:"fa fa-bell-o",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-item",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Remove"}},[a("span",{staticClass:"glyphicon glyphicon-trash"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selector",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Select Note"}},[a("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})])}],n={render:i,staticRenderFns:s};e.a=n},hjIG:function(t,e){},lfLh:function(t,e,a){"use strict";function i(t){a("pJ2v")}var s=a("Drc2"),n=a("rOH3"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-4c76bde4",null);e.a=r.exports},nNMv:function(t,e,a){"use strict";function i(t){a("Mpj9")}var s=a("uKVQ"),n=a("eiTY"),l=a("VU/8"),o=i,r=l(s.a,n.a,o,"data-v-787aefd0",null);e.a=r.exports},olkN:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var i=a("7+uW"),s=a("NYxO");i.a.use(s.a);var n=new s.a.Store({state:{labels:["Health","Coding","Productivity","Internet","Apps","Todos","Movies"],colors:["#ef9a9a","#F48FB1","#CE93D8","#B39DDB","#9FA8DA","#90CAF9","#81D4FA","#80CBC4","#A5D6A7","#E6EE9C","#FFF59D","#FFCC80","#FFAB91","#BCAAA4","#EEEEEE","#CFD8DC","white"],editLabelMode:!1,drawerMode:!0,keepInputMode:!1,keepFilter:"all",keeps:[{title:"Sample Keep",list:[],text:"This isn a sample etxt.",labels:["Health"],color:"white"}]},getters:{keeps:function(t){return t.keeps},labels:function(t){return t.labels},colors:function(t){return t.colors}},mutations:{addKeep:function(t,e){console.log(e),t.keeps.push(e)},removeKeep:function(t,e){var a=t.keeps.indexOf(e);t.keeps.splice(a,1)},changeMode:function(t,e){"label"===e&&(t.editLabelMode=!t.editLabelMode),"drawer"===e&&(t.drawerMode=!t.drawerMode),"input"===e&&(t.keepInputMode=!t.keepInputMode)},addLabel:function(t,e){t.labels.push(e)},addLabelToKeep:function(t,e,a){}}})},pJ2v:function(t,e){},rOH3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-inverse navbar-fixed-top"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("div",{staticClass:"hamburger pull-left",on:{click:t.switchDrawerMode}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("label",{staticClass:"title title-name"},[t._v(" Vue ")]),t._v(" "),a("label",{staticClass:"title title-app"},[t._v(" Keep ")])])])])},s=[],n={render:i,staticRenderFns:s};e.a=n},uKVQ:function(t,e,a){"use strict";e.a={name:"nav-drawer",computed:{labels:function(){return this.$store.getters.labels},editLabelMode:function(){return this.$store.state.editLabelMode},drawerMode:function(){return this.$store.state.drawerMode}}}},xJD8:function(t,e,a){"use strict";var i=a("q6Ae"),s=a.n(i),n=a("lfLh"),l=a("JfxN"),o=a("nNMv"),r=a("VFTt"),c=a("Tlzp"),u={apiKey:"AIzaSyBnJMWP-usTKJfnzE9GGCPAarm_njrGhaI",authDomain:"delta-subset-99516.firebaseapp.com",databaseURL:"https://delta-subset-99516.firebaseio.com",projectId:"delta-subset-99516",storageBucket:"",messagingSenderId:"949929107429"},p=s.a.initializeApp(u),d=p.database();d.ref("keeps");e.a={components:{KeepInput:c.a,EditLabel:r.a,NavDrawer:o.a,KeepContainer:l.a,Navbar:n.a},name:"app"}},zFZe:function(t,e,a){"use strict";e.a={name:"edit-label",data:function(){return{newLabel:""}},methods:{addLabel:function(){this.labels.push(this.newLabel),this.newLabel=""},removeLabel:function(t){var e=this.labels.indexOf(t);this.labels.splice(e,1)}},computed:{editLabelMode:function(){return this.$store.state.editLabelMode},labels:function(){return this.$store.getters.labels}}}},"zNs/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.08b9fd3bdb474ad54c0c.js.map