(this.webpackJsonpwebstore=this.webpackJsonpwebstore||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(12),s=n(1),c=n(0),i=n.n(c),r=n(15),o=n.n(r),l=(n(50),n(51),n(52),n.p+"static/media/3canardslogo.41f21247.png"),u=n(16);function m(){return Object(s.jsxs)("div",{className:"pad-15",children:[Object(s.jsx)("h2",{className:"title-card",children:"Que proposons-nous ?"}),Object(s.jsxs)("div",{className:"col space-around",children:[Object(s.jsx)("img",{alt:"IMG - Concept des Trois Canards",style:{width:"20%"},className:"img_desc",src:"http://www.chapin-traiteur.com/images/buffet/CHAPIN-TRAITEUR---buffet---Lunch-salades-2-min.jpg"}),Object(s.jsx)("p",{children:"Les 3 canards sont un groupe d\u2019amis."})]})]})}var d=n(24),p=n.n(d),j=n(37),h=n(44),b=n(43),x=n(17),f=n(40),O=n.n(f),v=n(2);function g(e,t){return t.Menus.products.map((function(t){return e.values[t.formik_name]})).reduce((function(e,t){return e+t}),0)?Object.keys(t).map((function(n){return t[n].products.map((function(t){return t.price*e.values[t.formik_name]}))})).flat().reduce((function(e,t){return e+t}),0):0}function _(){var e=i.a.useContext(G),t={Menus:e.Menus,appetizer:e.appetizer,cheeses:e.cheeses,cuteness:e.cuteness,wines:e.wines},n=Object(x.useStripe)(),a=Object(x.useElements)(),c=i.a.useState(!1),r=Object(h.a)(c,2),o=r[0],l=r[1],u=Object(b.a)({initialValues:{name:"",phone:"",line1:"",city:"",postal_code:"",email:"",qt_menu1:1,qt_menu2:0,qt_appetizer1:0,qt_appetizer2:0,qt_fromage:0,qt_cuteness1:0,qt_cuteness2:0,qt_vin1:0,qt_vin2:0},onSubmit:function(e){m(e)}}),m=function(){var e=Object(j.a)(p.a.mark((function e(t,s){var c,i,r,o,u,m,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&a){e.next=2;break}return e.abrupt("return");case 2:return l(!0),c={name:t.name,phone:t.phone,address:{line1:t.line1,city:t.city,postal_code:t.postal_code},email:t.email},e.next=6,O.a.post("http://localhost:3001/payment_intents",{amount:100*s});case 6:return i=e.sent,r=i.data,console.log(r),o=a.getElement(x.CardElement),e.next=12,n.createPaymentMethod({type:"card",card:o,billing_details:c});case 12:return u=e.sent,m=u.paymentMethod,e.next=16,n.confirmCardPayment(r,{payment_method:m.id});case 16:d=e.sent,console.log(d);case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{formik:u,product:t}),Object(s.jsx)(N,{isProcessing:o,formik:u,product:t}),Object(s.jsx)(y,{formik:u,product:t}),Object(s.jsxs)("p",{children:["Total : ",Object(s.jsxs)("b",{children:[g(u,t)," \u20ac"]})]})]})}var y=function(e){var t=e.formik,n=e.product;return Object(s.jsxs)("div",{className:"food_sumup",children:[Object(s.jsx)("h3",{children:"Ma carte"}),0===t.values.qt_menu1&&0===t.values.qt_menu2?Object(s.jsx)("p",{className:"invalid_menu",children:"Veuillez s\xe9l\xe9ctionner un menu principal."}):Object(s.jsx)("ul",{className:"food_sumup_list",children:Object.keys(n).map((function(e){var a=n[e];return a.products?a.products.map((function(e){return 0===t.values[e.formik_name]?null:Object(s.jsxs)("li",{children:[e.name," X ",t.values[e.formik_name]," (",e.price*t.values[e.formik_name]," \u20ac)"]},e.formik_name)})):0===t.values[a.formik_name]?null:Object(s.jsxs)("li",{children:[a.name," X ",t.values[a.formik_name]," (",a.price*t.values[a.formik_name]," \u20ac)"]},a.formik_name)}))})]})},N=function(e){var t=e.formik,n=e.isProcessing;return Object(s.jsxs)("form",{className:"col margin-bottom",onSubmit:t.handleSubmit,children:[[[{id:"name",name:"name",placeholder:"Nom - Prenom",type:"text"},{id:"line1",name:"line1",placeholder:"Adresse de livraison",type:"text"}],[{id:"email",name:"email",placeholder:"Courriel",type:"email"},{id:"postal_code",name:"postal_code",placeholder:"Code Postal",type:"text"}],[{id:"phone",name:"phone",placeholder:"Numero de telephone",type:"tel"},{id:"city",name:"city",placeholder:"Ville",type:"text"}]].map((function(e){return Object(s.jsx)("div",{className:"row",children:e.map((function(e){return Object(s.jsx)(w,{input:e,onChange:t.handleChange,value:t.values},e.id)}))})})),Object(s.jsx)(x.CardElement,{options:{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"1em","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},hidePostalCode:!0}}),Object(s.jsx)("button",{type:"submit",disabled:n,children:n?"Commande en cours..":"Commander Immediatement"})]})},w=function(e){var t=e.input,n=e.onChange,a=e.value;switch(t.type){case"text-area":return Object(s.jsx)("textarea",{name:"Text1",cols:"20",rows:"5"});default:return Object(s.jsx)("input",{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,onChange:n,value:a[t.name]})}},k=function(e){var t=e.formik,n=e.product,a=Object(v.g)(),c=a.path,i=a.url;return Object(s.jsxs)("div",{className:"margin-bottom",children:[Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"center nav-item",children:Object.keys(n).map((function(e){var t=n[e];return console.log("Li :",t.name),Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{to:"".concat(i,"/").concat(t.name.split(" ").join("_")),children:t.name})},t.name)}))})}),Object(s.jsx)(v.c,{children:Object.keys(n).map((function(e){var a=n[e];return console.log("Switch :",c),Object(s.jsx)(v.a,{path:"".concat(c,"/").concat(a.name.split().join("_")),children:Object(s.jsx)(q,{item:a,onChange:t.handleChange,value:t.values},a.name)})}))})]})},q=function(e){var t=e.item,n=e.onChange,a=e.value,c=Object(v.f)().product;if(t.products)return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{children:c}),Object(s.jsx)("div",{className:"row",children:t.products.map((function(e){return Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("label",{children:e.name}),Object(s.jsx)("input",{type:"number",id:e.formik_name,name:e.formik_name,min:"0",max:"100",onChange:n,value:a[e.formik_name]})]})}))})]})},L=n(41),C=Object(L.a)("pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV");function P(e){var t=e.product;return Object(s.jsxs)("div",{className:"sidebar features-small-item",children:[Object(s.jsx)("h2",{children:"Menu St Valentin"}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(x.Elements,{stripe:C,children:Object(s.jsx)(_,{product:t})})})]})}function U(e){var t=e.item;return Object(s.jsxs)("div",{className:"features-small-item margin-bottom",children:[Object(s.jsx)("h2",{children:t.name}),t.products.map((function(e){return Object(s.jsx)(M,Object(a.a)({},e))}))]})}function M(e){var t=e.type,n=e.name,a=e.description,c=e.photoURL,i=e.price;return Object(s.jsxs)("div",{className:"card",children:[""===c?null:Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{alt:"desc",className:"img_desc",src:c})}),Object(s.jsxs)("div",{className:"text-container",children:[Object(s.jsxs)("h2",{className:"title-card",children:[void 0===t?null:"".concat(t," : "),Object(s.jsx)("b",{children:n}),void 0===i?null:"- ".concat(i," \u20ac")]}),Object(s.jsx)("p",{children:a})]})]})}var R=[{path:"/menu",exact:!1,name:"Menu St Valentin",component:function(){var e=i.a.useContext(G),t=e.Menus,n=e.appetizer,a=e.cheeses,c=e.cuteness,r=e.wines;return Object(s.jsxs)("div",{className:"main-view",children:[Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)(U,{item:t.products[0]}),Object(s.jsx)(U,{item:t.products[1]}),Object(s.jsx)(U,{item:n}),Object(s.jsx)(U,{item:a}),Object(s.jsx)(U,{item:c}),Object(s.jsx)(U,{item:r})]}),Object(s.jsx)(P,{})]})}},{path:"/",exact:!0,name:"Le Concept",component:function(){var e=function(e){var t=e.alt,n=e.txt,a=e.photoURL;return Object(s.jsxs)("div",{className:"col third",children:[Object(s.jsx)("img",{alt:t,className:"img_desc",src:a}),Object(s.jsx)("p",{className:"desc-text",children:n})]})};return Object(s.jsxs)("div",{className:"features-small-item presview",children:[Object(s.jsxs)("div",{className:"pad-15",children:[Object(s.jsx)("h2",{className:"title-card",children:"Qui sommes nous ?"}),Object(s.jsx)("div",{className:"row",children:[{alt:"Portrait - Thomas LEPAGNOL",photoURL:"foo",txt:"Thomas est un passionn\xe9 de restauration, il a acquis une double exp\xe9rience en restauration traditionnelle puis en restauration collective aupr\xe8s d\u2019institutions exigeantes. Il est le garant du bon respect des normes d\u2019hygi\xe8ne et de s\xe9curit\xe9 des repas livr\xe9s, ainsi que le responsable de la communication de ce projet."},{alt:"Portrait - Valentin MOISAN",photoURL:"foo",txt:"Valentin est un jeune chef en devenir qui r\xe9alise actuellement ses classes aupr\xe8s de la talentueuse St\xe9phanie Le Quellec doublement \xe9toil\xe9e au guide Michelin. Ici il vous (propose une cuisine/fera d\xe9couvrir une cuisine) o\xf9 tradition et gastronomie sont \xe9troitement li\xe9es."},{alt:"Portrait - Augustin De Laage",photoURL:"foo",txt:"Augustin \xe0 un parcours riche d'exp\xe9riences il est d\xe9j\xe0 pass\xe9 par de tr\xe8s beaux restaurant en France et en Europe. Il est \xe0 la fois l\u2019organisateur op\xe9rationnel de ce projet et la personne responsable de r\xe9pondre \xe0 vos demande particuli\xe8re."}].map((function(t){return Object(s.jsx)(e,Object(a.a)({},t))}))})]}),Object(s.jsx)(m,{})]})}}];function S(){return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"center main-nav",children:R.map((function(e){var t=e.path,n=e.exact,a=e.name;return Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{exact:n,to:t,children:a})})}))})})}function T(){return Object(s.jsxs)("div",{className:"main-title",children:[Object(s.jsx)("div",{className:"bandeau"}),Object(s.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(s.jsx)(S,{})]})}function V(){return Object(s.jsx)("div",{className:"features-small-item presview",children:Object(s.jsxs)("p",{children:["Les livraisons sont assur\xe9es ",Object(s.jsx)("b",{className:"invalid_menu",children:"uniquement"})," en Ile de France (77, 78, 91, 92, 93, 95).",Object(s.jsx)("br",{}),"L'envoi par coli vous sera factur\xe9 diff\xe9rement selon l'adresse de livraison."]})})}var F={name:"Amuses Bouches",products:[{name:"Maki de saint jacques",description:"Maki de saint jacques citronn\xe9 Delicieux met pour 2 personnes ( 4 pi\xe8ces)",price:7,formik_name:"qt_appetizer1",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg"},{name:"Focaccia",price:5,formik_name:"qt_appetizer2",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",description:"pour 2 personnes"}]},A={name:"Fromage",products:[{name:"Fromage de ch\xe8vre mendiants",photoURL:"",price:5,formik_name:"qt_fromage",description:"Pour 2. Pignon pin & amande"}]},I={name:"Mignardise",products:[{name:"Brochettes d\u2019ananas r\xf4tis",photoURL:"",price:3,formik_name:"qt_cuteness1",description:"Miel &  Gingembre. Pour 2: 2 brochettes & 3 morceaux"},{name:"Choux pralin\xe9s",photoURL:"",price:3,formik_name:"qt_cuteness2",description:"Pour 2 : 4 pi\xe8ces"}]},E={name:"Vins",products:[{name:"Vin blanc",photoURL:"",price:3,formik_name:"qt_vin1",description:"Miel &  Gingembre. Pour 2: 2 brochettes & 3 morceaux"},{name:"Vin Rouge",photoURL:"",price:3,formik_name:"qt_vin2",description:"Miel &  Gingembre. Pour 2: 2 brochettes & 3 morceaux"}]},z={name:"Menus",products:[{name:"Menu 25 \u20ac",products:[{type:"Entr\xe9e",name:"Saumon gravlax  au baies roses",photoURL:"https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",description:"cr\xe8me aigrelette, (Pain de su\xe9dois/ Tuile cranquante) mesclun de salade"},{type:"Plat",name:"Supr\xeame de volaille farcis",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"},{type:"Dessert",name:"Panna cotta mangue et son crumble amandes",photoURL:"https://i.pinimg.com/originals/68/9a/3c/689a3cc24713119447793326bc20e82e.jpg",description:""}],price:25,formik_name:"qt_menu1"},{name:"Menu 39 \u20ac",products:[{type:"Entr\xe9e",name:"Marbr\xe9 de foie gras au banyuls, chutney de poire",shippingDate:"2020-12-26T18:12:55.000Z",composition:[],winelist:[],photoURL:"https://assets.afcdn.com/recipe/20190109/85760_w1024h768c1cx2514cy4785.webp",description:"",createdAt:"2020-12-26T18:12:55.000Z",updatedAt:"2020-12-26T18:12:55.000Z"},[{type:"Plat",name:"ST JACQUES, gnocchi, pur\xe9e de cresson",photoURL:"https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"},{type:"Plat",name:"Quasi de veau r\xf4tie, fricass\xe9 de pommes grenailles et champignon, jus court perl\xe9",photoURL:"https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"}],{type:"Dessert",name:"Un truc au chocolat",photoURL:"http://qccdn.ar-cdn.com/recipes/land960/1e270268-47d6-40f6-aa34-687c1c1953df.jpg",description:"Un truc au chocolat bon mais whallah flemme"}],price:39,formik_name:"qt_menu2"}]},G=i.a.createContext({});var D=function(){return Object(s.jsx)(G.Provider,{value:{Menus:z,appetizer:F,cheeses:A,cuteness:I,wines:E},children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(T,{}),Object(s.jsx)(V,{}),Object(s.jsx)(v.c,{children:R.map((function(e){var t=e.path,n=e.exact,c=e.component;return Object(s.jsx)(v.a,Object(a.a)(Object(a.a)({path:t},n),{},{component:c}))}))})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},J=n(21),Q=n(42),Z={position:J.b.TOP_RIGHT,timeout:5e3,offset:"30px",type:"success",transition:J.c.FADE};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(u.a,{children:Object(s.jsx)(J.a,Object(a.a)(Object(a.a)({template:Q.a},Z),{},{children:Object(s.jsx)(D,{})}))})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.bfcc4be6.chunk.js.map