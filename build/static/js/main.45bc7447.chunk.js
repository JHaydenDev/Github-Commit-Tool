(this["webpackJsonpgithub-commit"]=this["webpackJsonpgithub-commit"]||[]).push([[0],{107:function(t,e,c){"use strict";c.r(e);var n,i=c(0),a=c.n(i),o=c(17),r=c.n(o),s=(c(81),c(82),c(35)),m=c(41),j=c.n(m),h=c(62),u=c(47),b=c(111),d=(c(50),c(63)),l=c.n(d),p=c(109),O=c(38),f=c(64),x=c.n(f),g=c(7);var v,w=function(t){console.log(t,"<---from card component");var e=t.commitData;return e?Object(g.jsx)("div",{children:Object(g.jsx)(C,{children:e.map((function(t){return Object(g.jsx)(C,{children:Object(g.jsx)(x.a,{bottom:!0,children:Object(g.jsxs)(p.a,{title:"Commit",style:{width:300},children:[Object(g.jsxs)("p",{children:["Who Committed: ",t.commit.committer.name]}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:t.author.avatar_url,alt:"avatar",width:"100",height:"100"})}),Object(g.jsxs)("p",{children:["Date: ",t.commit.committer.date]}),Object(g.jsxs)("p",{children:['Message: "',t.commit.message,'"']}),Object(g.jsx)("p",{children:Object(g.jsx)("a",{href:t.commit.url,children:"Check object info"})})]})})})}))})}):Object(g.jsx)("div",{children:"Data was lost!"})},C=O.a.section(n||(n=Object(s.a)(["\n  padding: 2em;\n  background: darkslategray;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n"]))),k=b.a.Header,y=b.a.Content;var D=function(){var t=Object(i.useState)(!0),e=Object(u.a)(t,2),c=e[0],n=e[1],a=Object(i.useState)(),o=Object(u.a)(a,2),r=o[0],s=o[1];function m(){return(m=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"https://api.github.com/repos/JHaydenDev/Github-Commit-Tool/commits",l.a.get("".concat("https://api.github.com/repos/JHaydenDev/Github-Commit-Tool/commits")).then((function(t){var e=t.data;s(e),console.log(r,"<------Commit Data"),n(!1)})).catch((function(t){return console.error("Error: ".concat(t))}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[c]),Object(g.jsxs)(b.a,{children:[Object(g.jsx)(T,{children:"GitHub Commit Tracker (That tracks its own commits)"}),Object(g.jsx)(y,{children:Object(g.jsx)(w,{commitData:r})})]})},T=Object(O.a)(k)(v||(v=Object(s.a)(["\ncolor: white;\nfont-size: 1.5em;\n"])));var F=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(D,{})})},H=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),n(t),i(t),a(t),o(t)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),H()},81:function(t,e,c){},82:function(t,e,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.45bc7447.chunk.js.map