"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[235],{2440:function(n,r,e){e.d(r,{Z:function(){return f}});var t,a=e(7689),u=e(168),i=e(1087),c=(0,e(7402).Z)(i.rU)(t||(t=(0,u.Z)(["\n  color: inherit;\n  font-weight: 600;\n"]))),o=e(184),s=function(n){var r=n.items,e=(0,a.TH)(),t=r.map((function(n){var r=n.id,t=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(c,{state:{from:e},to:"/movies/".concat(r),children:t})},r)}));return(0,o.jsx)("ol",{children:t})},f=s;s.defaultProps={items:[]}},2235:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t,a,u,i=e(1413),c=e(5861),o=e(9439),s=e(4687),f=e.n(s),p=e(2791),l=e(1087),d=e(4942),v=e(168),h=e(7402),m=h.Z.form(t||(t=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin: 10px 10px 0 0;\n"]))),x=h.Z.input(a||(a=(0,v.Z)(["\n  padding: 8px;\n  border-radius: 4px;\n  font: inherit;\n  outline-color: orangered;\n"]))),Z=h.Z.button(u||(u=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px;\n  margin-left: 10px;\n  border-radius: 4px;\n  font: inherit;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #3f51b5;\n  color: #fff;\n  border: 0;\n\n  :hover,\n  :focus {\n    background-color: orangered;\n  }\n"]))),g=e(184),b=function(n){var r=n.onSubmit,e=(0,p.useState)({search:""}),t=(0,o.Z)(e,2),a=t[0],u=t[1];return(0,g.jsxs)(m,{onSubmit:function(n){n.preventDefault(),r((0,i.Z)({},a)),u({search:""})},children:[(0,g.jsx)(x,{name:"search",value:a.search,onChange:function(n){var r=n.target,e=r.name,t=r.value;u((0,i.Z)((0,i.Z)({},a),{},(0,d.Z)({},e,t)))},placeholder:"Enter name of movie",required:!0}),(0,g.jsx)(Z,{children:"Search"})]})},w=e(2440),k=e(232),y=function(){var n=(0,p.useState)({items:[],loading:!1,error:null}),r=(0,o.Z)(n,2),e=r[0],t=r[1],a=(0,l.lr)(),u=(0,o.Z)(a,2),s=u[0],d=u[1],v=s.get("search");(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!0})})),n.next=4,(0,k.qF)(v);case 4:r=n.sent,t((function(n){return(0,i.Z)((0,i.Z)({},n),{},{items:r})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t((function(r){return(0,i.Z)((0,i.Z)({},r),{},{error:n.t0})}));case 11:return n.prev=11,t((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();v&&n()}),[v]);var h=e.items;return(0,g.jsxs)("div",{children:[(0,g.jsx)(b,{onSubmit:function(n){var r=n.search;d({search:r})}}),h.length>0&&(0,g.jsx)(w.Z,{items:h})]})}},232:function(n,r,e){e.d(r,{JS:function(){return c},TP:function(){return o},Wd:function(){return s},qF:function(){return p},tx:function(){return f}});var t=e(5861),a=e(4687),u=e.n(a),i=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a3e9617806211f5c17cdc3e47a9d3960"}}),c=function(){var n=(0,t.Z)(u().mark((function n(){var r,e,t,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,i.get("/trending/movie/day",{params:{page:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie",{params:{query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=235.e5271e9c.chunk.js.map