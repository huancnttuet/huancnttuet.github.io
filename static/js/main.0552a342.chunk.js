(this.webpackJsonpnocorp=this.webpackJsonpnocorp||[]).push([[0],{142:function(e,t,a){e.exports=a.p+"static/media/giphy.8cc15aae.gif"},146:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(151),a(264)),i=a(17),u=a(47),s=a(64),m=a(262),p=a(54),f=a(30),d=a(9);var E=function(e){var t=e.point,a=e.tiled,c=e.myAgents,l=e.yourAgents,o=e.x,E=e.y,h=e.myTeamID,y=e.callback,g=Object(n.useState)(!1),v=Object(i.a)(g,2),b=v[0],x=v[1],w=function(e){if(e){for(var t=0;t<c.length;++t)if(c[t].x===o+1&&c[t].y===E+1)return c[t].agentID}else for(var a=0;a<c.length;++a)if(l[a].x===o+1&&l[a].y===E+1)return l[a].agentID;return 0};return r.a.createElement("div",{style:{display:"inline"}},0===a?r.a.createElement(u.a,{style:{height:"42px",width:"42px"}},t):a===h?w(1)?r.a.createElement(s.a,{placement:"top",title:"Agent ".concat(w(1))},r.a.createElement(u.a,{type:"primary",style:{height:"42px",width:"42px",borderColor:"red",borderWidth:"2.5px"},onClick:function(){x(!0)}},t),r.a.createElement(m.a,{title:"Agent ".concat(w(1)),visible:b,onOk:function(e){return x(!1)},onCancel:function(e){return x(!1)},width:200},r.a.createElement("div",{style:{width:"150px"}},r.a.createElement(p.a,null,r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(1,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-left",rotate:45}))),r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(2,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-up"}))),r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(3,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-up",rotate:45})))),r.a.createElement(p.a,null,r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(4,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-left"}))),r.a.createElement(f.a,{span:8}," "),r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(6,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-right"})))),r.a.createElement(p.a,null,r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(7,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-down",rotate:45}))),r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(8,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-down"}))),r.a.createElement(f.a,{span:8},r.a.createElement(u.a,{onClick:function(){y(9,w(1)),x(!1)}},r.a.createElement(d.a,{type:"arrow-right",rotate:45}))))))):r.a.createElement(u.a,{type:"primary",style:{height:"42px",width:"42px"}},t):w(0)?r.a.createElement(s.a,{placement:"top",title:"Agent ".concat(w(0))},r.a.createElement(u.a,{style:{height:"42px",width:"42px",borderColor:"black",backgroundColor:"gray"}},t)):r.a.createElement(u.a,{style:{height:"42px",width:"42px",backgroundColor:"gray",borderWidth:"2.5px"}},t))},h=function(e){var t=e.points,a=e.tiled,n=e.teams,c=e.teamID,l=e.callback,o=n.filter((function(e){return e.teamID===c}))[0].agents,i=n.filter((function(e){return e.teamID!==c}))[0].agents;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",null,e.map((function(e,n){return r.a.createElement(E,{point:e,tiled:a[t][n],myAgents:o,yourAgents:i,x:n,y:t,myTeamID:c,callback:l})})))})))},y=a(260),g=a(259),v=a(254),b=a(255),x=a(258),w=a(263),k=a(25),O=a.n(k),I=a(41),j=a(27),D=a.n(j);D.a.defaults.baseURL="http://sv-procon.uet.vnu.edu.vn:8010/",D.a.defaults.headers.common["Content-Type"]="application/json",D.a.defaults.headers.common.Authorization=localStorage.getItem("token");var C={get:function(){var e=Object(I.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/matches");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=Object(I.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/matches/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(I.a)(O.a.mark((function e(t,a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/matches/"+t+"/action",a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){localStorage.setItem("token",e)}},S="http://localhost:8080/solvers";D.a.defaults.headers.common["Content-Type"]="application/json";var T={solver:function(){var e=Object(I.a)(O.a.mark((function e(t,a,n,r){var c,l,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=a.teams,l=0;l<c.length;l++)c[l].hasOwnProperty("areaPoint")||(a.teams[l].areaPoint=0);o={infoMap:a,matchID:n,turn:r},e.t0=t,e.next=1===e.t0?6:2===e.t0?9:3===e.t0?12:15;break;case 6:return e.next=8,D.a.post(S+"/solver1",o);case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,D.a.post(S+"/solver2",o);case 11:return e.abrupt("return",e.sent);case 12:return e.next=14,D.a.post(S+"/solver3",o);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},A=y.a.Option,M=g.a.Title;var P=function(e){var t=e.teamID,a=e.matchID,c=e.infoMap,l=e.updateMap,o=e.actions,s=e.change,m=e.callback,E=e.turnLimit,h=Object(n.useState)(1),g=Object(i.a)(h,2),k=g[0],O=g[1],I=Object(n.useState)([]),j=Object(i.a)(I,2),D=j[0],S=j[1],P=Object(n.useState)(!1),H=Object(i.a)(P,2),R=H[0],B=H[1];Object(n.useEffect)((function(){S(o)}),[o,s]);var L=function(e){e?v.a.open({message:"Succces",description:"G\u1eedi action th\xe0nh c\xf4ng",icon:r.a.createElement(d.a,{type:"smile",style:{color:"#108ee9"}})}):v.a.open({message:"Error",description:"B\u1ecb l\u1ed7i r\u1ed3i",icon:r.a.createElement(d.a,{type:"smile",rotate:180,style:{color:"#108ee9"}})})},U=r.a.createElement(M,{level:1},"Turn ",c?c.turn:void 0);return r.a.createElement("div",null,r.a.createElement(b.a,{spinning:R},r.a.createElement(x.a,{title:U,extra:r.a.createElement("div",null,r.a.createElement(y.a,{defaultValue:1,style:{width:100,marginRight:"5px"},onChange:function(e){O(e)}},r.a.createElement(A,{value:1},"Solution1"),r.a.createElement(A,{value:2},"Solution2"),r.a.createElement(A,{value:3},"Solution3")),r.a.createElement(u.a,{type:"danger",style:{marginRight:"5px"},onClick:function(){B(!0),T.solver(k,c,a,E).then((function(e){var t=e.data;console.log("Solved:",t),B(!1),S(t.action.actions),m(t.action.actions)})).catch((function(e){console.log(e),L(!1),B(!1)}))}},"Solve"),r.a.createElement(u.a,{type:"primary",onClick:function(){var e=D,t=c.turn;e.map((function(e){return{agentID:e.agentID,dx:e.dx,dy:e.dy,type:e.type,turn:t}})),console.log("action request:",e),C.post(a,{actions:e}).then((function(e){200===e.status?L(!0):L(!1)})).catch((function(e){console.log(e),L(!1)}))}},"Send"),r.a.createElement(u.a,{type:"primary",style:{marginLeft:"5px"},onClick:function(){l(a,t)}},"Reset"))},r.a.createElement(p.a,null,D.map((function(e,t){return r.a.createElement(f.a,null,r.a.createElement(w.a,{style:{width:"150px"},addonBefore:"Agent ".concat(e.agentID),addonAfter:r.a.createElement("div",null,"".concat(e.type)," ",(a=e.dx,n=e.dy,0===a&&-1===n?r.a.createElement(d.a,{type:"arrow-up"}):1===a&&-1===n?r.a.createElement(d.a,{type:"arrow-up",rotate:45}):1===a&&0===n?r.a.createElement(d.a,{type:"arrow-right"}):1===a&&1===n?r.a.createElement(d.a,{type:"arrow-right",rotate:45}):0===a&&1===n?r.a.createElement(d.a,{type:"arrow-down"}):-1===a&&1===n?r.a.createElement(d.a,{type:"arrow-down",rotate:45}):-1===a&&0===n?r.a.createElement(d.a,{type:"arrow-left"}):-1===a&&-1===n?r.a.createElement(d.a,{type:"arrow-left",rotate:45}):0===a&&0===n?r.a.createElement(d.a,{type:"qq"}):void 0)," ")}));var a,n}))))))},H=a(256),R=g.a.Title,B=function(e){var t=e.infoMap,a=e.time,c=e.isUpdate,l=Object(n.useState)(a),o=Object(i.a)(l,2),s=o[0],m=o[1];Object(n.useEffect)((function(){c&&(m(a),H.a.warning("Turn m\u1edbi"))}),[c,a]),Object(n.useEffect)((function(){s||m(a);var e=setInterval((function(){m(s-1)}),1e3);return function(){clearInterval(e)}}),[s,a]);var p=r.a.createElement(R,{level:3},"Time : ",s);return r.a.createElement("div",null,r.a.createElement(x.a,{title:p,extra:r.a.createElement("div",{style:{display:"inline"}},r.a.createElement(u.a,{type:"primary",onClick:function(){e.history.push("/")}},"Home"))},r.a.createElement("div",{style:{display:"flex"}},t?t.teams.map((function(e,t){return r.a.createElement(x.a,{style:{width:"150px"},title:"TeamID : ".concat(e.teamID)},r.a.createElement("p",null,"Area Point : ",e.areaPoint),r.a.createElement("p",null,"Tile Point : ",e.tilePoint),r.a.createElement("p",null,"Total : ",e.areaPoint+e.tilePoint))})):void 0,r.a.createElement(x.a,{title:"B\u1eaft \u0111\u1ea7u l\xfac",style:{width:"150px"}},t?function(e){var t=new Date(e),a=t.getMinutes();return t.getHours()+":"+a+":"+t.getSeconds()+" "+t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()}(t.startedAtUnixTime):0))))};var L=function(e){var t=e.match,a=parseInt(t.params.id),c=parseInt(t.params.teamid),l=parseInt(t.params.time),o=parseInt(t.params.turn),u=Object(n.useState)(),s=Object(i.a)(u,2),m=s[0],d=s[1],E=Object(n.useState)([]),y=Object(i.a)(E,2),g=y[0],x=y[1],w=Object(n.useState)(!1),k=Object(i.a)(w,2),O=k[0],I=k[1],j=Object(n.useState)(!1),D=Object(i.a)(j,2),S=D[0],T=D[1],A=Object(n.useState)(1),M=Object(i.a)(A,2),H=M[0],R=M[1],L=Object(n.useState)(0),U=Object(i.a)(L,2),W=U[0],q=U[1],F=Object(n.useState)(!1),N=Object(i.a)(F,2),z=N[0],G=N[1],J=function(){v.a.error({message:"ERROR",description:"C\xf3 l\u1ed7i g\xec \u0111\xf3 r\u1ed3i :("})};return Object(n.useEffect)((function(){H||(R(1),function(e,t){C.update(e).then((function(e){var a=e.data;T(!1),console.log("current data :",a),d(a),W!==a.turn?G(!0):G(!1),q(a.turn);var n=a.teams.filter((function(e){return e.teamID===t}));console.log(n)})).catch((function(e){J(),T(!1)}))}(a,c));var e=setInterval((function(){R(H-1)}),1e3);return function(){clearInterval(e)}}),[H,a,c,W]),Object(n.useEffect)((function(){T(!0);!function(e,t){T(!0),C.update(e).then((function(e){var a=e.data;T(!1),console.log("current data :",a),d(a);var n=a.teams.filter((function(e){return e.teamID===t}));console.log(n),x(n[0].agents.map((function(e){return{agentID:e.agentID,dx:0,dy:0,type:"stay",turn:a.turn}})))})).catch((function(e){J(),T(!1)}))}(a,c)}),[a,c]),r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(b.a,{spinning:S},r.a.createElement(f.a,{span:15,style:{marginTop:"20px",marginLeft:"20px"}},m?r.a.createElement(h,{teamID:c,points:m.points,tiled:m.tiled,callback:function(e,t){console.log(g);for(var a=g,n=0;n<g.length;n++)if(a[n].agentID===t)switch(a[n].type="move",e){case 6:a[n].dx=1,a[n].dy=0;break;case 9:a[n].dx=1,a[n].dy=1;break;case 8:a[n].dx=0,a[n].dy=1;break;case 7:a[n].dx=-1,a[n].dy=1;break;case 4:a[n].dx=-1,a[n].dy=0;break;case 1:a[n].dx=-1,a[n].dy=-1;break;case 2:a[n].dx=0,a[n].dy=-1;break;case 3:a[n].dx=1,a[n].dy=-1}a=function(e,t,a){for(var n=t.teams.filter((function(e){return e.teamID===a}))[0].agents,r=t.tiled,c=0;c<e.length;c++){var l=e[c];if("move"===l.type)for(var o=0;o<n.length;o++){var i=n[o];i.agentID===l.agentID&&0!==r[i.y+l.dy-1][i.x+l.dx-1]&&r[i.y+l.dy-1][i.x+l.dx-1]!==a&&(e[c].type="remove")}}return e}(a,m,c),x(a),I(!O)},teams:m.teams}):void 0),r.a.createElement(f.a,{span:8},r.a.createElement(B,{infoMap:m,history:e.history,time:l,isUpdate:z}),r.a.createElement(P,{infoMap:m,updateMap:function(e,t){C.update(e).then((function(e){var a=e.data;T(!1),console.log("current data :",a),d(a),W!==a.turn?G(!0):G(!1),q(a.turn);var n=a.teams.filter((function(e){return e.teamID===t}));console.log(n)})).catch((function(e){J(),T(!1)}))},teamID:c,matchID:a,actions:g,change:O,history:e.history,callback:function(e){x(e)},turnLimit:o})))))},U=a(142),W=a.n(U),q=a(257),F=a(100),N=a(261),z=q.a.Header,G=q.a.Content,J=q.a.Footer,K=function(e){return r.a.createElement(G,{className:"layout"},r.a.createElement(z,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(F.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},r.a.createElement(F.a.Item,{key:"1",onClick:function(){e.history.push("/")}},"Home"),r.a.createElement(F.a.Item,{key:"2"},r.a.createElement("a",{href:"https://github.com/huancnttuet"},"About me")))),r.a.createElement(G,{style:{padding:"0 50px"}},r.a.createElement(N.a,{style:{margin:"16px 0"}},r.a.createElement(N.a.Item,null,"...")),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},r.a.createElement(p.a,null,r.a.createElement(f.a,{span:8}),r.a.createElement(f.a,{span:8},r.a.createElement("img",{src:W.a,alt:"\u1ea3nh ch\u1ee9 c\xe1i g\xec :D"})),r.a.createElement(f.a,{span:8})))),r.a.createElement(J,{style:{textAlign:"center"}},"Procon UI \xa92019 Created by Huan"))},V=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],d=s[1],E=function(){C.get().then((function(e){var t=e.data;l(t)}))};return Object(n.useEffect)((function(){E()}),[]),r.a.createElement("div",null,c?c.map((function(t,a){return r.a.createElement(f.a,{span:8},r.a.createElement(x.a,{title:t.matchTo},r.a.createElement("p",null,"id:",t.id),r.a.createElement("p",null,"intervalMillis:",t.intervalMillis),r.a.createElement("p",null,"teamID:",t.teamID),r.a.createElement("p",null,"turnMillis:",t.turnMillis),r.a.createElement("p",null,"turns:",t.turns),r.a.createElement(u.a,{onClick:function(){e.history.push("/map/".concat(t.id,"/").concat(t.teamID,"/").concat(t.turnMillis/1e3,"/").concat(t.turns))}},"GO")))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{span:4}),r.a.createElement(f.a,{span:8},r.a.createElement("h1",null," Nh\u1eadp Token "))),r.a.createElement(p.a,null,r.a.createElement(f.a,{span:4}),r.a.createElement(f.a,{span:8},r.a.createElement(w.a,{placeholder:"Token",onChange:function(e){d(e.target.value)}}),r.a.createElement(u.a,{onClick:Object(I.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C.setToken(m),e.next=3,E();case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})))},"OK")))))},Y=a(33),$=Object(Y.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(o.b,{history:$},r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",name:"setToken",component:V}),r.a.createElement(o.a,{exact:!0,path:"/map/:id/:teamid/:time/:turn",name:"Map",component:L}),r.a.createElement(o.a,{exact:!0,path:"/about",name:"About",component:K}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.0552a342.chunk.js.map