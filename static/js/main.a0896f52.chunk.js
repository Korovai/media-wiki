(this["webpackJsonpmedia-wiki"]=this["webpackJsonpmedia-wiki"]||[]).push([[0],{92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(0),i=n.n(r),a=n(11),s=n.n(a),o=n(14),l=n(44),d=n(74),u=n(16),j={foundArticles:[],selectArticle:{},selectedArticles:[],loading:!0},p="ON_LOADING_ARTICLES",b="ON_GET_ARTICLE",h="ON_ADD_FAVOURITES",O="ON_LOADING_SPINNER",f="ON_CLEAN_FOUND_ARTICLES",A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{foundArticles:t.list});case b:return Object(u.a)(Object(u.a)({},e),{},{selectArticle:t.item});case h:return Object(u.a)(Object(u.a)({},e),{},{selectedArticles:[].concat(Object(d.a)(e.selectedArticles),[e.selectArticle])});case O:return Object(u.a)(Object(u.a)({},e),{},{loading:!e.loading});case f:return Object(u.a)(Object(u.a)({},e),{},{foundArticles:[]});default:return e}},x=function(){return{type:"ON_CLEAN_FOUND_ARTICLES"}},m=Object(l.b)(A),v=n(42),g=n.n(v),N=n(59),_=n(69),w=function e(){var t=this;Object(_.a)(this,e),this._apiBase="https://en.wikipedia.org/w/api.php",this._apiAction="action=query&",this._apiList="list=search&",this._apiSrsearch="srsearch=",this._apiFormat="&format=json",this._apiCorsRequests="&origin=*",this.getResource=function(){var e=Object(N.a)(g.a.mark((function e(n){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase,"?").concat(t._apiAction).concat(t._apiList).concat(t._apiSrsearch).concat(n).concat(t._apiFormat).concat(t._apiCorsRequests));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t._apiBase,"?").concat(t._apiAction).concat(t._apiList).concat(t._apiSrsearch).concat(n).concat(t._apiFormat).concat(t._apiCorsRequests,", received ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getArticles=function(){var e=Object(N.a)(g.a.mark((function e(n){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(n);case 2:return c=e.sent,e.abrupt("return",c.query.search.map(t._transformArticles));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformArticles=function(e){return{title:e.title,wordcount:e.wordcount,timestamp:e.timestamp,snippet:e.snippet}}},S=n(71),y=n.n(S),L=n(148),C=n(149),I={onGetArticle:function(e){return{type:"ON_GET_ARTICLE",item:e}},onLoadingSpinner:function(){return{type:"ON_LOADING_SPINNER"}},onCleanFoundArticles:x},T=Object(o.b)((function(e){return{foundArticles:e.foundArticles}}),I)((function(e){var t=e.foundArticles,n=e.handeleLoadingArticles,r=e.onGetArticle,i=e.onLoadingSpinner,a=e.onCleanFoundArticles;return Object(c.jsx)(C.a,{onChange:function(e,n){var c=!!n&&t.find((function(e){return e.title===n}));c?(i(),r(c)):(i(),a())},id:"free-solo-demo",freeSolo:!0,options:t.map((function(e){return e.title})),renderInput:function(e){return Object(c.jsx)(L.a,Object(u.a)(Object(u.a)({onChange:n},e),{},{label:"search articles",margin:"normal",variant:"outlined"}))}})})),E=n(143),R=(n(92),{onAddFavourites:function(){return{type:"ON_ADD_FAVOURITES"}}}),F=Object(o.b)((function(e){return{selectArticle:e.selectArticle}}),R)((function(e){var t=e.selectArticle,n=e.onAddFavourites,r=t.title,i=t.wordcount,a=t.snippet;return Object(c.jsx)("div",{className:"wrSelectArticle",children:Object(c.jsxs)("div",{className:"selectArticle",children:[Object(c.jsx)("div",{className:"titleArticle",children:r}),Object(c.jsxs)("div",{className:"wordCountArticle",children:["word count: ",i]}),Object(c.jsx)("div",{className:"snippetArticle",children:a}),Object(c.jsx)(E.a,{onClick:n,className:"saveBtn",variant:"contained",color:"primary",disableElevation:!0,children:"Save"})]})})})),k=(n(93),function(){return Object(c.jsxs)("div",{className:"wrSpinner",children:[Object(c.jsx)("div",{className:"loadingioSpinner",children:Object(c.jsx)("div",{className:"ldio",children:Object(c.jsx)("div",{})})}),Object(c.jsx)("div",{className:"spinnerTitle",children:"loandig article"})]})}),D=(n(94),Object(o.b)((function(e){return{loading:e.loading}}))((function(e){var t=e.loading,n=e.handeleLoadingArticles;return Object(c.jsxs)("div",{className:"wrSearchArticles",children:[Object(c.jsxs)("div",{className:"searchArticleTitle",children:[Object(c.jsx)(y.a,{}),"Search article"]}),Object(c.jsx)(T,{handeleLoadingArticles:n}),t?Object(c.jsx)(k,{}):Object(c.jsx)(F,{})]})}))),B=n(73),G=n.n(B),q=n.p+"static/media/box.ce3ba373.svg",P=n(144),U=Object(P.a)((function(e){return{wrPicBox:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",userSelect:"none",textAlign:"center","& img":{width:"50px"}},stubText:{marginTop:"15px",fontWeight:"bold",color:"#3f51b5"}}})),z=function(){var e=U();return Object(c.jsxs)("div",{className:e.wrPicBox,children:[Object(c.jsx)("img",{src:q,alt:"add folder"}),Object(c.jsx)("div",{className:e.stubText,children:"No featured articles"})]})},J=n(75),V=n(150),W=n(147),H=n(145),M=n(146),Y=n(72),K=n.n(Y),Q=Object(P.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},accordionDetailsStyles:{borderTop:"1px solid #ffdc7c"},typographyStyles:{fontSize:"0.75rem !important"},wrFavoritesItem:{height:"305px",padding:"5px",overflowY:"scroll"},favoritesItem:{margin:"5px 0"}}})),X=Object(o.b)((function(e){return{selectedArticles:e.selectedArticles}}))((function(e){var t=e.selectedArticles,n=Q(),r=i.a.useState(!1),a=Object(J.a)(r,2),s=a[0],o=a[1];return Object(c.jsx)("div",{className:n.wrFavoritesItem,children:t.map((function(e,t){var r,i=e.title,a=e.snippet;return Object(c.jsx)("div",{className:n.favoritesItem,children:Object(c.jsxs)(V.a,{expanded:s==="panel".concat(t),onChange:(r="panel".concat(t),function(e,t){o(!!t&&r)}),children:[Object(c.jsx)(H.a,{expandIcon:Object(c.jsx)(K.a,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:Object(c.jsx)(M.a,{className:n.heading,children:i})}),Object(c.jsx)(W.a,{className:n.accordionDetailsStyles,children:Object(c.jsx)(M.a,{className:n.typographyStyles,children:a})})]})},t)}))})})),Z=(n(96),Object(o.b)((function(e){return{selectedArticles:e.selectedArticles}}))((function(e){var t=e.selectedArticles;return Object(c.jsxs)("div",{className:"wrFavorites",children:[Object(c.jsxs)("div",{className:"favoritesTitle",children:[Object(c.jsx)(G.a,{}),"Selected Articles"]}),0===t.length?Object(c.jsx)(z,{}):Object(c.jsx)(X,{})]})}))),$=(n(97),{onLoadingArticles:function(e){return{type:"ON_LOADING_ARTICLES",list:e}},onCleanFoundArticles:x}),ee=Object(o.b)(null,$)((function(e){var t=e.onLoadingArticles,n=e.onCleanFoundArticles,r=new w,i=function(e){console.log("Error loading data!")};return Object(c.jsxs)("div",{className:"wrApp",children:[Object(c.jsx)("div",{className:"appTitle",children:"MediaWiki"}),Object(c.jsxs)("div",{className:"wrColumn",children:[Object(c.jsx)(D,{handeleLoadingArticles:function(e){if(e.target.value){var c=e.target.value;r.getArticles(c).then((function(e){t(e)})).catch(i)}else n()}}),Object(c.jsx)(Z,{})]})]})}));n(98);s.a.render(Object(c.jsx)(o.a,{store:m,children:Object(c.jsx)(ee,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.a0896f52.chunk.js.map