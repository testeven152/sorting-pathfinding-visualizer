(this["webpackJsonpsorting-pathfinding-visualizer"]=this["webpackJsonpsorting-pathfinding-visualizer"]||[]).push([[0],{29:function(e,t,n){e.exports=n(45)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n.n(o),s=(n(34),n(7)),u=n(2),c=(n(35),n(8)),l=n(9),d=n(11),m=n(10),h=n(47),f=(n(36),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(s.b,{to:"/Sorting"},r.a.createElement(h.a,{variant:"outline-dark",size:"lg"},"Sorting"))),r.a.createElement("div",{className:"column"},r.a.createElement(s.b,{to:"/Pathfinding"},r.a.createElement(h.a,{variant:"outline-dark",size:"lg"},"Pathfinding"))))}}]),n}(r.a.Component)),v=n(23),g=n(19),b=n(46),p=(n(42),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.col,a=e.isFinish,o=e.isStart,i=e.isWall,s=e.onMouseDown,u=e.onMouseEnter,c=e.onMouseUp,l=a?"finish":o?"start":i?"wall":"";return r.a.createElement("div",{id:"node-".concat(t,"-").concat(n),className:"node ".concat(l),onMouseDown:function(){return s(t,n)},onMouseEnter:function(){return u(t,n)},onMouseUp:function(){return c()}})}}]),n}(a.Component)),y=n(18);var E=function(e,t){var n,a=k(e,t),r=Object(y.a)(a);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.distance=e.distance+1,o.prevNode=e}}catch(i){r.e(i)}finally{r.f()}},k=function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n.filter((function(e){return!e.isVisited}))},S=function(e){e.sort((function(e,t){return e.distance-t.distance}))},B=function(e){var t,n=[],a=Object(y.a)(e);try{for(a.s();!(t=a.n()).done;){var r,o=t.value,i=Object(y.a)(o);try{for(i.s();!(r=i.n()).done;){var s=r.value;n.push(s)}}catch(u){i.e(u)}finally{i.f()}}}catch(u){a.e(u)}finally{a.f()}return n};n(43);var N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={grid:[],mouseIsPressed:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=j();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=O(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=O(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node shortest-path"}),10*t)},n=0;n<e.length;n++)t(n)}},{key:"animateDjikstra",value:function(){var e=this;this.clearVisitedNodes();for(var t=this.state.grid,n=t[10][15],a=t[10][35],r=function(e,t,n){var a=B(e),r=[];for(t.distance=0;0!==a.length;){S(a);var o=a.shift();if(!o.isWall){if(o.distance===1/0)return r;if(o.isVisited=!0,r.push(o),o===n)return r;E(o,e)}}}(t,n,a),o=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.prevNode;return t}(a),i=function(t){if(t===r.length)return setTimeout((function(){e.animateShortestPath(o)}),10*t),{v:void 0};setTimeout((function(){var e=r[t];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node visited"}),10*t)},s=0;s<=r.length;s++){var u=i(s);if("object"===typeof u)return u.v}}},{key:"animateAStar",value:function(){this.clearVisitedNodes()}},{key:"animateBFS",value:function(){this.clearVisitedNodes()}},{key:"animateDFS",value:function(){this.clearVisitedNodes()}},{key:"clearVisitedNodes",value:function(){var e=this.state.grid.slice(),t=[].concat(Object(g.a)(document.getElementsByClassName("node visited")),Object(g.a)(document.getElementsByClassName("node shortest-path")));if(0!==t.length){for(var n=0;n<t.length;n++){var a=t[n].id.split("-"),r=Number(a[1]),o=Number(a[2]);t[n].className=10===r&&15===o?"node start":10===r&&35===o?"node finish":"node ",t[n].prevNode=null,e[r][o]=C(r,o)}this.setState({grid:e})}}},{key:"clearWallNodes",value:function(){var e=this.state.grid.slice(),t=Object(g.a)(document.getElementsByClassName("node wall"));if(0!==t.length){for(var n=0;n<t.length;n++){var a=t[n].id.split("-"),r=Number(a[1]),o=Number(a[2]);console.log("node-%s-%s",r,o),t[n].className="node ",e[r][o]=C(r,o)}this.setState({grid:e})}}},{key:"resetGrid",value:function(){this.clearVisitedNodes(),this.clearWallNodes()}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return r.a.createElement("div",null,r.a.createElement(b.a,{className:"pathfinding-button-group"},r.a.createElement(s.b,{to:"/"},r.a.createElement(h.a,{variant:"primary"},"Home")),r.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.animateDjikstra()}},"Djikstra's"),r.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.animateAStar()}},"A* Search"),r.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.animateDFS()}},"Depth-First Search"),r.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.animateBFS()}},"Breadth-First Search"),r.a.createElement(h.a,{variant:"primary",onClick:function(){return e.resetGrid()}},"Reset")),r.a.createElement("div",{className:"grid"},n.map((function(t,n){return r.a.createElement("div",{key:n},t.map((function(t,n){var o=t.row,i=t.col,s=t.isFinish,u=t.isStart,c=t.isWall;return r.a.createElement(p,{key:n,row:o,col:i,isFinish:s,isStart:u,isWall:c,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()}})})))}))))}}]),n}(r.a.Component),j=function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<50;a++)n.push(C(t,a));e.push(n)}return e},C=function(e,t){return{col:t,row:e,distance:1/0,isStart:10===e&&15===t,isFinish:10===e&&35===t,isWall:!1,isVisited:!1,prevNode:null}},O=function(e,t,n){var a=e.slice(),r=a[t][n],o=Object(v.a)(Object(v.a)({},r),{},{isWall:!r.isWall});return a[t][n]=o,a},M=n(12);function T(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}function I(e){var t=[];return e.length<=1?e:(function(e,t){for(var n=!1,a=0;a<e.length-1;a++){n=!1;for(var r=0;r<e.length-a-1;r++)t.push([r,r+1]),t.push([r,r+1]),e[r]>e[r+1]?(t.push([r,e[r+1]]),t.push([r+1,e[r]]),T(e,r,r+1),n=!0):(t.push([r,e[r]]),t.push([r+1,e[r+1]]));if(!n)break}}(e.slice(),t),t)}function w(e){var t=[];if(e.length<=1)return e;var n=e.slice();return function e(t,n,a,r,o){if(n===a)return;var i=Math.floor((n+a)/2);e(r,n,i,t,o),e(r,i+1,a,t,o),function(e,t,n,a,r,o){var i=t,s=t,u=n+1;for(;s<=n&&u<=a;)o.push([s,u]),o.push([s,u]),r[s]<=r[u]?(o.push([i,r[s]]),e[i++]=r[s++]):(o.push([i,r[u]]),e[i++]=r[u++]);for(;s<=n;)o.push([s,s]),o.push([s,s]),o.push([i,r[s]]),e[i++]=r[s++];for(;u<=a;)o.push([u,u]),o.push([u,u]),o.push([i,r[u]]),e[i++]=r[u++]}(t,n,i,a,r,o)}(e,0,e.length-1,n,t),t}function D(e){var t=[];return e.length<=1?e:(function e(t,n,a,r){if(n<a){var o=function(e,t,n,a){var r=e[n],o=t-1;a.push([n,-1]);for(var i=t;i<=n-1;i++)a.push([i,-2]),a.push([i,-3]),e[i]<r&&(o++,T(e,o,i));return a.push([n,-1]),a.push([o+1,e[n]]),a.push([n,e[o+1]]),T(e,o+1,n),o+1}(t,n,a,r);e(t,n,o-1,r),e(t,o+1,a,r)}}(e,0,e.length-1,t),t)}function F(e){var t=[];return e.length<=1?e:(function(e,t){for(var n=0;n<e.length-1;n++){var a=n;t.push([n,-1]);for(var r=n+1;r<e.length;r++)t.push([r,-2]),t.push([r,-3]),e[r]<e[a]&&(a=r);t.push([a,e[n]]),t.push([n,e[a]]),T(e,a,n),t.push([n,-1])}}(e.slice(),t),t)}n(44);var P="#c0c0c0",W="#34eb61",V="#eb4034",A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={array:[],disabledButtons:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){console.log("Resetting array...");for(var e,t,n=[],a=0;a<12;a++)n.push((e=1,t=99,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:n,disabledButtons:!1})}},{key:"toggleButtons",value:function(){this.state.disabledButtons?(document.getElementById("homebutton").disabled=!1,document.getElementById("bubblesortbutton").disabled=!1,document.getElementById("mergesortbutton").disabled=!1,document.getElementById("insertionsortbutton").disabled=!1,document.getElementById("selectionsortbutton").disabled=!1,document.getElementById("quicksortbutton").disabled=!1,document.getElementById("resetbutton").disabled=!1,this.setState({disabledButtons:!1})):(document.getElementById("homebutton").disabled=!0,document.getElementById("bubblesortbutton").disabled=!0,document.getElementById("mergesortbutton").disabled=!0,document.getElementById("insertionsortbutton").disabled=!0,document.getElementById("selectionsortbutton").disabled=!0,document.getElementById("quicksortbutton").disabled=!0,document.getElementById("resetbutton").disabled=!0,this.setState({disabledButtons:!0}))}},{key:"mergeSort",value:function(){var e=this;console.log("Running Merge Sort..."),this.toggleButtons();for(var t=w(this.state.array),n=function(e){var n=document.getElementsByClassName("array-element");if(e%3!==2){var a=Object(M.a)(t[e],2),r=a[0],o=a[1],i=n[r].style,s=n[o].style,u=e%3===0?W:P;setTimeout((function(){i.backgroundColor=u,s.backgroundColor=u}),150*e)}else setTimeout((function(){var a=Object(M.a)(t[e],2),r=a[0],o=a[1];n[r].innerHTML=o}),150*e)},a=0;a<t.length;a++)n(a);setTimeout((function(){e.toggleButtons()}),150*(t.length+1))}},{key:"bubbleSort",value:function(){var e=this;console.log("Running Bubble Sort..."),this.toggleButtons();for(var t=I(this.state.array),n=function(e){var n=document.getElementsByClassName("array-element");if(e%4<2){var a=Object(M.a)(t[e],2),r=a[0],o=a[1],i=n[r].style,s=n[o].style,u=e%4===0?W:P;setTimeout((function(){i.backgroundColor=u,s.backgroundColor=u}),150*e)}else setTimeout((function(){var a=Object(M.a)(t[e],2),r=a[0],o=a[1];n[r].innerHTML=o}),150*e)},a=0;a<t.length;a++)n(a);setTimeout((function(){e.toggleButtons()}),150*(t.length+1))}},{key:"selectionSort",value:function(){var e=this;console.log("Running Selection Sort..."),this.toggleButtons();for(var t=F(this.state.array),n=!1,a=function(e){var a=document.getElementsByClassName("array-element"),r=Object(M.a)(t[e],2),o=r[0],i=r[1],s=a[o].style;-1===i?setTimeout((function(){var e=!1===n?V:P;s.backgroundColor=e,n=!n}),150*e):-2===i||-3===i?setTimeout((function(){var e=-2===i?W:P;s.backgroundColor=e}),150*e):setTimeout((function(){a[o].innerHTML=i}),150*e)},r=0;r<t.length;r++)a(r);setTimeout((function(){e.toggleButtons()}),150*(t.length+1))}},{key:"quickSort",value:function(){var e=this;console.log("Running Quick Sort..."),this.toggleButtons();for(var t=D(this.state.array),n=!1,a=function(e){var a=document.getElementsByClassName("array-element"),r=Object(M.a)(t[e],2),o=r[0],i=r[1],s=a[o].style;-1===i?setTimeout((function(){var e=!1===n?V:P;s.backgroundColor=e,n=!n}),150*e):-2===i||-3===i?setTimeout((function(){var e=-2===i?W:P;s.backgroundColor=e}),150*e):setTimeout((function(){a[o].innerHTML=i}),150*e)},r=0;r<t.length;r++)a(r);setTimeout((function(){e.toggleButtons()}),150*(t.length+1))}},{key:"insertionSort",value:function(){var e=this;console.log("Running Insertion Sort..."),this.toggleButtons();for(var t=function(e){var t=[];return e.length<=1?e:(function(e,t){for(var n=1;n<e.length;n++){var a=e[n],r=n-1;for(t.push([n,-1]);r>=0&&e[r]>a;)t.push([r,-2]),t.push([r,-3]),t.push([r+1,e[r]]),e[r+1]=e[r],r--;t.push([n,-1]),t.push([r+1,a]),e[r+1]=a}}(e.slice(),t),t)}(this.state.array),n=!1,a=function(e){var a=document.getElementsByClassName("array-element"),r=Object(M.a)(t[e],2),o=r[0],i=r[1],s=a[o].style;-1===i?setTimeout((function(){var e=!1===n?V:P;s.backgroundColor=e,n=!n}),150*e):-2===i||-3===i?setTimeout((function(){var e=-2===i?W:P;s.backgroundColor=e}),150*e):setTimeout((function(){a[o].innerHTML=i}),150*e)},r=0;r<t.length;r++)a(r);setTimeout((function(){e.toggleButtons()}),150*(t.length+1))}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",null,r.a.createElement(b.a,{className:"sort-button-group"},r.a.createElement(s.b,{to:"/"},r.a.createElement(h.a,{variant:"primary",id:"homebutton"},"Home")),r.a.createElement(h.a,{variant:"secondary",id:"bubblesortbutton",onClick:function(){return e.bubbleSort()}},"Bubble Sort"),r.a.createElement(h.a,{variant:"secondary",id:"mergesortbutton",onClick:function(){return e.mergeSort()}},"Merge Sort"),r.a.createElement(h.a,{variant:"secondary",id:"insertionsortbutton",onClick:function(){return e.insertionSort()}},"Insertion Sort"),r.a.createElement(h.a,{variant:"secondary",id:"selectionsortbutton",onClick:function(){return e.selectionSort()}},"Selection Sort"),r.a.createElement(h.a,{variant:"secondary",id:"quicksortbutton",onClick:function(){return e.quickSort()}},"Quick Sort"),r.a.createElement(h.a,{variant:"primary",id:"resetbutton",onClick:function(){return e.resetArray()}},"Reset")),r.a.createElement("div",{className:"array-container"},t.map((function(e,t){return r.a.createElement("div",{className:"array-element",key:t},e)}))))}}]),n}(r.a.Component);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Sorting & Pathfinding Visualizer")),r.a.createElement(s.a,{basename:"/"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:f}),r.a.createElement(u.a,{path:"/Sorting",component:A}),r.a.createElement(u.a,{path:"/Pathfinding",component:N}))),r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Created by Steven Te. View the source code"," ",r.a.createElement("a",{href:"https://github.com/testeven152/sorting-pathfinding-visualizer"},"here"),".")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.053fe1e9.chunk.js.map