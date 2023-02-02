"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{5390:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return h}});var s=r(5861),c=r(9439),o=r(7757),u=r.n(o),v=r(2791),_=r(1087),l=r(7689),p={movie__wrap:"single-movie-page_movie__wrap__rKKMv",info__wrap:"single-movie-page_info__wrap__Z4l+6",movie__title:"single-movie-page_movie__title__G+0mr",movie__score:"single-movie-page_movie__score__N2H9n",movie__overviewTitle:"single-movie-page_movie__overviewTitle__22NF9",movie__overviewText:"single-movie-page_movie__overviewText__cHPXl",movie__genresTitle:"single-movie-page_movie__genresTitle__wION5",movie__genresList:"single-movie-page_movie__genresList__gI0jc",cast:"single-movie-page_cast__jPxDK",extraPages__list:"single-movie-page_extraPages__list__JcduY",active:"single-movie-page_active__omfq7"},m=r(3749),f=r(184),g=function(e){return e.isActive?"".concat(p.cast," ").concat(p.active):p.cast},h=function(){var e,t=(0,v.useState)({}),r=(0,c.Z)(t,2),n=r[0],a=r[1],o=(0,v.useState)(!1),h=(0,c.Z)(o,2),d=h[0],w=h[1],x=(0,v.useState)(null),j=(0,c.Z)(x,2),b=j[0],O=j[1],y=(0,l.UO)().id,k=(0,l.s0)(),N=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/movies";(0,v.useEffect)((function(){w(!0);var e=function(){var e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Yp)(y);case 3:t=e.sent,a(i({},t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(e.t0.message);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var P=n.poster_path,Z=n.original_title,T=n.release_date,L=n.vote_average,D=n.overview,S=n.genres,C=n.homepage,H="",E="";return Object.keys(n).length&&(H=S.map((function(e,t){var r=e.name;return t===S.length-1?"".concat(r,"."):"".concat(r,", ")})),E=T.slice(0,4)),(0,f.jsxs)("div",{className:"container",children:[d&&(0,f.jsx)("p",{children:"...Loading"}),b&&(0,f.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),(0,f.jsx)("button",{type:"button",onClick:function(){return k(N)},className:"btn",children:"Go back"}),(0,f.jsxs)("div",{className:p.movie__wrap,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(P),alt:"",width:"250"}),(0,f.jsxs)("div",{className:p.info__wrap,children:[(0,f.jsx)("h2",{className:p.movie__title,children:(0,f.jsxs)("a",{href:C,target:"_black",children:[Z," (",E,")"]})}),(0,f.jsxs)("p",{className:p.movie__score,children:["User score: ",L]}),(0,f.jsx)("h3",{className:p.movie__overviewTitle,children:"Overview"}),(0,f.jsx)("p",{className:p.movie__overviewText,children:D}),(0,f.jsx)("h3",{className:p.movie__genresTitle,children:"Genres"}),(0,f.jsx)("p",{className:p.movie__genresList,children:H})]})]}),(0,f.jsxs)("ul",{className:p.extraPages__list,children:[(0,f.jsx)("li",{className:p.extraPages__item,children:(0,f.jsx)(_.OL,{state:{from:N},to:"/movies/".concat(y,"/credits"),className:g,children:"Cast"})}),(0,f.jsx)("li",{className:p.extraPages__item,children:(0,f.jsx)(_.OL,{state:{from:N},to:"/movies/".concat(y,"/reviews"),className:g,children:"Reviews"})})]}),(0,f.jsx)(l.j3,{})]})}},3749:function(e,t,r){r.d(t,{Cr:function(){return v},Df:function(){return c},Yp:function(){return o},_$:function(){return u},gH:function(){return _}});var n=r(5861),a=r(7757),i=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3c291d17985a5640676e8849c9a91fc7"}}),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/week",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=390.a8af3f8e.chunk.js.map