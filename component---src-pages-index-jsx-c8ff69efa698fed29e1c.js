(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(158),a(173)),o=a(4),c=a.n(o),i=a(150),s=a(156),u=a(7),m=a.n(u),p=(a(174),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={part:""},t.namepart=["Prabhu","Droid"],t.currentname=0,t.typeWrite=function(){t.currentname=t.currentname+1;for(var e=t.namepart[t.currentname%2],a=0,n=0;n<e.length;n++)a+=parseInt(t.randomIntFromInterval(80,500)),t.timer=setTimeout(function(a){t.setText(t.state.part+e.charAt(a))},a,n);t.timer=setTimeout(function(){t.typeWrite(),t.setText("")},a+3500)},t.setText=function(e){t.setState(function(){return{part:e}})},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.typeWrite()},a.randomIntFromInterval=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a.componentWillUnmount=function(){clearTimeout(this.timer)},a.render=function(){return r.a.createElement("div",{className:"bio"},r.a.createElement("p",{id:"name"},"Gokul",r.a.createElement("span",null,this.state.part),r.a.createElement("span",{className:"cursor"},"_")),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},"Fullstack developer ",r.a.createElement("span",null,"|")," android enthusiast ",r.a.createElement("span",null,"|")," designer"),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},r.a.createElement("span",{className:"green"},"Email : "),"gokulprabhu.droid@gmail.com ",r.a.createElement("span",{className:"green"},"| Ph no : "),"+919659172403"))},t}(n.Component)),d=(a(175),function(e){return r.a.createElement(i.b,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,e.children,r.a.createElement(s.a,{siteTitle:t.site.siteMetadata.title}),r.a.createElement(p,null))},data:l})});d.propTypes={children:c.a.node.isRequired};var f=d,g=a(154);t.default=function(){return r.a.createElement(f,null,r.a.createElement(g.a,{title:"Home",keywords:["android","gokul prabhu","VLC remote"]}))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(32),i=a.n(c);a.d(t,"a",function(){return i.a});a(151);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(54),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(152),s=a.n(i),u=a(150);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return l.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var p="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gokuldroid",description:"Developer blog",author:"Gokul prabhu"}}}}},156:function(e,t,a){"use strict";var n=a(150),r=(a(4),a(0)),l=a.n(r),o=(a(157),a(152)),c=a.n(o),i=function(){return l.a.createElement(c.a,null,l.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"}),l.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"}),l.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"}))},s=function(){return l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapse-content"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.a,{className:"nav-link",to:"/blog"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.a,{className:"nav-link",to:"/projects"},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.a,{className:"nav-link",to:"/apps"},"Apps"))))};t.a=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-expand-md navbar-container fixed-top navbar-light"},l.a.createElement(n.a,{className:"navbar-brand",to:"/"}," Gokul ",l.a.createElement("span",null,"| Droid")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapse-content","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(s,null)))}},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Gokuldroid"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c8ff69efa698fed29e1c.js.map