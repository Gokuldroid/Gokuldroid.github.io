(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(158),a(7)),i=a.n(o),c=a(152),l=(a(170),a(171),[{name:"VLC Stream & remote",img:"http://lorempixel.com/g/400/300",desc:"A Remote controller app for android that helps you to control VLC media player using your android phone",playStore:"https://play.google.com/store/apps/details?id=tuple.me.vlcremote",more:""},{name:"Doodly : system cleaner",img:"http://lorempixel.com/g/400/300",desc:"An utility app for android. (cache cleaner, app manager, duplicate files remover, QR scanner, etc...)",playStore:"https://play.google.com/store/apps/details?id=tuple.me.dtools",more:""},{name:"SASS tutorial",img:"http://lorempixel.com/g/400/300",desc:"A tutorial app for SASS.Provides detailed lessons on the most popular css preprocessor.",playStore:"https://play.google.com/store/apps/details?id=me.tuple.sassreference",more:""}]);function s(e){return r.a.createElement("div",{className:"card app border border-success col"},r.a.createElement("img",{class:"card-img-top",src:"http://lorempixel.com/g/400/300",alt:e.info.na}),r.a.createElement("div",{class:"card-header"},e.info.name),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.info.desc)),r.a.createElement("div",{class:"card-body card-body--links"},r.a.createElement("a",{href:e.info.playStore,class:"card-link"},"Open in Playstore")))}var p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"app-list container"},r.a.createElement("div",{className:"row"},l.map(function(e){return r.a.createElement(s,{info:e})})))},t}(n.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(p,{className:"body-container"}))},t}(n.Component),u=a(153);t.default=function(){return r.a.createElement(m,null,r.a.createElement(u.a,{title:"Home",keywords:["android","gokul prabhu","VLC remote"]}))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a});a(150);var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(54),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(149),r=a(4),o=a.n(r),i=a(0),c=a.n(i),l=(a(155),function(){return c.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.a,{className:"nav-link",to:"/blog"},"Blog")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.a,{className:"nav-link",to:"/projects"},"Projects")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.a,{className:"nav-link",to:"/apps"},"Apps"))))}),s=function(e){e.siteTitle;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-container fixed-top"},c.a.createElement(n.a,{className:"navbar-brand",to:"/"}," Gokul ",c.a.createElement("span",null,"| Droid")),c.a.createElement(l,null))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""},t.a=s},153:function(e,t,a){"use strict";var n=a(154),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(156),s=a.n(l),p=a(149);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(p.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var u="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gokuldroid",description:"My personal site",author:"Gokul prabhu"}}}}},170:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-apps-jsx-5da462bf68718df36770.js.map