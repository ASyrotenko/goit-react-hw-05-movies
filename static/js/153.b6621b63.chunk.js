"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{4868:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1087),a=r(7689),c=r(5166),u="movie-list_list__x5AH+",s="movie-list_movieLink__6CRvY",i="movie-list_movieImg__sNZxs",o="movie-list_movieTitle__9AfWX",f=r(184),p=function(e){var t=e.items,r=(0,a.TH)(),p=t.map((function(e){var t=e.id,a=e.title,u=e.poster_path;return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(n.rU,{state:{from:r},to:"/movies/".concat(t),children:[(0,f.jsx)("img",{src:u?"https://image.tmdb.org/t/p/original/".concat(u):c,alt:a,className:i}),(0,f.jsx)("p",{className:o,children:a})]})},t)}));return(0,f.jsx)("ul",{className:u,children:p})}},8153:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(3433),a=r(5861),c=r(9439),u=r(7757),s=r.n(u),i=r(2791),o=r(4868),f=r(3749),p=r(5667).NY,l=function(e){if(e>1){var t=document.querySelector("li").firstElementChild.getBoundingClientRect().height;p.scrollMore(10*t)}},m="movies_loadMoreBtn__0M6To",v=r(184),d=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],u=t[1],p=(0,i.useState)(1),d=(0,c.Z)(p,2),h=d[0],x=d[1],g=(0,i.useState)(!1),_=(0,c.Z)(g,2),b=_[0],k=_[1],w=(0,i.useState)(null),Z=(0,c.Z)(w,2),j=Z[0],y=Z[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,(0,f.Df)(h);case 4:if(t=e.sent,1!==h){e.next=7;break}return e.abrupt("return",u((0,n.Z)(t.results)));case 7:u((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t.results))})),l(h),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),y(e.t0.message);case 14:return e.prev=14,k(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]);return(0,v.jsxs)(v.Fragment,{children:[b&&(0,v.jsx)("p",{children:"...Loading"}),j&&(0,v.jsx)("p",{children:"Error"}),(0,v.jsx)(o.Z,{items:r}),(0,v.jsx)("button",{type:"button",onClick:function(){x((function(e){return e+1}))},className:"btn ".concat(m),children:"Load more"})]})},h="home-page_homePAgeTitle__CUGbI",x=function(){return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h2",{className:h,children:"Trending today"}),(0,v.jsx)(d,{})]})}},3749:function(e,t,r){r.d(t,{Cr:function(){return f},Df:function(){return s},Yp:function(){return i},_$:function(){return o},gH:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),u=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3c291d17985a5640676e8849c9a91fc7"}}),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/week",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5166:function(e,t,r){e.exports=r.p+"static/media/default-movie-img.08ba4a3915c0ff049252.jpg"}}]);
//# sourceMappingURL=153.b6621b63.chunk.js.map