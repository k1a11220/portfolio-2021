(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{w2l6:function(t,e,i){"use strict";i.r(e);var n=i("KQm4"),a=i("q1tI"),r=i.n(a),o=i("vOnD"),s=i("vrFN"),h=i("x6fP"),c=2*Math.PI,l=function(){function t(t){var e=t.x,i=t.y,n=t.radius,a=t.rgb;this.x=e,this.y=i,this.radius=n,this.rgb=a,this.vx=4*Math.random(),this.vy=4*Math.random(),this.sinValue=Math.random()}return t.prototype.animate=function(t,e,i){this.sinValue+=.01,this.radius+=Math.sin(this.sinValue),this.x+=this.vx,this.y+=this.vy,this.x<0?(this.vx*=-1,this.x+=10):this.x>e&&(this.vx*=-1,this.x-=10),this.y<0?(this.vy*=-1,this.y+=10):this.y>i&&(this.vy*=-1,this.y-=10),t.beginPath();var n=t.createRadialGradient(this.x,this.y,.01*this.radius,this.x,this.y,this.radius);n.addColorStop(0,"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", 1)"),n.addColorStop(1,"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", 0)"),t.fillStyle=n,t.arc(this.x,this.y,this.radius,0,c,!1),t.fill()},t}(),d=[{r:255,g:149,b:0},{r:255,g:45,b:85},{r:175,g:82,b:222},{r:255,g:59,b:48},{r:255,g:204,b:0}],u=o.e.main.withConfig({displayName:"sc-404__Container",componentId:"bhwukg-0"})(["position:fixed;width:100%;height:100%;background-color:rgb(255,45,85);"]),m=o.e.div.withConfig({displayName:"sc-404__Divider",componentId:"bhwukg-1"})(["width:100%;height:4px;margin:1rem 0 1.5rem 0;background-color:rgba(255,255,255,0.5);"]),g=o.e.div.withConfig({displayName:"sc-404__TitleWrap",componentId:"bhwukg-2"})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:1;"]),f=o.e.h1.withConfig({displayName:"sc-404__Title",componentId:"bhwukg-3"})(["color:white;font-size:8rem;"]),b=o.e.h2.withConfig({displayName:"sc-404__Desc",componentId:"bhwukg-4"})(["color:white;font-size:2.5rem;"]),w=o.e.canvas.withConfig({displayName:"sc-404__Canvas",componentId:"bhwukg-5"})(["position:fixed;top:0;left:0;width:100%;height:100%;"]);e.default=function(){var t=Object(a.useRef)(null),e=Object(a.useState)([]),i=e[0],o=e[1],c=Object(a.useRef)(!1),p=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e=t.current,a=e.getContext("2d"),r=document.body.clientWidth,s=document.body.clientHeight,h=window.devicePixelRatio>1?2:1,u=Math.max(Math.floor(r/3),600),m=Math.max(Math.floor(r/5),300),g=function(){r=document.body.clientWidth,s=document.body.clientHeight,e.width=r*h,e.height=s*h,a.scale(h,h),a.globalCompositeOperation="saturation",a.clearRect(0,0,r,s),c.current=!0,function(){var t=0;o([]);for(var e=function(e){var i=new l({x:Math.random()*r,y:Math.random()*s,radius:Math.random()*(u-m)+m,rgb:d[t]});++t>=d.length&&(t=0),o((function(t){return[].concat(Object(n.a)(t),[i])}))},i=0;i<5;i++)e()}()};return c.current?function t(){a.clearRect(0,0,r,s);for(var e=0;e<5;e++){var n=i[e];if(!n)return;n.animate(a,r,s)}p.current=requestAnimationFrame(t)}():g(),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g),window.cancelAnimationFrame(p.current)}})),r.a.createElement(h.a,null,r.a.createElement(s.a,{title:"Not found"}),r.a.createElement(u,null,r.a.createElement(g,null,r.a.createElement(f,null,"404"),r.a.createElement(m,null),r.a.createElement(b,null,"Page not found")),r.a.createElement(w,{ref:t})))}}}]);
//# sourceMappingURL=component---src-pages-404-js-ab583d3fa413a3d72bf8.js.map