(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{24:function(e,t,a){},29:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),o=(a(35),a(13)),m=a(14),s=a(16),i=a(15),u=(a(24),a(11)),d=a(1),E=function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-md bg-dark navbar-dark fixed-top"},l.a.createElement("a",{class:"navbar-brand text-danger",href:"/"},"ANDREW RIGGS"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"collapsibleNavbar"},l.a.createElement("ul",{class:"navbar-nav ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(u.b,{to:"/",className:"nav-link"},"about")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(u.b,{to:"/projects",className:"nav-link"},"projects")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(u.b,{to:"/links",className:"nav-link"},"links"))))))},p=a(22),h=function(){return l.a.createElement("div",{className:"conatiner-fluid border-top text-center fixed-bottom",style:{marginBottom:"1em"}},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.twitter.com/mistahBinary"},l.a.createElement(p.b,{color:"black",size:"30",style:{margin:"0.5em 2em"}})),l.a.createElement("a",{href:"https://www.github.com/Binary00001"},l.a.createElement(p.a,{color:"black",size:"30",style:{margin:"0.5em 2em"}}))),l.a.createElement("div",null,l.a.createElement("p",null,"I'm hosted with"," ",l.a.createElement("a",{href:"https://pages.github.com/",style:{textDecoration:"none",color:"black"}},l.a.createElement("strong",null,"github pages")))))},b=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"text-center",style:{margin:0}},l.a.createElement("p",{className:"display-4 bg-dark text-danger",style:{padding:"1em"}},"BINARY00001"),l.a.createElement("p",{className:"display-5",style:{margin:"6em 0"}},"01000111",l.a.createElement("br",null),"01100101",l.a.createElement("br",null),"01100101",l.a.createElement("br",null),"01101011")),l.a.createElement(h,null))},v=a(17),g=a(18),y=a(28),f=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("h1",{className:"text-center"},this.props.count<1?"":!0===this.props.chance?"It's Shot O'clock!":"Not yet, drink some water")}}]),a}(l.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={counter:0},n.handleClick=n.handleClick.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(e){this.setState({counter:this.state.counter+=1})}},{key:"render",value:function(){var e=Math.random()>=.5;return l.a.createElement("div",{className:"text-center",style:{marginTop:50}},l.a.createElement(y.a,{variant:"info",onClick:this.handleClick},"Is it time?"),l.a.createElement(f,{chance:e,count:this.state.counter}))}}]),a}(l.a.Component),N=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{style:{margin:0}},l.a.createElement("p",{className:"display-4 bg-dark text-danger text-center",style:{padding:"1em"}},"projects")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 text-center"},l.a.createElement(v.a,null,l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,"Shot Or Not"),l.a.createElement(v.a.Text,null,l.a.createElement(k,null))))),l.a.createElement("div",{className:"col-sm-4 text-center"},l.a.createElement("img",{src:"https://pixy.org/images/placeholder.png",className:"img-thumbnail",alt:"placeholder"}),"Placeholder"),l.a.createElement("div",{className:"col-sm-4 text-center"},l.a.createElement("img",{src:"https://pixy.org/images/placeholder.png",className:"img-thumbnail",alt:"placeholder"}),"Placeholder"))))},x=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"jumbotron text-center",style:{margin:0,paddingTop:"5em"}},l.a.createElement("h1",null,"404"),l.a.createElement("h3",null,"Page Not Found")))},j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",component:b}),l.a.createElement(d.b,{exact:!0,path:"/projects",component:N}),l.a.createElement(d.b,{path:"/404",component:x}),l.a.createElement(d.b,{exact:!0,path:"/shotClock",component:k}),l.a.createElement(d.a,{to:"/404"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d2482eae.chunk.js.map