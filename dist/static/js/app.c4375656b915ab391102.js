webpackJsonp([1],{"48c7":function(t,e){},"EdF/":function(t,e){},"JM/L":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("cbQw"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("owSs")({name:"App"},n,!1,function(t){s("NzLu")},null,null).exports,r=s("lSsp"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=s("owSs")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){s("ov5j")},"data-v-d8ec41bc",null).exports,u={name:"First",data:function(){return{msg:"This is the first vue component."}},mounted:function(){this.initCharts()},methods:{initCharts:function(){this.$echarts.init(document.getElementById("main")).setOption({title:{text:"ECharts 入门示例"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"charts",attrs:{id:"main"}}),t._v(" "),s("el-button",[t._v("我是按钮")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/second"}},[t._v("第二个页面")])],1)],1)},staticRenderFns:[]};var d=s("owSs")(u,c,!1,function(t){s("mABa")},null,null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var h=s("owSs")({name:"Second",components:{},data:function(){return{msg:"This is the second vue component."}},methods:{}},m,!1,function(t){s("JM/L")},null,null).exports,v=s("Fdeo"),p=s.n(v),f={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",userName:"",password:"",responseInfo:null}},methods:{Login:function(){var t=this;if(""===this.userName||""===this.password)this.$notify({title:"输入用户名和密码",message:"用户名或密码为空，请输入",type:"warning"});else{if(window.XMLHttpRequest)var e=new XMLHttpRequest;else e=new ActiveXObject("Microsoft.XMLHTTP");var s=this.$store.state.serverAddr+"/login";e.open("POST",s),e.setRequestHeader("Content-type","application/json; charset=utf-8");var a=p()({name:this.userName,password:this.password});e.send(a);e.onreadystatechange=function(s){4==e.readyState&&e.status>=200&&e.status<=206?(console.log("响应成功！"),console.log(e.responseText),t.responseInfo=JSON.parse(e.responseText),"success"===t.responseInfo.result?(t.$store.commit("RecordUUID",t.responseInfo.uuid),console.log("记录uuid成功，uuid:"+t.$store.state.uuid),t.$notify({title:"登陆成功",message:t.userName+"，欢迎来到ReViveLand!",type:"success"}),t.$router.push("/main")):"no user"===t.responseInfo.result?t.$notify.error({title:"用户名或密码错误",message:"用户名或密码错误，请重新输入。"}):t.$notify.error({title:"系统异常",message:t.responseInfo.result+"，请联系管理员"})):console.log("请求失败，响应状态码为："+e.status)}}}},mounted:function(){}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outer_box"},[s("div",{staticClass:"filterImg"}),t._v(" "),s("div",{staticClass:"login_box"},[t._m(0),t._v(" "),s("p",[s("el-input",{staticClass:"loginInput",attrs:{type:"text",placeholder:"用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),t._v(" "),s("p",[s("el-input",{staticClass:"loginInput",attrs:{type:"password",placeholder:"登录密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("button",{staticClass:"loginButton logIn_btn",on:{click:t.Login}},[t._v("登录")]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{attrs:{src:s("vZzi"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("立即注册")]),e("span",[this._v("忘记密码")])])}]};var _=s("owSs")(f,g,!1,function(t){s("bvUP")},"data-v-db48cb7c",null).exports,x={name:"HelloWorld",data:function(){return{msg:"This is Main.vue",activeIndex:"1"}},methods:{handleSelect:function(t,e){"1"===t?"/main/data_sync"!=this.$router.history.current.path&&this.$router.push("/main/data_sync"):"2"===t?"/main/advice"!=this.$router.history.current.path&&this.$router.push("/main/advice"):"3"===t?"/main/user_info"!=this.$router.history.current.path&&this.$router.push("/main/user_info"):console.log("WRONG!")}},mounted:function(){"/main/data_sync"!=this.$router.history.current.path&&this.$router.push("/main/data_sync")}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainBox"},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"1"}},[t._v("数据同步")]),t._v(" "),s("el-menu-item",{attrs:{index:"2"}},[t._v("健康建议")]),t._v(" "),s("el-menu-item",{attrs:{index:"3"}},[t._v("我的信息")])],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var y=s("owSs")(x,C,!1,function(t){s("Z5AM")},"data-v-3838d7d0",null).exports,$={name:"HelloWorld",data:function(){return{msg:"This is data_sync.vue",reqUrl:this.$store.state.serverAddr+"/dataSync",fileList:[],userInfo:{uuid:this.$store.state.uuid},fileCount:0}},methods:{submitUpload:function(){if(4!=this.$refs.upload.uploadFiles.length)this.$notify({title:"不符合上传规范",message:"请上传规定的四个文件进行分析",type:"warning"});else{var t=!1,e=!1,s=!1,a=!1,n=this.$refs.upload.uploadFiles;console.log(n);for(var i=0;i<n.length;i++)console.log("正在判断第"+(i+1)+"个文件，文件名称："+n[i].name+"，文件大小"+n[i].size),"Activities-walk.csv"==n[i].name&&0!=n[i].size?(t=!0,this.fileCount++):"Activities-run.csv"==n[i].name&&0!=n[i].size?(e=!0,this.fileCount++):"Activities-breath.csv"==n[i].name&&0!=n[i].size?(s=!0,this.fileCount++):"睡眠.csv"==n[i].name&&0!=n[i].size?(a=!0,this.fileCount++):console.log("执行到else");t&&e&&s&&a?(console.log("上传分析中，请稍后..."),this.$refs.upload.submit()):this.$notify({title:"不符合上传规范",message:"文件名称错误或文件大小为0",type:"warning"})}},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleSuccess:function(t,e,s){this.$message("已上传至服务器，正在分析中，请稍等一会儿~"),"fail"===t.result?this.$message({message:t.info,type:"warning"}):"success"===t.result&&"finish analysis"===t.info?this.$message({message:"分析完成！新增树"+t.treeNum+"颗，新增动物"+t.animalNum+"个",type:"success"}):"success"===t.result?this.$message({message:"分析完成！",type:"success"}):""==t||this.$message.error("系统异常，请联系管理员(200003)"),console.log("当前filecount为"+this.fileCount),0==--this.fileCount&&this.$refs.upload.clearFiles()}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dataSyncBox"},[s("div",{staticClass:"dataSyncInnerBox"},[t._m(0),t._v(" "),s("el-card",{staticClass:"dataUploadBox"},[s("el-upload",{ref:"upload",staticClass:"uploadBox",attrs:{action:t.reqUrl,multiple:"",drag:"","on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList,"auto-upload":!1,data:t.userInfo}},[s("div",{staticClass:"inUploadDragger"},[s("i",{staticClass:"el-icon-upload"})]),t._v(" "),s("div",{staticClass:"inUploadDragger"},[t._v("\n          将文件拖到此处，或\n          "),s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1),t._v(" "),s("div",{staticClass:"uploadButtonBox",attrs:{slot:"tip"},slot:"tip"},[s("div",[t._v("\n            只能上传csv文件，且不超过500kb\n          ")]),t._v(" "),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")])],1)])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dataUploadTips"},[e("p",[this._v("\n        不知道如何上传文件？👉"),e("a",{attrs:{href:"../../../static/assistant.html",target:"_blank"}},[this._v("点我查看上传方法")]),this._v("👈\n      ")])])}]};var S=s("owSs")($,b,!1,function(t){s("WbTk")},"data-v-6bd6b738",null).exports,w={name:"HelloWorld",data:function(){return{msg:"This is advice.vue",exerciseStatus:"",sleepStatus:"",userName:"",getUserName:!1,advices:[{info:"每一个不曾起舞的日子，都是对生命的辜负。\n——尼采"},{info:"生活最佳状态是冷冷清清地风风火火。\n——木心"},{info:"在我年轻的时候，曾以为金钱是世界上最重要的东西。现在我老了，才知道的确如此。\n——王尔德"},{info:"保持身体健康的唯一办法，就是吃点你不想吃的，喝点你不想喝的，以及做点你不愿做的事情。\n——马克·吐温"},{info:"像深海中的鱼族，若不自燃，便只有漆黑一片。"},{info:"我拥向宇宙吹来的风 与夏夜相逢 是八月盛景 是清寂长生"},{info:"并不可否认，生活磨掉了我们一部分的勇气和温柔，但我也相信，因为我们还很年轻，所以失去的还会长出来，而新的部分将闪闪发亮。"},{info:"正能量不是没心没肺，不是强颜欢笑，不是弄脏别人来显得干净。而是泪流满面怀抱的善良，是孤身一人前进的信仰，是破碎以后重建的勇气。"},{info:"没有那么多天赋异禀，优秀的人总是努力翻山越岭."},{info:"熬得住就出众，熬不住就出局，只有咬牙死犟，才能乘风破浪。我才不要弯道超车，我要甩的他们连尾灯都看不见。"},{info:"要相信，所有的不美好都是为了迎接美好，所有的困难都会为努力让道。 \n—简蔓《巧克力色微凉青春》"},{info:"大路走尽还有数不尽的小路，只要不停地走就有数不尽的风光。"}]}},methods:{shuffleSelf:function(t,e){var s=-1,a=t.length,n=a-1;for(e=void 0===e?a:e;++s<e;){var i=s+Math.floor(Math.random()*(n-s+1)),r=t[i];t[i]=t[s],t[s]=r}return t.length=e,t}},mounted:function(){var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.9)"});setTimeout(function(){t.close()},2e3);var e=this;this.$http.post(this.$store.state.serverAddr+"/advice",{uuid:this.$store.state.uuid}).then(function(t){"success"===t.data.result?(e.userName=t.data.userName,e.exerciseStatus=t.data.exerciseStatus,e.sleepStatus=t.data.sleepStatus,e.advices=t.data.advices,e.getUserName=!0):"fail"===t.data.result?e.$message({message:"登陆已失效，请重新登录",type:"warning"}):e.$message.error("系统错误，请联系管理员(330002)")}).catch(function(t){e.$message.error("系统错误，请联系管理员(340002)")})}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adviceOuterBox"},[s("div",{staticClass:"header"},[t.getUserName&&""===t.exerciseStatus&&""===t.sleepStatus?s("h1",[t._v("\n      "+t._s(t.userName)+"，当前并没有分析出您最近的状态，请多多上传您的健康数据到ReViveLand吧！\n    ")]):t.getUserName&&"ENOUGH"===t.exerciseStatus&&"ENOUGH"===t.sleepStatus?s("h1",[t._v("\n      "+t._s(t.userName)+"，最近的生活状态很不错哦~有空来ReViveLand玩！\n    ")]):t.getUserName&&"ENOUGH"===t.exerciseStatus&&"LACK"===t.sleepStatus?s("h1",[t._v("\n      "+t._s(t.userName)+"，最近的睡眠并不是很好呢。是太累了吗？下面有一些建议：\n    ")]):t.getUserName&&"LACK"===t.exerciseStatus&&"ENOUGH"===t.sleepStatus?s("h1",[t._v("\n      "+t._s(t.userName)+"，最近缺乏锻炼哦，身体是革命的本钱！下面提供了一些建议：\n    ")]):t.getUserName&&"LACK"===t.exerciseStatus&&"LACK"===t.sleepStatus?s("h1",[t._v("\n      "+t._s(t.userName)+"，最近遇到什么烦心事了吗？ReViveLand为您提供了以下建议:\n    ")]):s("h1",[t._v("\n      哎呀，出错了，果然管理员的代码水平还是不够呀，请联系管理员处理。\n    ")])]),t._v(" "),s("div",{staticClass:"tipsOutterBox"},[s("div",{staticClass:"tipsInnerBox"},t._l(t.advices,function(e,a){return s("div",{key:a,staticClass:"cardsOutterBox"},[s("el-card",{staticClass:"cards",attrs:{shadow:"hover"},domProps:{innerHTML:t._s(e.info)}})],1)}),0)])])},staticRenderFns:[]};var T=s("owSs")(w,N,!1,function(t){s("TOgT")},"data-v-6b8c243f",null).exports,k={name:"HelloWorld",data:function(){return{msg:"This is user_info.vue",getUserName:!1,userName:"admin",treeNum:"",animalNum:"",treeScore:"",animalScore:"",walkingDistChartOptions:{title:{text:"walking Distance"},tooltip:{},legend:{data:["distances"],right:"5%",top:"5%"},xAxis:{data:["02-08","02-09","02-10","02-11","02-12","02-13","02-14"]},yAxis:{},series:[{name:"distances",type:"bar",data:[2.08,2.09,3.22,7.88,7.87,10.28],label:{show:!0,position:"top",textStyle:{fontSize:10}}}]},exerciseTimeChartOptions:{title:{text:"Exercise Time"},tooltip:{},legend:{data:["walking","running","breath exercise"],orient:"vertical",right:"2%",top:"1%"},xAxis:{data:["02-08","02-09","02-10","02-11","02-12","02-13","02-14"]},yAxis:{},series:[{name:"walking",type:"line",data:[49,24,33,50,47,48],label:{show:!0,position:"bottom",textStyle:{fontSize:10}}},{name:"running",type:"line",data:[5,4,0,10,7,8],label:{show:!0,position:"bottom",textStyle:{fontSize:10}}},{name:"breath exercise",type:"line",data:[3,0,6,0,3,6],label:{show:!0,position:"top",textStyle:{fontSize:10}}}]},sleepingTimeChartOptions:{title:{text:"Sleeping Time"},tooltip:{valueFormatter:function(t){return Math.floor(t/60)+"h "+t%60+"min"}},legend:{data:["time"],right:"5%",top:"5%"},xAxis:{data:["02-08","02-09","02-10","02-11","02-12","02-13","02-14"]},yAxis:{},series:[{name:"time",type:"bar",data:[360,420,480,420,360,300],label:{show:!0,position:"top",textStyle:{fontSize:10}}}]}}},methods:{},mounted:function(){var t=this,e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.9)"});if(setTimeout(function(){e.close()},2e3),""!=this.$store.state.uuid){var s=this;this.$http.post(this.$store.state.serverAddr+"/userInfo",{uuid:s.$store.state.uuid}).then(function(e){if("success"===e.data.result){s.userName=e.data.userName,s.treeNum=e.data.treeNum,s.animalNum=e.data.animalNum,s.treeScore=e.data.treeScore,s.animalScore=e.data.animalScore,s.getUserName=!0,s.walkingDistChartOptions.xAxis.data=e.data.dateData,s.exerciseTimeChartOptions.xAxis.data=e.data.dateData,s.sleepingTimeChartOptions.xAxis.data=e.data.dateData,s.walkingDistChartOptions.series[0].data=e.data.distData,s.exerciseTimeChartOptions.series[0].data=e.data.walkingTime,s.exerciseTimeChartOptions.series[1].data=e.data.runningTime,s.exerciseTimeChartOptions.series[2].data=e.data.breathExTime,s.sleepingTimeChartOptions.series[0].data=e.data.sleepingTime;var a=t.$echarts.init(document.getElementById("walkingDistChart")),n=t.$echarts.init(document.getElementById("exerciseTimeChart")),i=t.$echarts.init(document.getElementById("sleepingTimeChart"));a.setOption(t.walkingDistChartOptions),n.setOption(t.exerciseTimeChartOptions),i.setOption(t.sleepingTimeChartOptions)}else t.$message.error("系统错误，请联系管理员("+e.data.info+")")}).catch(function(e){t.$message.error("系统错误，请联系管理员(90076)")})}else this.$message({message:"登录已经过期，请重新登录",type:"warning"})}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userInfoBox"},[s("div",{staticClass:"topBox"},[s("div",{staticClass:"infoOutterBox"},[s("div",{staticClass:"userAvatar"},[s("el-avatar",{attrs:{size:80}},[t._v(t._s(t.getUserName?t.userName:"未知用户"))])],1),t._v(" "),s("div",{staticClass:"gameInfo"},[s("p",[t._v("   树："+t._s(t.getUserName?t.treeNum:"null"))]),t._v(" "),s("p",[t._v("  动物："+t._s(t.getUserName?t.animalNum:"null"))]),t._v(" "),s("p",[t._v(" 树积分："+t._s(t.getUserName?t.treeScore:"null"))]),t._v(" "),s("p",[t._v("动物积分："+t._s(t.getUserName?t.animalScore:"null"))])])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottomBox"},[e("div",{staticClass:"chartsBox"},[e("div",{staticClass:"charts",attrs:{id:"walkingDistChart"}}),this._v(" "),e("div",{staticClass:"charts",attrs:{id:"exerciseTimeChart"}}),this._v(" "),e("div",{staticClass:"charts",attrs:{id:"sleepingTimeChart"}})])])}]};var O=s("owSs")(k,A,!1,function(t){s("48c7")},"data-v-0bfdc1fe",null).exports;a.default.use(r.a);var U=new r.a({routes:[{path:"/",name:"HelloWorld",component:l,redirect:"/login"},{path:"/first",name:"First",component:d},{path:"/second",name:"Second",component:h},{path:"/login",name:"Login",component:_},{path:"/main",name:"main",component:y,children:[{path:"data_sync",name:"DataSync",component:S},{path:"advice",name:"advice",component:T},{path:"user_info",name:"UserInfo",component:O}]}]}),E=s("F105"),I=s.n(E),L=(s("EdF/"),s("u2iS")),B=s("y5se"),R={};a.default.use(B.a);var F=new B.a.Store({state:{testPara:"null",serverAddr:"http://8.130.26.63:8080/ReViveLand",uuid:""},actions:{TestAction:function(t,e){t.commit("changeTest",e)}},mutations:{changeTest:function(t,e){t.testPara=e},RecordUUID:function(t,e){t.uuid=e}},getters:R}),z=s("o6uF");a.default.use(I.a),a.default.prototype.$echarts=L,a.default.config.productionTip=!1,a.default.prototype.$http=z.a,new a.default({el:"#app",store:F,router:U,components:{App:i},template:"<App/>"})},NzLu:function(t,e){},TOgT:function(t,e){},WbTk:function(t,e){},Z5AM:function(t,e){},bvUP:function(t,e){},mABa:function(t,e){},ov5j:function(t,e){},vZzi:function(t,e,s){t.exports=s.p+"static/img/Island.bd7e136.png"}},["NHnr"]);
//# sourceMappingURL=app.c4375656b915ab391102.js.map