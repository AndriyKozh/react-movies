"use strict";(self.webpackChunkreact_movie=self.webpackChunkreact_movie||[]).push([[838],{963:function(n,t,r){r.d(t,{CB:function(){return p},Df:function(){return o},EW:function(){return f},IQ:function(){return h},iN:function(){return v}});var e=r(861),a=r(757),i=r.n(a),u=r(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="68dd2d07f1b8d9799366e4d9411e689b";function o(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/movie/day?api_key=".concat(c),n.next=3,u.ZP.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"?api_key=").concat(c),n.next=3,u.ZP.get(r);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"/reviews?api_key=").concat(c),n.next=3,u.ZP.get(r);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"/credits?api_key=").concat(c),n.next=3,u.ZP.get(r);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/search/movie?api_key=".concat(c,"&query=").concat(t),n.next=3,u.ZP.get(r);case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},343:function(n,t,r){r.d(t,{Z:function(){return s}});var e,a=r(731),i=r(689),u=r(168),c=r(444).ZP.div(e||(e=(0,u.Z)(["\n  margin-left: 20px;\n\n  & div {\n    display: flex;\n    align-items: center;\n    margin-bottom: 5px;\n    color: blue;\n\n    & span {\n      display: inline-block;\n      width: 5px;\n      height: 5px;\n      border: 1px solid #000;\n      background-color: red;\n      margin-right: 5px;\n      border-radius: 50%;\n      margin-bottom: 5px;\n      border: none;\n    }\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),o=r(184);var s=function(n){var t=n.data,r=(0,i.TH)();return(0,o.jsx)(c,{children:t.map((function(n){return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{}),(0,o.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:r},children:(0,o.jsx)("div",{children:n.title})})]},n.id)}))})}},838:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,i=r(861),u=r(885),c=r(757),o=r.n(c),s=r(791),p=r(963),d=r(731),f=r(343),l=r(168),h=r(444),x=h.ZP.input(e||(e=(0,l.Z)(["\n  margin: 20px 0 0 20px;\n  width: 30%;\n  height: 30px;\n  border: none;\n  border-bottom: 3px solid #d84315;\n  font-size: 20px;\n"]))),v=h.ZP.button(a||(a=(0,l.Z)(["\n  height: 40px;\n  width: 100px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 20px;\n\n  &:hover {\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);\n  }\n"]))),m=r(184),b=function(){var n=(0,d.lr)(),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,s.useState)([]),c=(0,u.Z)(a,2),l=c[0],h=c[1],b=r.get("query")||"";(0,s.useEffect)((function(){if(b){var n=function(){var n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.iN)(b);case 3:t=n.sent,h(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);return(0,m.jsxs)("div",{children:[(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;""===t.trim()&&console.log("asdasd"),e({query:t})},children:[(0,m.jsx)(x,{name:"query",type:"text"}),(0,m.jsx)(v,{type:"submit",children:"Search "})]}),(0,m.jsx)(f.Z,{data:l})]})}}}]);
//# sourceMappingURL=838.9eca9d66.chunk.js.map