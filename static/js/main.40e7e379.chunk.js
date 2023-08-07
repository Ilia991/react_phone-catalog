(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{53:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(27),s=c.n(a),n=c(6),i=c(25),r=c(4),l=(c(53),c(0)),o=c(8),b=c.n(o),j=c(3);function d(e,t){var c=Object(l.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return t}})),a=Object(r.a)(c,2),s=a[0],n=a[1];return[s,function(t){n(t),localStorage.setItem(e,JSON.stringify(t))}]}var u=function(){return Object(i.b)()},m=i.c,_=c(19),h=c(9),O=c(7),p=Object(_.b)({name:"favorite",initialState:{favoriteItem:[]},reducers:{addAllFavorite:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{favoriteItem:t.payload})},addFavorite:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{favoriteItem:[].concat(Object(h.a)(e.favoriteItem),[t.payload])})},removeFavorite:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{favoriteItem:e.favoriteItem.filter((function(e){return e.id!==t.payload.id}))})}}}),x=p.actions,f=x.addFavorite,N=x.removeFavorite,v=x.addAllFavorite,g=p.reducer,y=Object(_.b)({name:"favorite",initialState:{basketItem:[]},reducers:{addAllBasket:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{basketItem:t.payload})},addItemBasket:function(e,t){return e.basketItem.some((function(e){return e.id===t.payload.id}))?Object(O.a)(Object(O.a)({},e),{},{basketItem:e.basketItem.map((function(e){return e.id===t.payload.id?Object.hasOwnProperty.call(e,"quantity")?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):Object(O.a)(Object(O.a)({},e),{},{quantity:2}):Object(O.a)({},e)}))}):Object(O.a)(Object(O.a)({},e),{},{basketItem:[].concat(Object(h.a)(e.basketItem),[t.payload])})},removeAllItems:function(e){return Object(O.a)(Object(O.a)({},e),{},{basketItem:[]})},removeItemInBasket:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{basketItem:e.basketItem.map((function(e){return e.id===t.payload.id?(Object.hasOwnProperty.call(e,"quantity")&&e.quantity,Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity-1})):e}))})},removeItemFromBasket:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{basketItem:e.basketItem.filter((function(e){return e.id!==t.payload.id}))})}}}),k=y.actions,w=k.addItemBasket,C=k.removeItemInBasket,I=k.addAllBasket,S=k.removeItemFromBasket,q=k.removeAllItems,E=y.reducer,B=Object(_.a)({reducer:{favorite:g,basket:E}}),F=function(e){return e.basket},A=function(e){return e.favorite},L=c(11),T=c(5),P=c.n(T),R="https://mate-academy.github.io/react_phone-catalog/api/products",M=function(){var e=Object(L.a)(P.a.mark((function e(){var t,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(L.a)(P.a.mark((function e(t){var c,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/").concat(t,".json"));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(L.a)(P.a.mark((function e(){var t,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/banner.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=(c(56),c(1)),K=function(e){var t=e.item,c=d("prodFavorite",[]),a=Object(r.a)(c,2),s=a[0],n=a[1],i=d("prodBuy",[]),o=Object(r.a)(i,2),j=o[0],_=o[1],h=m(A).favoriteItem,O=m(F).basketItem,p=u();Object(l.useEffect)((function(){_(O)}),[O]),Object(l.useEffect)((function(){n(h)}),[h]);var x=function(e,t){return e.some((function(e){return e.id===t.id}))},v=j.find((function(e){return e.id===t.id}));return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("button",{onClick:function(){p(w(t))},className:b()("card__btn","card__btn--buy",{select:x(j,t)}),type:"button","aria-label":"btn-buy",children:[j.some((function(e){return e.id===t.id}))?"Selected":"Add to cart",v&&Object.hasOwnProperty.call(v,"quantity")&&v.quantity>1?"(".concat(v.quantity,")"):""]}),Object(J.jsx)("button",{onClick:function(){return function(e){var c=x(s,e);p(c?N(t):f(t))}(t)},className:b()("card__btn","card__btn--like",{liked:x(s,t)}),type:"button","aria-label":"btn"})]})},U=(c(58),function(e){var t=e.product;return Object(J.jsx)("li",{className:"card__item",children:Object(J.jsx)("div",{className:"card",children:Object(J.jsxs)("div",{className:"card__container",children:[Object(J.jsxs)("div",{className:"card__head",children:[Object(J.jsx)("div",{className:"card__img-block",children:Object(J.jsx)("img",{src:t.imageUrl,alt:"",className:"card__img"})}),Object(J.jsx)(n.b,{className:"card__link",to:"/".concat(t.type,"s/").concat(t.id),children:t.name}),Object(J.jsx)("div",{className:"card__price",children:0===t.discount?"$".concat(t.price):Object(J.jsxs)(J.Fragment,{children:["$".concat(t.price-t.price*t.discount/100),Object(J.jsx)("span",{className:"card__price--sale",children:t.price})]})})]}),Object(J.jsxs)("div",{className:"card__info-block",children:[Object(J.jsxs)("div",{className:"card__info",children:[Object(J.jsx)("span",{className:"card__info--title",children:"Screen"}),Object(J.jsx)("span",{className:"card__info--charac",children:t.screen})]}),Object(J.jsxs)("div",{className:"card__info",children:[Object(J.jsx)("span",{className:"card__info--title",children:"Capacity"}),Object(J.jsx)("span",{className:"card__info--charac",children:t.capacity})]}),Object(J.jsxs)("div",{className:"card__info",children:[Object(J.jsx)("span",{className:"card__info--title",children:"RAM"}),Object(J.jsx)("span",{className:"card__info--charac",children:t.ram})]})]}),Object(J.jsx)("div",{className:"card__footer",children:Object(J.jsx)(K,{item:t})})]})})})}),X=(c(59),c(44)),H=(c(60),function(){return Object(J.jsx)("div",{className:"loader__container",children:Object(J.jsx)(X.a,{ariaLabel:"loading-indicator",height:200,width:200,strokeWidth:5,strokeWidthSecondary:1,color:"#89939A",secondaryColor:"#E2E6E9"})})}),V=(c(61),function(){return Object(J.jsxs)("div",{className:"error",children:[Object(J.jsx)("h1",{className:"main__section--title",children:"Please reload page"}),Object(J.jsx)("button",{className:"error__btn",onClick:function(){window.location.reload()},type:"button","aria-label":"btn",children:"Reload"})]})}),Y=function(){var e=Object(l.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(0),i=Object(r.a)(s,2),o=i[0],j=i[1],d=Object(l.useState)(0),u=Object(r.a)(d,2),m=u[0],_=u[1],O=Object(l.useState)([]),p=Object(r.a)(O,2),x=p[0],f=p[1],N=Object(l.useState)([]),v=Object(r.a)(N,2),g=v[0],y=v[1],k=Object(l.useState)([]),w=Object(r.a)(k,2),C=w[0],I=w[1],S=Object(l.useState)([]),q=Object(r.a)(S,2),E=q[0],B=q[1],F=Object(l.useState)(!0),A=Object(r.a)(F,2),L=A[0],T=A[1],P=Object(l.useState)(!1),R=Object(r.a)(P,2),D=R[0],K=R[1];Object(l.useEffect)((function(){var e=Object(h.a)(E).filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}));I(e)}),[E]),Object(l.useEffect)((function(){var e=Object(h.a)(E).filter((function(e){return e.discount>0})).sort((function(e,t){return t.price/100*t.discount-e.price/100*e.discount}));y(e)}),[E]);var X=function(e,t){e((function(e){return e===t.length-1?0:e+1}))},Y=function(e,t){e((function(e){return 0===e?t.length-1:e-1}))};Object(l.useEffect)((function(){var e=setTimeout((function(){X(a,x)}),5e3);return function(){clearTimeout(e)}}),[c]),Object(l.useEffect)((function(){$().then((function(e){return f(e)})),M().then((function(e){B(e),T(!1)})).catch((function(){K(!0),T(!1)}))}),[]);for(var z=0,G=0,W=1;W<10;W+=1)G+=288,window.matchMedia("(min-width: ".concat(G,"px)")).matches&&(z=W);return L?Object(J.jsx)(H,{}):!L&&D?Object(J.jsx)(V,{}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("section",{className:"slider main__section",children:[Object(J.jsx)("button",{className:"slider__btn slider__btn--left",onClick:function(){return Y(a,x)},"aria-label":"btn",type:"button"}),Object(J.jsx)("div",{className:"slider__block-img",children:Object(J.jsx)("div",{className:"slider__wrapper",style:{transform:"translateX(".concat(-100*c,"%)")},children:x.map((function(e){return Object(J.jsx)("img",{src:e.img,alt:"banner",className:"slider__img"},e.img)}))})}),Object(J.jsx)("button",{className:"slider__btn slider__btn--right",onClick:function(){return X(a,x)},"aria-label":"btn",type:"button"})]}),Object(J.jsx)("section",{className:"hot-price main__section",children:Object(J.jsxs)("div",{className:"hot-price__content",children:[Object(J.jsxs)("div",{className:"main__head",children:[Object(J.jsx)("h1",{className:"main__section--title",children:"Hot prices"}),Object(J.jsxs)("div",{className:"btn__block",children:[Object(J.jsx)("button",{className:b()("btn","btn--prev",{disabled:0===m}),onClick:function(){return Y(_,E)},disabled:0===m,"aria-label":"btn-prev",type:"button"}),Object(J.jsx)("button",{className:b()("btn","btn--next",{disabled:m===g.length-z}),onClick:function(){return X(_,E)},disabled:m===g.length-z,"aria-label":"btn-next",type:"button"})]})]}),Object(J.jsx)("div",{className:"card__wrapper",children:Object(J.jsx)("div",{className:"card__block",children:Object(J.jsx)("ul",{className:"card__list",style:{transform:"translateX(-".concat(288*m,"px)")},"data-cy":"cardContainer",children:g&&g.map((function(e){return Object(J.jsx)(U,{product:e},e.id)}))})})})]})}),Object(J.jsxs)("section",{className:"category main__section",children:[Object(J.jsx)("div",{className:"category__head",children:Object(J.jsx)("h2",{className:"main__section--title",children:"Shop by category"})}),Object(J.jsx)("nav",{className:"category__wrapper",children:Object(J.jsxs)("ul",{className:"category__list",children:[Object(J.jsxs)("li",{className:"category__item",children:[Object(J.jsx)(n.b,{to:"/phones",className:"category__link category__link--phones"}),Object(J.jsx)("h3",{className:"category__title",children:"Mobile phones"}),Object(J.jsx)("span",{className:"page__count",children:"".concat(E.filter((function(e){return"phone"===e.type})).length," models")})]}),Object(J.jsxs)("li",{className:"category__item",children:[Object(J.jsx)(n.b,{to:"/tablets",className:"category__link category__link--tablets"}),Object(J.jsx)("h3",{className:"category__title",children:"Tablets"}),Object(J.jsx)("span",{className:"page__count",children:"".concat(E.filter((function(e){return"tablet"===e.type})).length," models")})]}),Object(J.jsxs)("li",{className:"category__item",children:[Object(J.jsx)(n.b,{to:"/accessories",className:"category__link category__link--accessories"}),Object(J.jsx)("h3",{className:"category__title",children:"Accessories"}),Object(J.jsx)("span",{className:"page__count",children:"".concat(0+E.filter((function(e){return"accessories"===e.type})).length," accessories")})]})]})})]}),Object(J.jsxs)("section",{className:"brand main__section",children:[Object(J.jsxs)("div",{className:"main__head",children:[Object(J.jsx)("h2",{className:"main__section--title",children:"Brand new models"}),Object(J.jsxs)("div",{className:"btn__block",children:[Object(J.jsx)("button",{className:b()("btn","btn--prev",{disabled:0===o}),onClick:function(){return Y(j,C)},disabled:0===o,"aria-label":"btn-prev",type:"button"}),Object(J.jsx)("button",{className:b()("btn","btn--next",{disabled:o===C.length-z}),onClick:function(){return X(j,C)},disabled:o===C.length-z,"aria-label":"btn-next",type:"button"})]})]}),Object(J.jsx)("div",{className:"card__wrapper",children:Object(J.jsx)("div",{className:"card__block",children:Object(J.jsx)("ul",{className:"card__list",style:{transform:"translateX(-".concat(288*o,"px)")},"data-cy":"cardContainer",children:C&&C.map((function(e){return Object(J.jsx)(U,{product:e},e.id)}))})})})]})]})},z=(c(62),function(e){var t=e.value,c=e.isSelect,a=e.handleActiveSelect,s=e.handleOnKeyDown,n=e.handleChooseValue,i=e.listItems,r=e.onBlurFromLastItem,o=e.onBlurBlock,j=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e=function(e){j.current&&!j.current.contains(e.target)&&o()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(J.jsxs)("div",{className:"custom-select",role:"listbox",ref:j,children:[Object(J.jsx)("button",{className:b()("filter__block",{active:c}),onClick:a,"aria-expanded":c,type:"button","aria-haspopup":"listbox",children:t}),Object(J.jsx)("ul",{className:b()("filter__block-sort",{active:c}),children:i.map((function(e){return Object(J.jsx)("li",{className:b()("filter__item",{active:t===e}),role:"option","aria-selected":t===e,tabIndex:0,onClick:function(){return n(e)},onKeyDown:function(t){return s(t,e)},onBlur:function(){return r(i,e)},children:e},e)}))})]})}),G=(c(63),["8","16","32","64","All"]),W=["Newest","Alphabetically","Low price","High price"],Q=function(e){for(var t=e.query,c=Object(n.d)(),a=Object(r.a)(c,2),s=a[0],i=a[1],o=Object(j.n)(),d=Object(l.useState)(!1),u=Object(r.a)(d,2),_=u[0],O=u[1],p=Object(l.useState)(!1),x=Object(r.a)(p,2),f=x[0],N=x[1],v=Object(l.useState)(!0),g=Object(r.a)(v,2),y=g[0],k=g[1],w=Object(l.useState)([]),C=Object(r.a)(w,2),I=C[0],S=C[1],q=Object(l.useState)([]),E=Object(r.a)(q,2),B=E[0],F=E[1],L=Object(l.useState)([]),T=Object(r.a)(L,2),P=T[0],R=T[1],D=m(A).favoriteItem,$=s.get("per_page")||"8",K=s.get("sort")||"Choose",X=s.get("page")||"1",V=[],Y=1;Y<=Math.ceil(I.length/+$);Y+=1)V.push(Y);var Q=o.pathname.split("/").filter((function(e){return""!==e}))[0],Z=Q.slice(0,-1);Object(l.useEffect)((function(){"favorites"!==Q?(k(!0),M().then((function(e){k(!1),S(e.filter((function(e){return e.type===Z})))})).catch((function(){return k(!1)}))):S(D)}),[Q,D]),Object(l.useEffect)((function(){!function(){var e=Object(h.a)(I).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));R(e);var c=e.sort((function(e,t){switch(K.toLowerCase()){case"newest":return t.age-e.age;case"alphabetically":return e.name.localeCompare(t.name);case"low price":return e.price-t.price;case"high price":return t.price-e.price;default:return 0}}));F("All"===$?c:Object(h.a)(c).splice((+X-1)*+$,+$))}()}),[I,t,X,K,$]),Object(l.useEffect)((function(){s.delete("page"),i(s)}),[K,$]);return y&&"favorites"!==Q?Object(J.jsx)(H,{}):Object(J.jsxs)("div",{className:b()({"main__not-found":0===B.length}),children:[Object(J.jsxs)("div",{className:"breadcrumbs",children:[Object(J.jsx)(n.b,{to:"/home",className:"breadcrumbs__home"}),Object(J.jsx)("span",{className:"breadcrumbs__arrow"}),Object(J.jsx)(n.b,{to:{pathname:"../".concat(Q)},className:"breadcrumbs__location",children:Q.slice(0,1).toUpperCase()+Q.slice(1)})]}),B.length>0?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"page__title",children:function(){switch(Q){case"phones":return"Mobiel phones";case"tablets":return"Tablets";case"accessories":return"Accessories";case"favorites":return"Favorites";default:return""}}()}),Object(J.jsx)("span",{className:"page__count page__count--margin",children:"".concat(I.length," models")}),Object(J.jsxs)("div",{className:"page__filter",children:[Object(J.jsxs)("div",{className:"filter__wrapper",children:[Object(J.jsx)("span",{className:"filter__title",children:"Sort by"}),Object(J.jsx)(z,{value:K,isSelect:f,handleActiveSelect:function(){N(!0)},handleOnKeyDown:function(e,t){"Enter"===e.key&&(s.set("sort",t),i(s),N(!1))},handleChooseValue:function(e){s.set("sort",e),i(s),N(!1)},listItems:W,onBlurFromLastItem:function(e,t){e[e.length-1]===t&&N(!1)},onBlurBlock:function(){N(!1)}})]}),Object(J.jsxs)("div",{className:"filter__wrapper",children:[Object(J.jsx)("span",{className:"filter__title",children:"Items on page"}),Object(J.jsx)(z,{value:$,isSelect:_,handleActiveSelect:function(){O(!0)},handleOnKeyDown:function(e,t){"Enter"===e.key&&(s.set("per_page",t),i(s),O(!1))},handleChooseValue:function(e){s.set("per_page",e),i(s),O(!1)},listItems:G,onBlurFromLastItem:function(e,t){e[e.length-1]===t&&O(!1)},onBlurBlock:function(){O(!1)}})]})]}),Object(J.jsx)("div",{className:"page__mobiel",children:Object(J.jsx)("ul",{className:"card__list page__list","data-cy":"cardContainer",children:B.map((function(e){return Object(J.jsx)(U,{product:e},e.id)}))})}),"All"!==$&&+$<P.length&&Object(J.jsx)("div",{className:"mobiel__pagination pagination",children:Object(J.jsxs)("ul",{className:"pagination__list",children:[Object(J.jsx)("li",{className:"pagination__item",children:Object(J.jsx)("button",{className:"pagination__link pagination__link-prev",onClick:function(){1!==+X&&(s.set("page",String(+X-1)),i(s))},type:"button","aria-label":"prev-btn"})}),V.map((function(e){return Object(J.jsx)("li",{className:"pagination__item",children:Object(J.jsx)("button",{className:b()("pagination__link",{active:+X===e}),onClick:function(){s.set("page",String(e)),i(s)},type:"button","aria-label":"page-btn",children:e})},e)})),Object(J.jsx)("li",{className:"pagination__item",children:Object(J.jsx)("button",{className:"pagination__link pagination__link-next",onClick:function(){+X!==Math.ceil(I.length/+$)&&(s.set("page",String(+X+1)),i(s))},type:"button","aria-label":"next-btn"})})]})})]}):Object(J.jsx)("h1",{className:"page__title",children:"Product not found"})]})},Z=(c(64),function(){window.history.back()}),ee=function(){var e=Object(l.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(),i=Object(r.a)(s,2),o=i[0],d=i[1],u=Object(l.useState)([]),m=Object(r.a)(u,2),_=m[0],h=m[1],O=Object(l.useState)(0),p=Object(r.a)(O,2),x=p[0],f=p[1],N=Object(j.n)().pathname.split("/").filter((function(e){return""!==e})),v=Object(j.r)().id;Object(l.useEffect)((function(){M().then((function(e){return h(e)}))}),[]),Object(l.useEffect)((function(){D(v).then((function(e){a(e),d(e.images[0])}))}),[v]);Object(l.useEffect)((function(){var e=setTimeout((function(){var e,t;c&&o&&d((e=o,(t=c.images).findIndex((function(t){return t===e}))===t.length-1?t[0]:t[t.findIndex((function(t){return t===e}))+1]))}),5e3);return function(){clearTimeout(e)}}),[c,o]);for(var g=0,y=0,k=1;k<5;k+=1)y+=288,!0===window.matchMedia("(min-width: ".concat(y,"px)")).matches&&(g=k);var w=_.find((function(e){return e.id===v})),C=w&&w.price-w.price*(w.discount/100);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{className:"breadcrumbs",children:[Object(J.jsx)(n.b,{to:"/home",className:"breadcrumbs__home"}),Object(J.jsx)("span",{className:"breadcrumbs__arrow"}),N.map((function(e){return Object(J.jsxs)("span",{children:[Object(J.jsx)(n.b,{to:{pathname:"/".concat(e)},className:"breadcrumbs__location",children:e.slice(0,1).toUpperCase()+e.slice(1)}),e!==N[N.length-1]&&Object(J.jsx)("span",{className:"breadcrumbs__arrow"})]},e)}))]}),Object(J.jsxs)("div",{className:"breadcrumbs__back",children:[Object(J.jsx)("span",{className:"breadcrumbs__arrow breadcrumbs__arrow--back"}),Object(J.jsx)("button",{className:"breadcrumbs__go-back",onClick:Z,type:"button",children:"Back"})]}),c&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"main__section--title",children:c.name}),Object(J.jsxs)("div",{className:"product",children:[Object(J.jsxs)("section",{className:"product__block-imgs",children:[Object(J.jsx)("div",{className:"product__all-imgs",children:c.images.map((function(e){return Object(J.jsx)("button",{className:b()("product__block-img",{active:o===e}),type:"button",onClick:function(){return d(e)},children:Object(J.jsx)("img",{src:e,alt:"img",className:"product__img"})},e)}))}),Object(J.jsx)("div",{className:"product__active-img",children:Object(J.jsx)("img",{src:o,alt:""})})]}),Object(J.jsxs)("section",{className:"product__block info",children:[Object(J.jsxs)("div",{className:"product__buy-block",children:[Object(J.jsx)("div",{className:"product__price",children:w&&0===w.discount?w.price:w&&Object(J.jsxs)(J.Fragment,{children:["$".concat(C),Object(J.jsx)("span",{className:"card__price--sale",children:w.price})]})}),Object(J.jsx)("div",{className:"product__buy",children:w&&Object(J.jsx)(K,{item:w})})]}),Object(J.jsxs)("ul",{className:"product__charac",children:[Object(J.jsxs)("li",{className:"product__charac-item",children:[Object(J.jsx)("span",{className:"product__spec",children:"Screen"}),Object(J.jsx)("span",{className:"product__value",children:c.display.screenSize})]}),Object(J.jsxs)("li",{className:"product__charac-item",children:[Object(J.jsx)("span",{className:"product__spec",children:"Resolution"}),Object(J.jsx)("span",{className:"product__value",children:c.display.screenResolution})]}),Object(J.jsxs)("li",{className:"product__charac-item",children:[Object(J.jsx)("span",{className:"product__spec",children:"Processor"}),Object(J.jsx)("span",{className:"product__value",children:c.hardware.cpu})]}),Object(J.jsxs)("li",{className:"product__charac-item",children:[Object(J.jsx)("span",{className:"product__spec",children:"RAM"}),Object(J.jsx)("span",{className:"product__value",children:c.storage.ram})]})]})]}),Object(J.jsxs)("section",{className:"about product__block",children:[Object(J.jsx)("div",{className:"about__head",children:Object(J.jsx)("h2",{className:"about__main-title",children:"About"})}),Object(J.jsx)("div",{className:"description__text",children:c.description})]}),Object(J.jsxs)("section",{className:"product__block tech-specs",children:[Object(J.jsx)("div",{className:"about__head",children:Object(J.jsx)("h2",{className:"about__main-title",children:"Tech specs"})}),Object(J.jsxs)("ul",{className:"tech-specs__list",children:[Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Screen"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.display.screenSize})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Resolution"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.display.screenResolution})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Processor"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.hardware.cpu})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"RAM"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.storage.ram})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Built in memory"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.storage.flash})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Camera"}),Object(J.jsx)("span",{className:"tech__specs__value",children:c.camera.primary})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Zoom"}),Object(J.jsx)("span",{className:"tech__specs__value"})]}),Object(J.jsxs)("li",{className:"tech-specs__item",children:[Object(J.jsx)("span",{className:"tech-specs__spec",children:"Cell"}),Object(J.jsx)("span",{className:"tech-specs__value",children:"".concat(c.connectivity.cell)})]})]})]})]}),Object(J.jsxs)("div",{className:"recommended",children:[Object(J.jsxs)("div",{className:"main__head",children:[Object(J.jsx)("h2",{className:"main__section--title",children:"You may also like"}),Object(J.jsxs)("div",{className:"btn__block",children:[Object(J.jsx)("button",{className:"btn btn--prev",onClick:function(){return e=_,void f((function(t){return 0===t?e.length-1:t-1}));var e},disabled:0===x,"aria-label":"btn-prev",type:"button"}),Object(J.jsx)("button",{className:"btn btn--next",onClick:function(){return e=_,void f((function(t){return t===e.length-1?0:t+1}));var e},disabled:x===_.length-g,"aria-label":"btn-next",type:"button"})]})]}),Object(J.jsx)("div",{className:"card__wrapper",children:Object(J.jsx)("div",{className:"card__block",children:Object(J.jsx)("ul",{className:"card__list",style:{transform:"translateX(-".concat(288*x,"px)")},"data-cy":"cardContainer",children:_.map((function(e){return Object(J.jsx)(U,{product:e},e.id)}))})})})]})]})]})},te=(c(65),function(e){var t=e.product,c=e.addItem,a=e.removeItem,s=e.removeProduct;return Object(J.jsxs)("li",{className:"cart__item",children:[Object(J.jsx)("button",{className:"btn btn__close",onClick:function(){return s(t)},type:"button","aria-label":"btn"}),Object(J.jsx)("div",{className:"product__block-img product__block--border",children:Object(J.jsx)("img",{src:t.imageUrl,alt:"",className:"product__img"})}),Object(J.jsxs)("div",{className:"cart__main-info",children:[Object(J.jsx)("div",{className:"cart__name",children:t.name}),Object(J.jsxs)("div",{className:"cart__quantity",children:[Object(J.jsx)("button",{onClick:function(){return a(t)},className:b()("btn","btn__minus",{disabled:!t.quantity||1===t.quantity}),disabled:!t.quantity||1===t.quantity,type:"button","aria-label":"btn"}),Object(J.jsx)("div",{className:"cart__count cart__count-item",children:t.quantity?t.quantity:1}),Object(J.jsx)("button",{className:"btn btn__plus",onClick:function(){return c(t)},type:"button","aria-label":"btn"})]})]}),Object(J.jsx)("div",{className:"cart__price",children:"$".concat(t.price*(100-t.discount)/100)})]})}),ce=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Thank You!"}),Object(J.jsx)("p",{children:"Thanks for your order. Your purchase will be packaged and sent to you shortly."})]})},ae=(c(66),function(){window.history.back()}),se=function(){for(var e=d("prodBuy",[]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(!1),n=Object(r.a)(s,2),i=n[0],o=n[1],b=u(),j=m(F).basketItem,_=0,h=0;h<c.length;h+=1)c[h].quantity?_+=c[h].quantity*(c[h].price*(100-c[h].discount)/100):_+=c[h].price*(100-c[h].discount)/100;Object(l.useEffect)((function(){a(j)}),[j]);var O=function(e){b(w(e))},p=function(e){b(C(e))},x=function(e){b(S(e))},f=0;return j.forEach((function(e){Object.hasOwnProperty.call(e,"quantity")?f+=e.quantity:f+=1})),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{className:"breadcrumbs__back",children:[Object(J.jsx)("span",{className:"breadcrumbs__arrow breadcrumbs__arrow--back"}),Object(J.jsx)("button",{className:"breadcrumbs__go-back",onClick:ae,type:"button",children:"Back"})]}),i?Object(J.jsx)(ce,{}):Object(J.jsxs)("div",{className:"cart main__section",children:[Object(J.jsx)("h1",{className:"main__section--title cart__title",children:"Cart"}),Object(J.jsxs)("div",{className:"cart__block",children:[0===c.length&&Object(J.jsx)("h2",{className:"main__section--title completed__title",children:"Cart is empty"}),Object(J.jsx)("ul",{className:"cart__list",children:j.map((function(e){return Object(J.jsx)(te,{product:e,addItem:O,removeItem:p,removeProduct:x},e.id)}))}),Object(J.jsxs)("div",{className:"cart__checkout",children:[Object(J.jsxs)("div",{className:"cart__info",children:[Object(J.jsx)("div",{className:"cart__all-price",children:"$".concat(_)}),Object(J.jsx)("span",{className:"cart__count",children:"Total for ".concat(f," items")})]}),Object(J.jsx)("div",{className:"cart__line"}),Object(J.jsx)("button",{onClick:function(){return 0!==c.length&&(o(!0),void b(q({})))},className:"card__btn card__btn--buy btn--checkout",type:"button","aria-label":"btn",children:"Checkout"})]})]})]})]})},ne=function(){window.scrollTo(0,0)},ie=["phones","tablets","accessories","favorites"],re=function(){var e=Object(n.d)(),t=Object(r.a)(e,2),c=t[0],a=t[1],s=u(),i=Object(j.n)(),o=Object(l.useState)(!1),_=Object(r.a)(o,2),h=_[0],O=_[1],p=Object(l.useState)(c.get("query")||""),x=Object(r.a)(p,2),f=x[0],N=x[1],g=function(e,t){var c=Object(l.useState)(e),a=Object(r.a)(c,2),s=a[0],n=a[1];return Object(l.useEffect)((function(){var c=setTimeout((function(){n(e)}),t);return function(){clearTimeout(c)}}),[e,t]),s}(f,2e3),y=c.get("query")||"",k=Object(l.useRef)(null),w=Object(l.useRef)(null),C=m(A),S=m(F),q=d("prodFavorite",[]),E=Object(r.a)(q,1)[0],B=d("prodBuy",[]),L=Object(r.a)(B,1)[0],T=0;S.basketItem.forEach((function(e){Object.hasOwnProperty.call(e,"quantity")?T+=e.quantity:T+=1}));var P=i.pathname.split("/")[1],R=ie.includes(P),M="cart".includes(P)&&""!==P;return Object(l.useEffect)((function(){var e;(e=g)?c.set("query",e):c.delete("query"),a(c)}),[g]),Object(l.useEffect)((function(){s(v(E)),s(I(L))}),[]),Object(l.useEffect)((function(){var e=function(e){k.current&&!k.current.contains(e.target)&&w.current&&!w.current.contains(e.target)&&O(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),Object(l.useEffect)((function(){O(!1)}),[window.location.hash]),Object(J.jsxs)("div",{className:"page",children:[Object(J.jsxs)("header",{className:"header",children:[Object(J.jsxs)("div",{className:"header__content",children:[Object(J.jsx)(n.b,{to:"/",className:"logo"}),Object(J.jsx)("nav",{className:"navigation",children:Object(J.jsxs)("ul",{className:"navigation__list",children:[Object(J.jsx)("li",{className:"navigation__item",children:Object(J.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return b()("navigation__link",{active:t})},"data-cy":"categoryLinksContainer",children:"Home"})}),Object(J.jsx)("li",{className:"navigation__item",children:Object(J.jsx)(n.c,{to:"/phones",className:function(e){var t=e.isActive;return b()("navigation__link",{active:t})},"data-cy":"categoryLinksContainer",children:"Phones"})}),Object(J.jsx)("li",{className:"navigation__item",children:Object(J.jsx)(n.c,{to:"/tablets",className:function(e){var t=e.isActive;return b()("navigation__link",{active:t})},"data-cy":"categoryLinksContainer",children:"tablets"})}),Object(J.jsx)("li",{className:"navigation__item",children:Object(J.jsx)(n.c,{to:"/accessories",className:function(e){var t=e.isActive;return b()("navigation__link",{active:t})},"data-cy":"categoryLinksContainer",children:"accessories"})})]})})]}),Object(J.jsxs)("div",{className:"header__buy",children:[R&&Object(J.jsxs)("div",{className:"header__search",children:[Object(J.jsx)("input",{className:b()("field__search--input",{close:y.length>0}),placeholder:"Search in ".concat(P,"..."),value:f,onChange:function(e){N(e.target.value)}}),Object(J.jsx)("button",{className:b()("field__search--input","field__search--btn",{close:y.length>0}),onClick:function(){N(""),c.delete("query"),a(c)},type:"button","aria-label":"btn","data-cy":"searchDelete"})]}),!M&&Object(J.jsx)("div",{className:"header__btn header__btn--like",children:C.favoriteItem.length>0&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{className:"count",children:C.favoriteItem.length}),Object(J.jsx)(n.b,{to:"favorites","data-cy":"addToFavorite",className:"header__link"})]})}),Object(J.jsx)("div",{className:"header__btn header__btn--cart",children:S.basketItem.length>0&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{className:"count",children:T}),Object(J.jsx)(n.b,{to:"/cart","data-cy":"productQauntity",className:"header__link"})]})}),Object(J.jsx)("button",{className:b()("header__btn","header__btn--menu",{active:h}),onClick:function(){return O(!h)},type:"button","aria-label":"btn",ref:w})]})]}),Object(J.jsx)("nav",{className:b()("navigation--mobiel",{active:h}),id:"menu",ref:k,children:Object(J.jsxs)("ul",{className:"navigation--mobiel__list",children:[Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/home",className:"navigation--mobiel__link",children:"home"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/phones",className:"navigation--mobiel__link",children:"Phones"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/tablets",className:"navigation--mobiel__link",children:"tablets"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/accessories",className:"navigation--mobiel__link",children:"accessories"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/phones",className:"navigation--mobiel__link",children:"Github"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/tablets",className:"navigation--mobiel__link",children:"Contacts"})}),Object(J.jsx)("li",{className:"navigation--mobiel__item",children:Object(J.jsx)(n.c,{to:"/accessories",className:"navigation--mobiel__link",children:"rights"})})]})}),Object(J.jsx)("main",{className:"main",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)(j.d,{children:[Object(J.jsx)(j.b,{path:"/",element:Object(J.jsx)(Y,{})}),Object(J.jsx)(j.b,{path:"/home",element:Object(J.jsx)(j.a,{to:"/",replace:!0})}),Object(J.jsxs)(j.b,{path:"/phones",children:[Object(J.jsx)(j.b,{index:!0,element:Object(J.jsx)(Q,{query:y})}),Object(J.jsx)(j.b,{path:":id",element:Object(J.jsx)(ee,{})})]}),Object(J.jsxs)(j.b,{path:"/tablets",children:[Object(J.jsx)(j.b,{index:!0,element:Object(J.jsx)(Q,{query:y})}),Object(J.jsx)(j.b,{path:":id",element:Object(J.jsx)(ee,{})})]}),Object(J.jsxs)(j.b,{path:"/accessories",children:[Object(J.jsx)(j.b,{index:!0,element:Object(J.jsx)(Q,{query:y})}),Object(J.jsx)(j.b,{path:":id",element:Object(J.jsx)(ee,{})})]}),Object(J.jsx)(j.b,{path:"/favorites",element:Object(J.jsx)(Q,{query:y})}),Object(J.jsx)(j.b,{path:"/cart",element:Object(J.jsx)(se,{})})]})})}),Object(J.jsx)("footer",{className:"footer",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"footer__content",children:[Object(J.jsx)(n.b,{to:"/",className:"logo"}),Object(J.jsx)("nav",{className:"footer__nav",children:Object(J.jsxs)("ul",{className:"footer__list",children:[Object(J.jsx)("li",{className:"footer__item",children:Object(J.jsx)("a",{href:"/",className:"footer__link",children:"Github"})}),Object(J.jsx)("li",{className:"footer__item",children:Object(J.jsx)("a",{href:"/",className:"footer__link",children:"Contacts"})}),Object(J.jsx)("li",{className:"footer__item",children:Object(J.jsx)("a",{href:"/",className:"footer__link",children:"rights"})})]})}),Object(J.jsxs)("div",{className:"footer__back-block",children:[Object(J.jsx)("span",{className:"footer__back",children:"Back to top"}),Object(J.jsx)("button",{onClick:ne,className:"btn btn--back",type:"button","aria-label":"btn"})]})]})})})]})};s.a.render(Object(J.jsx)(i.a,{store:B,children:Object(J.jsx)(n.a,{children:Object(J.jsx)(re,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.40e7e379.chunk.js.map