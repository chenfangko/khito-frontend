(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fee86ba"],{"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("2909"),s=n("ade3"),c=(n("368e"),n("480e")),o=n("4ad4"),r=n("b848"),l=n("75eb"),d=n("e707"),u=n("e4d3"),h=n("21be"),f=n("f2e7"),p=n("a293"),v=n("58df"),m=n("d9bd"),g=n("80d2"),b=Object(v["a"])(o["a"],r["a"],l["a"],d["a"],u["a"],h["a"],f["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1fd3":function(t,e,n){"use strict";var i=n("e3f1"),a=n.n(i);a.a},"368e":function(t,e,n){},"38e2":function(t,e,n){"use strict";var i=n("5613"),a=n.n(i);a.a},"3e14":function(t,e,n){"use strict";var i=n("4bf3"),a=n.n(i);a.a},"4bf3":function(t,e,n){},5613:function(t,e,n){},"841c":function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),s=n("1d80"),c=n("129f"),o=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=a(t),r=String(this),l=s.lastIndex;c(l,0)||(s.lastIndex=0);var d=o(s,r);return c(s.lastIndex,l)||(s.lastIndex=l),null===d?-1:d.index}]}))},d5de:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.dialog,width:"450"},on:{input:function(e){return t.$emit("update:dialog",e)},"click:outside":function(){return t.isActive=!1}}},[n("v-card",{staticClass:"rounded-xl pa-3"},[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",[n("v-card-title",{staticClass:"title pa-0",domProps:{textContent:t._s(""+t.placeInfo.name)}}),t.placeInfo.phone?n("v-card-text",{staticClass:"text pa-0",domProps:{textContent:t._s("電話 : "+t.placeInfo.phone)}}):t._e(),n("v-card-text",{staticClass:"text pa-0",domProps:{textContent:t._s("地址 : "+t.placeInfo.address)}})],1),n("v-col",{attrs:{cols:"auto"}},[n("v-avatar",{attrs:{size:"125",rounded:"xl"}},[n("v-img",{attrs:{src:t.placeInfo.photo_url?t.placeInfo.photo_url:"https://imgs.gvm.com.tw/upload/gallery/20190212/55927_01.jpg"}})],1)],1)],1),n("v-row",[n("v-col",[n("v-card-actions",{staticClass:"w-100 pa-0"},[n("v-btn",{staticClass:"white--text",attrs:{width:"100%",color:"main-color"},on:{click:t.btnClickHandler}},[t._v(t._s(t.isActive?"標籤確認，將地點收進口袋":"為地點加標籤"))])],1)],1)],1),t.isActive&&t.loggedIn?n("v-row",[n("v-col",{staticClass:"py-0"},[n("TagSearchBox",{staticClass:"middle",attrs:{SelectedTags:t.SelectedTags}})],1)],1):t._e(),t.isActive&&t.loggedIn?n("v-row",[n("v-col",{staticClass:"py-0"},[n("TagSelector",{staticClass:"bottom",on:{"add-tag":function(e){return t.SelectedTags.push(e)}}})],1)],1):t._e()],1)],1)],1)},a=[],s=n("5530"),c=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height rounded-lg align-content-start w-100"},[n("v-row",{staticClass:"px-3"},[n("v-autocomplete",{attrs:{items:t.items,"search-input":t.search,loading:t.isLoading,"background-color":"#fcfcfc",dense:"",flat:"","hide-no-data":"","hide-selected":"","item-text":"name",solo:"",label:"輸入標籤，新增進篩選器","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},input:t.inputHandler},scopedSlots:t._u([{key:"append",fn:function(){return[n("svg",{attrs:{width:"20px",height:"20px"}},[n("use",{attrs:{"xlink:href":"#search"}})])]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),n("v-row",{staticClass:"px-3 chipBox"},[n("div",{staticClass:"kingTags mt-3"},[n("div",{staticClass:"d-flex justify-space-around align-center w-100"},t._l(t.GetterKingTag,(function(e,i){return n("v-chip",{key:i,staticClass:"px-5 py-3",attrs:{color:e.isActive?"active-chip":"unactive-chip","text-color":e.isActive?"blue":"grey darken-1"},on:{click:function(n){return t.kingChipClickHandler(e)}}},[n("svg",{staticClass:"mr-2"},[n("use",{attrs:{"xlink:href":t.icon(i)}})]),n("span",[t._v(t._s(e.name))])])})),1)]),n("v-chip-group",{staticClass:"commonTags mt-1",attrs:{column:""}},t._l(t.my_tags,(function(e,i){return n("v-chip",{key:i,attrs:{color:"#e7c99e",close:""},on:{"click:close":function(n){return t.chipCloseHandler(e,i)}}},[t._v(t._s(e.name))])})),1)],1)],1)},r=[],l=(n("99af"),n("4de4"),n("caad"),n("c975"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("841c"),n("ddb0"),{data:function(){return{model:null,nameLimit:10,entries:[],search:null,isLoading:!1,kingTags:[{id:101,type:1,name:"想去"},{id:102,type:1,name:"喜歡"},{id:103,type:1,name:"暫存"}]}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["c"])("place",["placeInfo"])),Object(c["c"])("place",["my_tags","king_tags","place_tags"])),Object(c["b"])("place",["GetterKingTag"])),{},{fields:function(){var t=this;return this.model?Object.keys(this.model).map((function(e){return{key:e,value:t.model[e]||"n/a"}})):[]},items:function(){var t=this;return this.entries.map((function(e){var n=e.name.length>t.nameLimit?e.name.slice(0,t.nameLimit)+"...":e.name;return Object.assign({},e,{name:n})}))}}),watch:{search:function(t){var e=this;null!==t&&(this.isLoading||(this.isLoading=!0,this.$store.dispatch("user/searchTag",{place_id:this.placeInfo.place_id,text:t}).then((function(n){if(e.entries=n.data.data.filter((function(t){return!e.my_tags.concat(e.kingTags).map((function(t){return t.id})).includes(t.id)})),0==n.data.data.length&&""==!t){var i={id:-1,type:2,name:e.search};e.entries.unshift(i)}n.data.data[0].name,e.search})).catch((function(){})).finally((function(){return e.isLoading=!1}))))}},methods:{chipCloseHandler:function(t,e){this.$store.commit("place/DELETE_MY_TAG",e),this.$store.commit("place/ADD_PLACE_TAG",t)},kingChipClickHandler:function(t){var e=t.id,n=t.name,i=t.type,a=t.isActive;a?this.$store.commit("place/DELETE_KING_TAG",{id:e,name:n,type:i}):this.$store.commit("place/ADD_KING_TAG",{id:e,name:n,type:i})},inputHandler:function(t){this.place_tags.map((function(t){return t.name})).includes(t.name)&&this.$store.commit("place/DELETE_PLACE_TAG",this.place_tags.map((function(t){return t.name})).indexOf(t.name)),this.$store.commit("place/ADD_MY_TAG",t);var e=this.entries.map((function(t){return t.id})).indexOf(t.id);this.entries.splice(e,1)},icon:function(t){return 0==t?"#want":1==t?"#love":"#tempsave"}}}),d=l,u=(n("3e14"),n("2877")),h=n("6544"),f=n.n(h),p=n("c6a6"),v=n("cc20"),m=n("ef9a"),g=n("a523"),b=n("0fd9"),C=Object(u["a"])(d,o,r,!1,null,"61467a15",null),_=C.exports;f()(C,{VAutocomplete:p["a"],VChip:v["a"],VChipGroup:m["a"],VContainer:g["a"],VRow:b["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-chip-group",{attrs:{column:""}},t._l(t.place_tags,(function(e,i){return n("v-chip",{key:i,staticClass:"grey--text text--darken-1 mb-3 mr-3 rounded-lg",attrs:{color:"#e7c99e"},on:{click:function(n){return t.chipClickHandler(e,i)}}},[t._v(t._s(e.name))])})),1)],1)},y=[],k={data:function(){return{tab:null}},props:{tags:{type:Object}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("common",["hotTags"])),Object(c["c"])("place",["place_tags"])),methods:{chipClickHandler:function(t,e){this.$store.commit("place/ADD_MY_TAG",t),this.$store.commit("place/DELETE_PLACE_TAG",e)}}},w=k,A=(n("38e2"),Object(u["a"])(w,x,y,!1,null,"e53551b4",null)),O=A.exports;f()(A,{VChip:v["a"],VChipGroup:m["a"],VContainer:g["a"]});var T={props:{dialog:{type:Boolean},setActive:{type:Boolean}},data:function(){return{SelectedTags:[]}},components:{TagSearchBox:_,TagSelector:O},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["c"])("place",["placeInfo"])),Object(c["b"])("auth",["loggedIn"])),{},{isActive:function(){return 1==this.setActive||null==this.setActive}}),methods:{btnClickHandler:function(){this.isActive?(this.$store.dispatch("place/modifyPlaceTag"),this.$emit("update:dialog",!1)):this.setActive=!!this.loggedIn}}},j=T,$=(n("1fd3"),n("8212")),I=n("8336"),E=n("b0af"),S=n("99d9"),L=n("62ad"),V=n("169a"),B=n("adda"),D=Object(u["a"])(j,i,a,!1,null,"959fdc9c",null);e["a"]=D.exports;f()(D,{VAvatar:$["a"],VBtn:I["a"],VCard:E["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:L["a"],VContainer:g["a"],VDialog:V["a"],VImg:B["a"],VRow:b["a"]})},e3f1:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4fee86ba.622d5650.js.map