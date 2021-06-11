(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/natl-epics/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1635:function(e,t,n){},"3be1":function(e,t,n){"use strict";n("4ddb")},"4ddb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={id:"nav"},o=Object(a["g"])("h3",{style:{display:"inline-block","padding-right":"10em"}},"Nationalizing Epics",-1),r=Object(a["f"])("HOME"),s=Object(a["f"])("ABOUT"),l=Object(a["f"])("TEACHING");function c(e,t,n,c,u,d){var p=Object(a["u"])("router-link"),h=Object(a["u"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",i,[o,Object(a["g"])(p,{to:"/",class:"nav-item"},{default:Object(a["y"])((function(){return[r]})),_:1}),Object(a["g"])(p,{to:"/about",class:"nav-item"},{default:Object(a["y"])((function(){return[s]})),_:1}),Object(a["g"])(p,{to:"/teaching",class:"nav-item"},{default:Object(a["y"])((function(){return[l]})),_:1})]),Object(a["g"])(h)],64)}var u={name:"App",components:{}};n("3be1");u.render=c;var d=u,p=n("6c02"),h={id:"map"};function g(e,t,n,i,o,r){return Object(a["q"])(),Object(a["d"])("div",h)}n("b0c0"),n("a4d3"),n("e01a");var f=n("e192"),m=n.n(f),b=(n("ac6d"),{class:"hello"});function y(e,t,n,i,o,r){return Object(a["q"])(),Object(a["d"])("div",b)}var v={name:"MyPopup",props:{msg:String}};v.render=y;var w=v,j={components:{},setup:function(){var e=Object(a["t"])("Unchanged Popup Title");return Object(a["o"])((function(){m.a.accessToken="pk.eyJ1IjoiY2hyYWRpbCIsImEiOiJja28wdnN0ZWMwZ3V3Mndta2Q2bm81bGtjIn0.Rt-7EwN5ftoTjzPYGhJl4Q";var t=new m.a.Map({container:"map",style:"mapbox://styles/mapbox/light-v9"});t.on("load",(function(){t.addSource("pol",{type:"geojson",data:"https://raw.githubusercontent.com/chradil/natl-epics/main/POL.geo.json"}),t.addLayer({id:"pol-fill",type:"fill",source:"pol",paint:{"fill-color":"green"}}),t.on("click","pol-fill",(function(n){console.log(n);var i=n.features[0].properties;(new m.a.Popup).setLngLat(n.lngLat).setHTML("<h1><br><br>"+i.name+'</h1><br><img width="90%" style="float:center; display: block; margin-left:auto; margin-right:auto" src="'+i.image+'"><br>'+i.description+"<p>"+i.author+"<br>"+i.email+"<br>"+i.website+"</p>").addTo(t);var o=Object(a["h"])({extends:w,setup:function(){return{title:e}}});Object(a["l"])((function(){Object(a["c"])(o).mount("#popup-content")}))}))}))})),{title:e}}};n("8fae");j.render=g;var O=j,k=Object(a["g"])("h1",null,"About",-1),E=Object(a["g"])("p",null,"Nationalizing Epics is developing in parallel with National Epics, a collaborative work of c. 83 or 84 chapters, to be published by Oxford University Press (UK). While National Epics suggests a stabilized outcome, a multi-volume book with reference value, Nationalizing Epics evokes the process of getting there, acknowledging that the nature and dynamics of nationalism, and the texts that serve or subvert it, never rest. And while most such large-scale projects develop behind closed doors, Nationalizing Epics aims to share resources and air critical issues along the way.",-1),T=Object(a["g"])("p",null,'National Epics will run from Albania and Algeria to Vietnam and Wales, an alphabetical organization that reproduces the sovereign, Olympian starkness of nationalism. Each National Epics author also contributes to Nationalizing Epics, initially by briefly discussing how a designated territorial space shapes or is shaped by "epical" texts that tell its story to the world. Collectively and cumulatively, we will help augment the emergent disciplinary field known as critical nationalism studies.',-1),x=Object(a["g"])("p",null,'Some national epics long predate the nations that come to claim them, exfoliating in multiple and regional forms of telling, with scant regard for later, "national" boundaries. Their adoption, editing, and regularization may marginalize other, contemporaneous narratives; their internal heterogeneity (linguistic, ethnic, and cultural) may be downplayed for strategic, homogenizing, nationalizing purposes. Precarity may be disguised. National epics are not discovered as such, but are rather adopted, groomed, and cultivated. Some national epics, losing caché and point d\'application, come to be supplanted; others, through critical re-readings, are repurposed in ways that outrun the intentions of their first adopters. Any given national epic, never static, is forever gaining or losing cultural and curricular relevance. ',-1),P=Object(a["g"])("p",null,'The key term epic invokes literary form while carrying western baggage (although, paradoxically, very few "pure" epics grace the western canon). Epic functions as a term of art, standing in for many other terms in other languages. Forms of epicity may vary widely, according to region and the timing of "national" emergence. The Song of Kiều rewrites Chinese pulp fiction into exquisite Vietnamese verse; The Story of Hong Gildong creates Korean mass fiction for the later nineteenth century (while pretending to follow Heo Gyun, 1569-1618, a Chinese master). Jose Rizal published Noli Me Tangere in Germany in 1887, aiming to liberate his native Philippines (where he was shot, or martyred, in 1896); Pramoedya Ananta Toer began his new epic tetralogy for a new nation at Buru Island Prison Camp, Indonesia, in 1973. Each of these Asian works enjoys national epic status; "Hong Gildong" is the Korean equivalent of "John Doe," the placeholder name for every citizen. Many European works, by contrast, now struggle to sustain their sometime epical, nation-making allure. Some, in today\'s diverse classrooms, have become hard to teach.',-1),A=Object(a["g"])("p",null,'The turn to nationalism signaled by this project\'s title might seem surprising, or counter-intuitive. Globalism has become the default mechanism of academic discourse and literary history: global antiquity, global modernity, the global Middle Ages. National Epics seeks not to deny the validity of such approaches, but rather to complement them: for it is evident that within current conditions of warp-speed global connectivity, cultural and political forms of nationalism are ascendant. 5G networks proliferate, but with growing suspicion of the builders. Supply chains seem too long, diseases cross borders, and voters are swayed by protectionist and nationalist narratives. Initiatives in trans-national partnership, treaty-keeping, and conservation have been in retreat. Populism and dictatorship, often racially-inflected, have been on the rise. Vaccination priorities, against the borderless threat of Covid-19, have defaulted to nation-based approaches. By 2040, according to one scenario, the world may regress into "separate silos," a retreat "to subnational ethnic and religious identities" (www.dni.gov/index.php/global-trends-home). It thus seems timely to undertake a major, collaborative review of the cultural mechanisms of nationalism. This does not represent an alternative to globalism, since the global economy itself exacerbates disparities between regions and nations. It does recognize that the greatest global challenge of our times, climate change, will not be solved nation-by-nation (and it must be solved before 2040). Nationalizing Epics, in laying bare the literary mechanics of nation-making, joins myriad initiatives now playing through the twinned, defining epics of our time: universal human health and planetary survival.',-1),N=Object(a["g"])("br",null,null,-1),S=Object(a["g"])("br",null,null,-1);function z(e,t){return Object(a["q"])(),Object(a["d"])(a["a"],null,[k,E,T,x,P,A,N,S],64)}const M={};M.render=z;var I=M,C=Object(a["e"])("<h1>Teaching with Nationalizing Epics</h1><p>I first taught courses on national epics at both graduate and undergraduate levels in Fall 2019. The graduate course ran as Lineages of Literary Nationalism, and the undergraduate offering as The National Epic. The latter, taught as a Ben Franklin seminar, the highest level of instruction for Penn undergraduates, required a formal process of curricular approval as a new course. Repeated in modified form as National Epics in Spring 2021, it will be offered again in Spring 2022 (in association with the theme year of the Wolf Humanities Center at Penn in 2021-2, Migration).</p><p> There are five assignments, given here with instructions:</p><li><ul><b>Assignment 1:</b> pass/ pass: a short meditation, of about 500 words or 2 pages, on the theme of personhood and nationhood. You may draw upon your own experiences here, or offer a response to texts and issues covered in class. This will serve a tune up writing exercise and will be especially useful if English is not your first language. We will provide feedback. It will also allow us to get a more detailed and nuanced account of your interests, of what you might hope for in this class.</ul><ul><b>Assignment 2:</b> short essay, chosen from a list of topics to be provided (and covered in class): 4 pages.</ul><ul><b>Assignment 3:</b> long essay brainstorm. Again, this need not be long: the chief point is to let us know how your thinking is developing, so that (again) we can suggest further reading, focus on critical issues, etc. Some class discussion of topics and issues arising might prove useful.</ul><ul><b>Assignment 4:</b> class presentation, with Powerpoint. Aim to make your presentation about 12-15 minutes long, so that there can be ample opportunity for discussion; 20 minutes total per presentation.</ul><ul><b>Assignment 5:</b> longer essay, 8-10 pages. Long, but not ridiculously long: compactness and concision are to be valued above omnium gatherum bagginess.</ul></li><p><b>Course design:</b> the first weeks of the course are set in advance, but later weeks are determined in part by student input: texts for Vietnam, Korea, and the Philippines all follow student suggestions. Germany, Switzerland, and Italy all featured in the first iteration of the course, but not in the second. The general movement of the course, at present, is to begin with western European texts (familiar from traditional curricula) but then to pivot eastward, across Eurasian space (most recently via Russia, Mongolia, and India), all the way to east Asia. The great advantage here is that, for the first time, we are able to consider connected Eurasian space (rather than camping in the far western enclave). Course enrollment is majority-minority, with almost all students finding some level of personal cultural investment. Students are of course free to pursue their own interests in their class presentations and final projects, adding to the range of territorial coverage. Experts from various Penn Departments, across Arts and Sciences, are invited to give guest lectures.</p><br><br>",7);function G(e,t){return C}const L={};L.render=G;var _=L,q=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:I},{path:"/teaching",name:"Teaching",component:_}],H=Object(p["a"])({history:Object(p["b"])(),routes:q}),J=H;Object(a["c"])(d).use(J).mount("#app")},"8fae":function(e,t,n){"use strict";n("1635")}});
//# sourceMappingURL=app.2347a44e.js.map