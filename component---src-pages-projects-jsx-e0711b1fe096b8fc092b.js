(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4gA2":function(e,a,t){},BM3p:function(e,a,t){e.exports=t.p+"static/site-logo-ceb794f98dce57aa130f0fe0f5e9ce5d.png"},OwkA:function(e,a,t){},hoZb:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=(t("oaNO"),t("dI71")),l=t("zq2v"),o=(t("OwkA"),function(e){var a=e.project;return r.a.createElement("div",{className:"col-md-3 col-sm-12 project-container"},r.a.createElement("a",{className:"project card",href:a.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},a.name),r.a.createElement("span",{className:"project-language"},a.language),r.a.createElement("p",{className:"card-text"},a.description))))}),s=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={projects:[]},t}Object(c.a)(a,e);var t=a.prototype;return t.filterProjects=function(e){return e.filter((function(e){return!e.archived&&!e.fork}))},t.componentDidMount=function(){var e=this;fetch("https://api.github.com/users/gokuldroid/repos").then((function(e){return e.json()})).then(this.filterProjects).then((function(a){console.log(a),e.setState({projects:a})})).catch(console.log)},t.render=function(){var e=this.state.projects.map((function(e){return r.a.createElement(o,{project:e,key:e.id})}));return r.a.createElement("div",{className:"projects-container row"},e)},a}(n.Component),i=function(e){return r.a.createElement(r.a.Fragment,null,e.children,r.a.createElement(l.a,null),r.a.createElement(s,null))},m=t("vrFN");a.default=function(){return r.a.createElement(i,null,r.a.createElement(m.a,{title:"Projects",keywords:["android","gokul prabhu","full stack developer"]}))}},oaNO:function(e,a,t){},zq2v:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),c=t.n(r),l=(t("4gA2"),t("TJpk")),o=t.n(l),s=function(){return c.a.createElement(o.a,null,c.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"}),c.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"}),c.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"}))},i=t("BM3p"),m=t.n(i),p=function(){return c.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapse-content"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.Link,{className:"nav-link",to:"/blog"},"Blog")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.Link,{className:"nav-link",to:"/projects"},"Projects")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.Link,{className:"nav-link",to:"/apps"},"Apps")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(n.Link,{className:"nav-link",to:"/contact"},"Get in touch"))))};a.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-expand-md navbar-container fixed-top navbar-light"},c.a.createElement(n.Link,{className:"navbar-brand",to:"/"}," ",c.a.createElement("img",{src:m.a,alt:""})," CODE ",c.a.createElement("span",null,"|")," FROM ",c.a.createElement("span",null," |")," DUDE"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapse-content","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-e0711b1fe096b8fc092b.js.map