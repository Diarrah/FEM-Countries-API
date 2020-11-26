(this["webpackJsonpfem-react-countries"]=this["webpackJsonpfem-react-countries"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/sun.027ad681.svg"},22:function(e,t,a){e.exports=a.p+"static/media/moon.ca7e15e5.svg"},24:function(e,t,a){e.exports=a.p+"static/media/search-dark.c0aeb738.svg"},25:function(e,t,a){e.exports=a.p+"static/media/search-light.f6caf8df.svg"},26:function(e,t,a){e.exports=a.p+"static/media/chevron-black.3c245e27.svg"},27:function(e,t,a){e.exports=a.p+"static/media/chevron-white.406e8ad9.svg"},28:function(e,t,a){e.exports=a.p+"static/media/arrow-black.8b1e01a6.svg"},29:function(e,t,a){e.exports=a.p+"static/media/arrow-white.85208170.svg"},30:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(7),m=a(1),s=a(14),i=a.n(s),_=a(9),u=a(20),g=a(6),p=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(g.a)(o,2),s=m[0],d=m[1],b=Object(n.useState)({error:!1}),E=Object(g.a)(b,2),h=E[0],f=E[1],x=Object(n.useState)(""),N=Object(g.a)(x,2),y=N[0],v=N[1],O=Object(n.useState)(""),j=Object(g.a)(O,2),C=j[0],k=j[1],S=Object(n.useState)("light"===localStorage.getItem("theme")?"light":"dark"),w=Object(g.a)(S,2),A=w[0],B=w[1];Object(n.useEffect)((function(){T("https://restcountries.eu/rest/v2/all")}),[]);var T=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch(t);case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:n=e.sent,l(Object(_.a)(n)),e.next=12;break;case 11:f({error:!0,statusCode:a.status,statusText:a.statusText});case 12:d(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(p.Provider,{value:{allCountries:c,loading:s,error:h,searchTerm:y,setSearchTerm:v,filterByRegion:C,setFilterByRegion:k,theme:A,setTheme:B,formatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},e.children)},b=a(21),E=a.n(b),h=a(22),f=a.n(h),x=function(){var e=Object(n.useContext)(p),t=e.theme,a=e.setTheme,c=e.setSearchTerm,l=e.setFilterByRegion,m=document.body.parentElement;Object(n.useEffect)((function(){localStorage.getItem("theme")?m.setAttribute("data-theme",localStorage.getItem("theme")):(a("light"),localStorage.setItem("theme","light"),m.setAttribute("data-theme","light"))}),[]);return r.a.createElement("div",{className:"header"},r.a.createElement(o.b,{to:"/",onClick:function(){return l(""),void c("")}},r.a.createElement("h1",{className:"header__heading"},"Where in the world?")),r.a.createElement("button",{className:"header__theme__toggle",onClick:function(){"light"!==t?(localStorage.setItem("theme","light"),m.setAttribute("data-theme",localStorage.getItem("theme")),a("light")):(localStorage.setItem("theme","dark"),m.setAttribute("data-theme",localStorage.getItem("theme")),a("dark"))}},r.a.createElement("img",{className:"".concat("light"===t?"moon":"sun"),src:"".concat("light"===t?f.a:E.a),alt:"".concat("light"===t?"Moon":"Sun"," icon")}),r.a.createElement("span",{className:"header__theme__toggle--mode"},"light"===t?"Dark":"Light"," Mode")))},N=function(){return r.a.createElement("div",{className:"navigation__bar"},r.a.createElement(C,null),r.a.createElement(B,null))},y=a(24),v=a.n(y),O=a(25),j=a.n(O),C=function(){var e=Object(n.useContext)(p),t=e.theme,a=e.searchTerm,c=e.setSearchTerm;return r.a.createElement("div",{className:"search__input"},r.a.createElement("input",{className:"search__input--bar",placeholder:"Search for a country...","aria-label":"Input to search for any country by name",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("img",{src:"".concat("light"===t?v.a:j.a),alt:"".concat("light"===t?"Sun ":"Moon ","icon")}))},k=a(26),S=a.n(k),w=a(27),A=a.n(w),B=function(){var e=Object(n.useContext)(p),t=e.theme,a=e.filterByRegion,c=e.setFilterByRegion,l=Object(n.useState)(!1),o=Object(g.a)(l,2),m=o[0],s=o[1],i=Object(_.a)(document.querySelectorAll(".filter__box__list__item"));return i.forEach((function(e){return e.addEventListener("click",(function(e){c(e.target.dataset.region),s(!m)}))})),r.a.createElement("div",{className:"filter__box"},r.a.createElement("button",{className:"filter__box__deployment",onClick:function(){s(!m)}},r.a.createElement("span",null,""!==a?"".concat(a):"Filter By Region"),r.a.createElement("img",{src:"".concat("light"===t?S.a:A.a),alt:""})),r.a.createElement("ul",{className:"filter__box__list ".concat(m?"active":"")},a&&r.a.createElement("li",{className:"filter__box__list__item","data-region":""},"All"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Africa"},"Africa"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Americas"},"Americas"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Asia"},"Asia"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Europe"},"Europe"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Oceania"},"Oceania"),r.a.createElement("li",{className:"filter__box__list__item","data-region":"Polar"},"Polar")))},T=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"loading__animation"},r.a.createElement("p",{className:"loading__animation__text"},"Loading"),r.a.createElement("div",{className:"ring"},r.a.createElement("div",{className:"ball__holder"},r.a.createElement("div",{className:"ball"})))))},R=function(e){var t=e.children,a=Object(n.useContext)(p),c=a.searchTerm,l=a.filterByRegion,o=a.error,m=Object(n.useState)(null),s=Object(g.a)(m,2),i=s[0],_=s[1],u=document.querySelector(".main__grid");return Object(n.useEffect)((function(){u&&_(u.children.length)}),[c,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main__grid"},t),0===i&&!o.error&&r.a.createElement("p",{className:"main__grid__error__msg"},"No country with the name ",r.a.createElement("span",null,c)," found in the ",r.a.createElement("span",null,l?"".concat(l):"All")," region"),o.error&&r.a.createElement("div",{className:"network__error"},r.a.createElement("p",{className:"error__code"},o.statusCode),r.a.createElement("p",{className:"error__msg"},"Oops, there was an error")))},I=function(e){var t=e.code,a=e.image,n=e.name,c=e.pop,l=e.region,m=e.capital;return r.a.createElement(o.b,{to:"/country/".concat(t)},r.a.createElement("div",{className:"country__thumb"},r.a.createElement("div",{className:"country__thumb__image__container"},r.a.createElement("img",{className:"country__thumb__image",src:a,alt:"".concat(n,"'s national flag")})),r.a.createElement("div",{className:"country__thumb__textbox"},r.a.createElement("h3",{className:"country__thumb__textbox--name"},n),r.a.createElement("small",{className:"country__thumb__textbox--population"},"Population: "," "," ",r.a.createElement("span",null,c)),r.a.createElement("small",{className:"country__thumb__textbox--region"},"Region: "," "," ",r.a.createElement("span",null,l)),r.a.createElement("small",{className:"country__thumb__textbox--capital"},"Capital: "," "," ",r.a.createElement("span",null,m)))))},L=function(){var e=Object(n.useContext)(p),t=e.allCountries,a=e.loading,c=e.formatNumber,l=e.searchTerm,o=e.filterByRegion;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(T,null),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(R,null,t.filter((function(e){return e.region.includes(o)})).filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})).map((function(e){return r.a.createElement(I,{key:e.alpha3Code,code:e.alpha3Code,image:e.flag,name:e.name,pop:c(e.population),region:e.region,capital:e.capital})})))))},F=a(28),P=a.n(F),M=a(29),D=a.n(M),q=function(e){var t=e.match,a=e.history,c=Object(n.useContext)(p),l=c.theme,m=c.allCountries,s=c.loading,i=c.formatNumber,u=m.find((function(e){return e.alpha3Code===t.params.countryCode}));return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(T,null),r.a.createElement("button",{className:"country__page__back__btn",onClick:function(){return a.goBack()}},r.a.createElement("div",{className:"country__page__back__btn--inner"},r.a.createElement("span",null,"Back"),r.a.createElement("img",{src:"".concat("light"===l?P.a:D.a),alt:"Arrow to go back to main page"}))),u&&r.a.createElement("div",{className:"country__page"},r.a.createElement("div",{className:"country__page__image__container"},r.a.createElement("img",{className:"country__page__image",src:u.flag,alt:"".concat(u.name,"'s national flag")})),r.a.createElement("div",{className:"country__page__textbox"},r.a.createElement("h1",{className:"country__page__textbox--title"},u.name),r.a.createElement("div",{className:"country__page__textbox__metadata"},r.a.createElement("ul",{className:"country__page__textbox__metadata--list-1"},r.a.createElement("li",{className:"country__page__textbox__metadata--name"},"Native Name: "," "," ",r.a.createElement("span",null,u.nativeName)),r.a.createElement("li",{className:"country__page__textbox__metadata--population"},"Population: "," "," ",r.a.createElement("span",null,i(u.population))),r.a.createElement("li",{className:"country__page__textbox__metadata--region"},"Region: "," "," ",r.a.createElement("span",null,u.region)),r.a.createElement("li",{className:"country__page__textbox__metadata--subregion"},"Sub Region: "," "," ",r.a.createElement("span",null,u.subregion)),r.a.createElement("li",{className:"country__page__textbox__metadata--capital"},"Capital: "," "," ",r.a.createElement("span",null,u.capital))),r.a.createElement("ul",{className:"country__page__textbox__metadata--list-2"},r.a.createElement("li",{className:"country__page__textbox__metadata--domain"},"Top Level Domain: "," "," ",r.a.createElement("span",null,u.topLevelDomain)),r.a.createElement("li",{className:"country__page__textbox__metadata--currency"},u.currencies.length>1?"Currencies: ":"Currency: ",u.currencies.filter((function(e){return null!==e.name})).map((function(e,t){var a=e.name,n=e.symbol,c=e.code;return r.a.createElement("span",{key:a},r.a.createElement("span",{className:"country__page__textbox__metadata--currency-symbol"},n&&"".concat(n," ")),r.a.createElement("span",{className:"country__page__textbox__metadata--currency-name"},a),r.a.createElement("span",{className:"country__page__textbox__metadata--currency-code"},c&&u.currencies.length===t+1?" (".concat(c,") "):" (".concat(c,"), ")))}))),r.a.createElement("li",{className:"country__page__textbox__metadata--languages"},u.languages.length>1?"Languages: ":"Language: ",u.languages.map((function(e,t){var a=e.name;return r.a.createElement("span",{key:a},r.a.createElement("span",{className:"country__page__textbox__metadata--languages-lang"},u.languages.length===t+1?"".concat(a," "):"".concat(a,", ")))}))))),r.a.createElement("div",{className:"country__page__textbox__borders"},r.a.createElement("ul",{className:"country__page__textbox__borders--list"},r.a.createElement("li",{className:"country__page__textbox__borders--list-title"},"Border Countries: "," "),u.borders.length>0?u.borders.map((function(e){return r.a.createElement("li",{className:"country__page__textbox__border",key:e},r.a.createElement("span",null,function(e){var t=Object(_.a)(m).filter((function(t){return t.alpha3Code===e}));return r.a.createElement(o.b,{to:"/country/".concat(t[0].alpha3Code)},t[0].name)}(e)))})):r.a.createElement("li",{className:"no__borders"},"None"))))))};a(41);var J=function(){return r.a.createElement(o.a,null,r.a.createElement(d,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:L}),r.a.createElement(m.a,{exact:!0,path:"/country/:countryCode",component:q})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.aca2beaf.chunk.js.map