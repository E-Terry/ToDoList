(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(7),r=n.n(i),c=(n(17),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,30)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),i(e),r(e)})}),u=n(1),o=n(2),m=n(4),s=n(3),d=n(5),b=(n(19),n(21),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",{className:"Title"}," To Do List")}}]),t}(l.a.Component)),f=(n(23),function(){function e(t,n,a,l,i){Object(u.a)(this,e),this.title=t,this.time=n,this.difficulty=a,this.importance=l,this.date=Date.parse(i)}return Object(o.a)(e,[{key:"toString",value:function(){return""+this.title+this.time+this.difficulty+this.importance+this.date}}]),e}());function p(){var e;console.log("I got your cliiiick!"),e=new f(document.getElementById("titleForm").value.toString(),document.getElementById("time").value.toString(),document.getElementById("difficulty").value.toString(),document.getElementById("importance").value.toString(),document.getElementById("dateForm").value.toString()),console.log(e),g.push(e),console.log(g),console.log(g[0].title),E.updateTable()}var h=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"Form"},l.a.createElement("label",{htmlFor:"titleForm"}," Title: "),l.a.createElement("input",{type:"text",id:"titleForm",name:"titleForm",placeholder:"Input Title Here",size:"12",required:!0,autoFocus:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"time"}," Time (in hours):"),l.a.createElement("input",{type:"number",id:"time",name:"time"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"difficulty"}," Difficulty (1-10):"),l.a.createElement("input",{type:"number",id:"difficulty",name:"difficulty",min:"1",max:"10"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"importance"}," Importance (1-10):"),l.a.createElement("input",{type:"number",id:"importance",name:"importance",min:"1",max:"10"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"dateForm"}," Date Due: "),l.a.createElement("input",{type:"date",id:"dateForm",name:"dateForm",size:"12"}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Submit",onClick:p}),l.a.createElement("input",{type:"reset"}))}}]),t}(l.a.Component);n(25);var E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("table",{id:"taskTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"Difficulty"),l.a.createElement("th",null,"Importance"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Score"))),l.a.createElement("tbody",{id:"dataDeLaTable"}))}}],[{key:"updateTable",value:function(){var e=this;this.tableData="";var t="</td><td>";v.getTasks().forEach(function(n){var a,l,i,r;e.tableData+="<tr><td>"+n.title+t+n.time+t+n.difficulty+t+n.importance+t+new Date(n.date).toLocaleString("en-US",{timeZone:"UTC",dateStyle:"full"})+t+(a=n.time,l=n.difficulty,i=n.importance,r=n.date,1/a+1/l+i-(r-(new Date).getTime())/864e5)+"</td></tr>"}),document.getElementById("dataDeLaTable").innerHTML=this.tableData,console.log(this.tableData)}}]),t}(l.a.Component),y=(n(27),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Display"},l.a.createElement("div",{className:"formDisplay"},l.a.createElement(h,null)),l.a.createElement("div",{className:"tableDisplay"},l.a.createElement(E,null)))}}]),t}(l.a.Component)),g=[];var v=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ToDoList"},l.a.createElement("div",{id:"Title"},l.a.createElement(b,null)),l.a.createElement("br",null),l.a.createElement(y,null))}}],[{key:"getTasks",value:function(){return g}}]),t}(l.a.Component);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(v,null)),c()}],[[8,3,2]]]);
//# sourceMappingURL=main.f784aa88.chunk.js.map