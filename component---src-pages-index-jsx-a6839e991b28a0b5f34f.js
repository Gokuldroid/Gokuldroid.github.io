(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Dtc0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("oaNO"),n("PlB2")),l=n("Wbzz"),c=n("zq2v");n("NZVd");var i=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={part:""},t.namepart=["Prabhu","Droid"],t.currentname=0,t.typeWrite=function(){t.currentname=t.currentname+1;for(var e=t.namepart[t.currentname%2],n=0,a=0;a<e.length;a++)n+=parseInt(t.randomIntFromInterval(80,500)),t.timer=setTimeout((function(n){t.setText(t.state.part+e.charAt(n))}),n,a);t.timer=setTimeout((function(){t.typeWrite(),t.setText("")}),n+3500)},t.setText=function(e){t.setState((function(){return{part:e}}))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.typeWrite()},o.randomIntFromInterval=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},o.componentWillUnmount=function(){clearTimeout(this.timer)},o.render=function(){return r.a.createElement("div",{className:"bio"},r.a.createElement("p",{id:"name"},"Gokul",r.a.createElement("span",null,this.state.part),r.a.createElement("span",{className:"cursor"},"_")),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},"Fullstack developer ",r.a.createElement("span",null,"|")," android enthusiast ",r.a.createElement("span",null,"|")," designer"),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},r.a.createElement("span",{className:"green"},"Email : "),"gokulprabhu.droid@gmail.com ",r.a.createElement("span",{className:"green"},"| Ph no : "),"+919659172403"))},a}(a.Component),s=n("Pv6L"),u=(n("SkAl"),function(e){return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,e.children,r.a.createElement(c.a,{siteTitle:t.site.siteMetadata.title}),r.a.createElement(i,null),r.a.createElement(s.a,null))},data:o})}),p=n("vrFN");t.default=function(){return r.a.createElement(u,null,r.a.createElement(p.a,{title:"Home",keywords:["android","gokul prabhu","VLC remote"]}))}},PlB2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gokuldroid"}}}}')},Pv6L:function(e,t,n){"use strict";var a=n("TJpk"),r=n.n(a),o=n("q1tI"),l=n.n(o);var c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.adsbygoogle=window.adsbygoogle||[],0!==window.adsbygoogle.length&&window.adsbygoogle.push({google_ad_client:"ca-pub-8661695674070138",enable_page_level_ads:!0})},o.render=function(){return l.a.createElement(r.a,null,l.a.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}))},a}(o.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a6839e991b28a0b5f34f.js.map