(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),i=n(16),l=n(3),s=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=a.NODE_ENV,r=a.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(r);var j=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=n(5),h=n(21),u=[{index:!0,label:"Simon Hewins",path:"/"},{label:"About",path:"/about"},{label:"CV",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],d=n(0),m=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),O=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(m,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(O,{})]})},p=n(25),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Simon Hewins"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:simon.hewins@qeetoto.com",children:"simon.hewins@qeetoto.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/simonhewins/",children:" Simon "})," - the founder and CEO, at ",Object(d.jsx)("a",{href:"http://qeetoto.com",children:"Qeetoto"}),".  As I have built the company I have fulfilled nearly all roles required in a start up: CTO, Architect, Engineer, Manager, Developer, Designer, DevOps Lead, and all other possible roles.   I and my collegues like building things and connecting with people like you.  We are a close network of like-minded people who enjoy working on technology projects outside of our regular day-job.  If this sounds like something that interests you then please message me and lets have a chat."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Simon Hewins",Object(d.jsx)(b.b,{to:"/",children:"qeetoto.com"}),"."]})]})]})},w=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(w,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Simon Hewins",defaultTitle:"Simon Hewins",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Simon Hewins's personal website."};t.a=g},25:function(e,t,n){"use strict";n(1);var c=n(30),i=n(31),l=n(32),s=n(33),a=n(34),o=n(35),r=n(36),j=n(37),b=[{link:"https://github.com/texashedgeem",label:"Github",icon:i.faGithub},{link:"https://facebook.com/simon.hewins1",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/simonhewins/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/simonhewins",label:"LinkedIn",icon:a.faLinkedinIn},{link:"https://angel.co/simon-hewins",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/texashedgeem",label:"Twitter",icon:r.faTwitter},{link:"mailto:simon.hewins@gmail.com",label:"Email",icon:j.faEnvelope}],h=n(0);t.a=function(){return Object(h.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.link,children:Object(h.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(15),s=n(5),a=n(3),o=n(20),r=(n(50),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,176))})),h=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,170))})),u=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,171))})),d=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,175))})),m=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,173))})),O=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),x=function(){return Object(r.jsx)(s.a,{basename:"",children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(o.a,{}),children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{exact:!0,path:"/",component:h}),Object(r.jsx)(a.a,{path:"/about",component:j}),Object(r.jsx)(a.a,{path:"/projects",component:d}),Object(r.jsx)(a.a,{path:"/stats",component:O}),Object(r.jsx)(a.a,{path:"/contact",component:b}),Object(r.jsx)(a.a,{path:"/resume",component:m}),Object(r.jsx)(a.a,{component:u,status:404})]})})})},p=function(){return Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(r.jsx)(p,{}),f):Object(l.render)(Object(r.jsx)(p,{}),f)}},[[51,1,3]]]);
//# sourceMappingURL=main.46ba48b9.chunk.js.map