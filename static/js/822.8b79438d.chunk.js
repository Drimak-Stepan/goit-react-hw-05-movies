"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[822],{5822:function(r,n,e){e.r(n),e.d(n,{default:function(){return v}});var t=e(1413),a=e(5861),u=e(9439),c=e(4687),s=e.n(c),i=e(2791),o=e(7689),f=e(232),p=e(184),v=function(){var r=(0,i.useState)({items:[],loading:!1,error:null}),n=(0,u.Z)(r,2),e=n[0],c=n[1],v=(0,o.UO)().movieId;(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!0,error:null})})),r.next=4,(0,f.tx)(v);case 4:n=r.sent,c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{items:n})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),c((function(n){return(0,t.Z)((0,t.Z)({},n),{},{error:r.t0})}));case 11:return r.prev=11,c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[v]);var h=e.items,d=h.map((function(r){var n=r.id,e=r.author_details,t=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",e.username]}),(0,p.jsx)("p",{children:t})]},n)}));return(0,p.jsx)(p.Fragment,{children:h.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Reviews"}),(0,p.jsx)("ul",{children:d})]}):(0,p.jsx)("h3",{children:"We don`t have any reviews for this movie"})})}},232:function(r,n,e){e.d(n,{JS:function(){return s},TP:function(){return i},Wd:function(){return o},qF:function(){return p},tx:function(){return f}});var t=e(5861),a=e(4687),u=e.n(a),c=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a3e9617806211f5c17cdc3e47a9d3960"}}),s=function(){var r=(0,t.Z)(u().mark((function r(){var n,e,t,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,r.next=3,c.get("/trending/movie/day",{params:{page:n}});case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(n));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t.cast);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:n}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=822.8b79438d.chunk.js.map