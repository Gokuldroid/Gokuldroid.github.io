(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(158),a(172)),i=a(4),o=a.n(i),s=a(149),c=a(153),u=a(7),m=a.n(u),p=(a(173),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={part:""},t.namepart=["Prabhu","Droid"],t.currentname=0,t.typeWrite=function(){t.currentname=t.currentname+1;for(var e=t.namepart[t.currentname%2],a=0,n=0;n<e.length;n++)a+=parseInt(t.randomIntFromInterval(80,500)),t.timer=setTimeout(function(a){t.setText(t.state.part+e.charAt(a))},a,n);t.timer=setTimeout(function(){t.typeWrite(),t.setText("")},a+3500)},t.setText=function(e){t.setState(function(){return{part:e}})},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.typeWrite()},a.randomIntFromInterval=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a.componentWillUnmount=function(){clearTimeout(this.timer)},a.render=function(){return r.a.createElement("div",{className:"bio"},r.a.createElement("p",{id:"name"},"Gokul",r.a.createElement("span",null,this.state.part),r.a.createElement("span",{className:"cursor"},"_")),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},"Fullstack developer ",r.a.createElement("span",null,"|")," android enthusiast ",r.a.createElement("span",null,"|")," designer"),r.a.createElement("p",{className:"line"}),r.a.createElement("p",{className:"interests"},r.a.createElement("span",{className:"green"},"Email : "),"gokulprabhu.droid@gmail.com ",r.a.createElement("span",{className:"green"},"| Ph no : "),"+919659172403"))},t}(n.Component)),d=(a(174),function(e){return r.a.createElement(s.b,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,e.children,r.a.createElement(c.a,{siteTitle:t.site.siteMetadata.title}),r.a.createElement(p,null))},data:l})});d.propTypes={children:o.a.node.isRequired};var f=d,g=a(154);t.default=function(){return r.a.createElement(f,null,r.a.createElement(g.a,{title:"Home",keywords:["android","gokul prabhu","VLC remote"]}))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(32),s=a.n(o);a.d(t,"a",function(){return s.a});a(150);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(149),r=a(4),l=a.n(r),i=a(0),o=a.n(i),s=(a(156),a(152)),c=a.n(s),u=function(){return o.a.createElement(c.a,null,o.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"}),o.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"}),o.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"}))},m=function(){return o.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapse-content"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:"nav-link",to:"/blog"},"Blog")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:"nav-link",to:"/projects"},"Projects")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:"nav-link",to:"/apps"},"Apps"))))},p=function(e){e.siteTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-expand-md navbar-container fixed-top navbar-light"},o.a.createElement(n.a,{className:"navbar-brand",to:"/"}," Gokul ",o.a.createElement("span",null,"| Droid")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapse-content","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement(m,null)))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};t.a=p},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(152),c=a.n(s),u=a(149);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return l.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var p="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gokuldroid",description:"My personal site",author:"Gokul prabhu"}}}}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Gokuldroid"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2b97589c2fcfb9238f19.js.map