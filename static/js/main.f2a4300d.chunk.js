(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),l=(a(14),a(3)),o=a(4),i=a(6),m=a(5),u=a(7),d=function(){return r.a.createElement("div",{style:{width:"160px",background:"#1DC090"},className:"tc pa3 sans-serif"},r.a.createElement("div",{className:"black f4 asfs"},"COST PER UNIT"),r.a.createElement("div",{className:"pt4 jcb white f2 asfe"},"$175.5"))},f=function(e){var t=175.5*e.number;if(t<0)return r.a.createElement("div",{style:{width:"160px"},className:"bg-purple tc pa3 sans-serif"},r.a.createElement("div",{className:"black f4"},"TOTAL COST"),r.a.createElement("div",{className:"white f2"},"$0"),alert("Please enter a unit value from 0 to infinity...no negative numbers..."));var a="";return a=Number.isInteger(t)?a="$"+parseFloat(Math.round(100*t)/100).toFixed(0):"$"+parseFloat(Math.round(100*t)/100).toFixed(2),r.a.createElement("div",{style:{width:"160px"},className:"bg-purple tc pa3 sans-serif"},r.a.createElement("div",{className:"black f4"},"TOTAL COST"),r.a.createElement("div",{className:"white f2 pt5"},a))},p=function(e){var t=e.onInputChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center form asc"},r.a.createElement("p",{className:"tc f4 gray"},"# OF UNITS"),r.a.createElement("input",{className:"f4 pa2 w-25 flex center",type:"text",onChange:t}))))},b=(a(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({number:t.target.value}),console.log(e.state.number)},e.state={number:0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return document.body.style.backgroundColor="#E0F4F4",r.a.createElement("div",{className:"mt6"},r.a.createElement("div",{style:{background:"#2B3030"},className:"shadow-5 flex justify-between ml6 mr6 pt5 pb5"},r.a.createElement(d,null),r.a.createElement(p,{onInputChange:this.onInputChange}),r.a.createElement(f,{number:this.state.number})))}}]),t}(n.Component));a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.f2a4300d.chunk.js.map