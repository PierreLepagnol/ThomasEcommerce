(this.webpackJsonpwebstore=this.webpackJsonpwebstore||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(16),s=n(1),c=n(0),i=n.n(c),r=n(15),o=n.n(r),l=(n(50),n(51),n(52),n(53),n(2)),u=n(18),m=n.n(u),p=n(21),d=n(25),j=n(19),h=n(24),b=n.n(h);function x(){var e=Object(j.d)(),t=Object(d.a)({initialValues:{name:"",phone:"",email:""},onSubmit:function(e){n(e)}}),n=function(){var t=Object(p.a)(m.a.mark((function t(n){var s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,b.a.post("http://localhost:3001/contact/new_msg",Object(a.a)({},n));case 3:s=t.sent,console.log(s),e.show("Oh look, an alert!");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsxs)("form",{className:"col",onSubmit:t.handleSubmit,children:[[{id:"name",name:"name",placeholder:"Nom - Prenom",type:"text"},{id:"phone",name:"phone",placeholder:"Numero de telephone",type:"tel"},{id:"email",name:"email",placeholder:"Courriel",type:"email"},{id:"msg",name:"msg",placeholder:"Message",type:"text-area"}].map((function(e){return Object(s.jsx)(O,{input:e,onChange:t.handleChange,value:t.values},e.id)})),Object(s.jsx)("button",{type:"submit",disabled:!1,children:"Envoyer"})]})}var O=function(e){var t=e.input,n=e.onChange,a=e.value;switch(t.type){case"text-area":return Object(s.jsx)("textarea",{name:t.name,placeholder:t.placeholder,cols:"25",rows:"10"});default:return Object(s.jsx)("input",{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,onChange:n,value:a[t.name]})}},f=n(44),v=n(17),g=n(13);function _(){var e=i.a.useContext(W),t=e.entree,n=e.plat,a=e.dessert,c=e.entree2,r=e.plat2,o=e.dessert2,l=e.appetizer,u=e.cheeses,j=e.cuteness,h=[{entree:t,plat:n,dessert:a,price:25},{entree:c,plat:r,dessert:o,price:39},l,u,j],x=Object(v.useStripe)(),O=Object(v.useElements)(),g=i.a.useState(!1),_=Object(f.a)(g,2),N=_[0],q=_[1],C=Object(d.a)({initialValues:{name:"",phone:"",line1:"",city:"",postal_code:"",email:"",qt_menu1:0,qt_menu2:0,qt_appetizer1:0,qt_appetizer2:0,qt_fromage:0,qt_cuteness1:0,qt_cuteness2:0},onSubmit:function(e){L(e)}}),L=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,s,c,i,r,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x&&O){e.next=2;break}return e.abrupt("return");case 2:return q(!0),console.log(t),a={name:t.name,phone:t.phone,address:{line1:t.line1,city:t.city,postal_code:t.postal_code},email:t.email},e.next=7,b.a.post("http://localhost:3001/payment_intents",{amount:100*n});case 7:return s=e.sent,c=s.data,console.log(c),i=O.getElement(v.CardElement),e.next=13,x.createPaymentMethod({type:"card",card:i,billing_details:a});case 13:return r=e.sent,r.error,o=r.paymentMethod,e.next=18,x.confirmCardPayment(c,{payment_method:o.id});case 18:l=e.sent,console.log(l);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{formik:C,product:h}),Object(s.jsx)(y,{isProcessing:N,formik:C,product:h}),Object(s.jsx)("h3",{children:"Ma carte"}),Object(s.jsxs)("ul",{className:"food_sumup",children:[0===C.values.qt_menu1?null:Object(s.jsxs)("li",{children:["Menu 1 X ",C.values.qt_menu1," (",h[0].price*C.values.qt_menu1," \u20ac)"]}),0===C.values.qt_menu2?null:Object(s.jsxs)("li",{children:["Menu 2 X ",C.values.qt_menu2," (",h[1].price*C.values.qt_menu2," \u20ac)"]}),0===C.values.qt_appetizer1?null:Object(s.jsxs)("li",{children:[" ",l.products[0].name,"X ",C.values.qt_appetizer1," (",l.products[0].price*C.values.qt_appetizer1," \u20ac)"]}),0===C.values.qt_appetizer2?null:Object(s.jsxs)("li",{children:[" ",l.products[1].name,"X ",C.values.qt_appetizer1," (",l.products[1].price*C.values.qt_appetizer2," \u20ac)"]}),0===C.values.qt_fromage?null:Object(s.jsxs)("li",{children:[" ",u.products[0].name,"X ",C.values.qt_fromage," (",u.products[0].price*C.values.qt_fromage," \u20ac)"]}),0===C.values.qt_cuteness1?null:Object(s.jsxs)("li",{children:[" ",j.products[0].name,"X ",C.values.qt_cuteness1," (",j.products[0].price*C.values.qt_cuteness1," \u20ac)"]}),0===C.values.qt_cuteness2?null:Object(s.jsxs)("li",{children:[" ",j.products[1].name,"X ",C.values.qt_cuteness2," (",j.products[1].price*C.values.qt_cuteness2," \u20ac)"]})]}),Object(s.jsxs)("p",{children:["Total : ",h.price," x ",1,"=",1*h.price," \u20ac"]}),Object(s.jsxs)("p",{children:["Les livraisons sont assur\xe9es ",Object(s.jsx)("b",{children:"uniquement"})," en Ile de France (77, 78, 91, 92, 93, 95).",Object(s.jsx)("br",{})," L'envoi par coli vous sera factur\xe9 diff\xe9rement selon l'adresse de livraison"]})]})}var y=function(e){var t=e.formik,n=e.isProcessing;e.product;return Object(s.jsxs)("form",{className:"col margin-bottom",onSubmit:t.handleSubmit,children:[[[{id:"name",name:"name",placeholder:"Nom - Prenom",type:"text"},{id:"line1",name:"line1",placeholder:"Adresse de livraison",type:"text"}],[{id:"email",name:"email",placeholder:"Courriel",type:"email"},{id:"postal_code",name:"postal_code",placeholder:"Code Postal",type:"text"}],[{id:"phone",name:"phone",placeholder:"Numero de telephone",type:"tel"},{id:"city",name:"city",placeholder:"Ville",type:"text"}]].map((function(e){return Object(s.jsx)("div",{className:"row",children:e.map((function(e){return Object(s.jsx)(N,{input:e,onChange:t.handleChange,value:t.values},e.id)}))})})),Object(s.jsx)(v.CardElement,{options:{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"1em","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},hidePostalCode:!0}}),Object(s.jsx)("button",{type:"submit",disabled:n,children:n?"Commande en cours..":"Commander Immediatement"})]})},N=function(e){var t=e.input,n=e.onChange,a=e.value;switch(t.type){case"text-area":return Object(s.jsx)("textarea",{name:"Text1",cols:"20",rows:"5"});default:return Object(s.jsx)("input",{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,onChange:n,value:a[t.name]})}},w=function(e){var t=e.formik,n=i.a.useContext(W),a=n.appetizer,c=n.cheeses,r=n.cuteness,o=[{name:"Menus",items:[{name:"Menu 1",formik_name:"qt_menu1"},{name:"Menu 2",formik_name:"qt_menu2"}]},{name:"Amuses Bouches",items:a.products},{name:"Fromage",items:c.products},{name:"Mignardise",items:r.products}],u=Object(l.g)(),m=u.path,p=u.url;return Object(s.jsxs)("div",{className:"margin-bottom",children:[Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"center nav-item",children:o.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(g.b,{to:"".concat(p,"/").concat(e.name),children:e.name})})}))})}),Object(s.jsx)(l.c,{children:o.map((function(e){return Object(s.jsx)(l.a,{path:"".concat(m,"/").concat(e.name),children:Object(s.jsx)(q,{item:e,onChange:t.handleChange,value:t.values})})}))})]})},q=function(e){var t=e.item,n=e.onChange,a=e.value,c=Object(l.f)().product;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{children:c}),Object(s.jsx)("div",{className:"row",children:t.items.map((function(e){return Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("label",{children:e.name}),Object(s.jsx)("input",{type:"number",id:e.formik_name,name:e.formik_name,min:"0",max:"100",onChange:n,value:a[e.formik_name]})]})}))})]})},C=n(42),L=Object(C.a)("pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV");function P(e){var t=e.product;return Object(s.jsxs)("div",{className:"sidebar features-small-item",children:[Object(s.jsx)("h2",{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/Menu",children:"La Carte Saint Valentin"}),Object(s.jsx)(l.a,{exact:!0,path:"/",children:"Nous Contacter"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/Menu",children:Object(s.jsx)(v.Elements,{stripe:L,children:Object(s.jsx)(_,{product:t})})}),Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(x,{})})]})})]})}function M(){var e=i.a.useContext(W),t=e.entree,n=e.plat,a=e.dessert,c=e.entree2,r=e.plat2,o=e.dessert2,l=e.appetizer,u=e.cheeses,m=e.cuteness,p={name:"Menu 25 \u20ac",products:[t,n,a],price:25,winelist:[],shippingDate:"2020-12-26T18:12:55.000Z"},d={name:"Menu 39 \u20ac",products:[c,r,o],price:39,winelist:[],shippingDate:"2020-12-26T18:12:55.000Z"};return Object(s.jsxs)("div",{className:"main-view",children:[Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)(k,{item:p}),Object(s.jsx)(k,{item:d}),Object(s.jsx)(k,{item:l}),Object(s.jsx)(k,{item:u}),Object(s.jsx)(k,{item:m})]}),Object(s.jsx)(P,{})]})}function k(e){var t=e.item;return Object(s.jsxs)("div",{className:"features-small-item margin-bottom",children:[Object(s.jsx)("h2",{children:t.name}),t.products.map((function(e){return Object(s.jsx)(S,Object(a.a)({},e))}))]})}function S(e){var t=e.type,n=e.name,a=e.description,c=e.photoURL,i=e.price;return Object(s.jsxs)("div",{className:"card",children:[""===c?null:Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{alt:"desc",className:"img_desc",src:c})}),Object(s.jsxs)("div",{className:"text-container",children:[Object(s.jsxs)("h2",{className:"title-card",children:[void 0===t?null:"".concat(t," : "),Object(s.jsx)("b",{children:n}),void 0===i?null:"- ".concat(i," \u20ac")]}),Object(s.jsx)("p",{children:a})]})]})}var U=n.p+"static/media/3canardslogo.41f21247.png";function T(){return Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{className:"center main-nav",children:[Object(s.jsx)("li",{children:Object(s.jsx)(g.b,{to:"/Menu",children:"Menu St Valentin"})}),Object(s.jsx)("li",{children:Object(s.jsx)(g.b,{to:"/",children:"Le Concept"})})]})})}function R(){return Object(s.jsxs)("div",{className:"main-title",children:[Object(s.jsx)("div",{className:"bandeau"}),Object(s.jsx)("img",{src:U,className:"App-logo",alt:"logo"}),Object(s.jsx)(T,{})]})}function V(){return Object(s.jsx)("div",{className:"features-small-item presview",children:Object(s.jsx)("p",{children:"Les trois canards reviennents ....bla bla bla"})})}function z(){return Object(s.jsxs)("div",{className:"features-small-item presview",children:[Object(s.jsx)(F,{}),Object(s.jsx)(A,{})]})}function F(){return Object(s.jsxs)("div",{className:"pad-15",children:[Object(s.jsx)("h2",{className:"title-card",children:"Qui sommes nous ?"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col third",children:[Object(s.jsx)("img",{alt:"Portrait - Thomas LEPAGNOL",className:"img_desc",src:"foo"}),Object(s.jsx)("p",{children:"Description Thomas"})]}),Object(s.jsxs)("div",{className:"col third",children:[Object(s.jsx)("img",{alt:"Portrait - Valentin Moisan",className:"img_desc",src:"foo"}),Object(s.jsx)("p",{children:"Description Valentin"})]}),Object(s.jsxs)("div",{className:"col third",children:[Object(s.jsx)("img",{alt:"Portrait - Augustin De Laage",className:"img_desc",src:"foo"}),Object(s.jsx)("p",{children:"Description Augustin"})]})]})]})}function A(){return Object(s.jsxs)("div",{className:"pad-15",children:[Object(s.jsx)("h2",{className:"title-card",children:"Que proposons-nous ?"}),Object(s.jsxs)("div",{className:"col space-around",children:[Object(s.jsx)("img",{alt:"IMG - Concept des Trois Canards",style:{width:"20%"},className:"img_desc",src:"http://www.chapin-traiteur.com/images/buffet/CHAPIN-TRAITEUR---buffet---Lunch-salades-2-min.jpg"}),Object(s.jsx)("p",{children:"Description du concept"})]})]})}var D={type:"Entr\xe9e",name:"Saumon gravlax  au baies roses",photoURL:"https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",description:"cr\xe8me aigrelette, (Pain de su\xe9dois/ Tuile cranquante) mesclun de salade"},E={type:"Plat",name:"Supr\xeame de volaille farcis",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"},I={type:"Dessert",name:"Panna cotta mangue et son crumble amandes",photoURL:"https://i.pinimg.com/originals/68/9a/3c/689a3cc24713119447793326bc20e82e.jpg",description:""},X={type:"Entr\xe9e",name:"Marbr\xe9 de foie gras au banyuls, chutney de poire",shippingDate:"2020-12-26T18:12:55.000Z",composition:[],winelist:[],photoURL:"https://assets.afcdn.com/recipe/20190109/85760_w1024h768c1cx2514cy4785.webp",description:"",createdAt:"2020-12-26T18:12:55.000Z",updatedAt:"2020-12-26T18:12:55.000Z"},Z=[{type:"Plat",name:"ST JACQUES, gnocchi, pur\xe9e de cresson",photoURL:"https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"},{type:"Plat",name:"Quasi de veau r\xf4tie, fricass\xe9 de pommes grenailles et champignon, jus court perl\xe9",photoURL:"https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",description:"Volaille farcis aux champignons, pomme macaire, sauce supr\xeame"}],B={type:"Dessert",name:"Un truc au chocolat",photoURL:"http://qccdn.ar-cdn.com/recipes/land960/1e270268-47d6-40f6-aa34-687c1c1953df.jpg",description:"Un truc au chocolat bon mais whallah flemme"},G={name:"Amuses Bouches",products:[{name:"Maki de saint jacques citronn\xe9",description:"Delicieux met pour 2 personnes ( 4 pi\xe8ces)",price:7,formik_name:"qt_appetizer1",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg"},{name:"Focaccia",price:5,formik_name:"qt_appetizer2",photoURL:"https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",description:"pour 2 personnes"}],shippingDate:"2020-12-26T18:12:55.000Z"},J={name:"Fromage",products:[{name:"Fromage de ch\xe8vre mendiants",photoURL:"",price:5,formik_name:"qt_fromage",description:"Pour 2. Pignon pin & amande"}]},H={name:"Mignardise",products:[{name:"Brochettes d\u2019ananas r\xf4tis marin\xe9s",photoURL:"",price:3,formik_name:"qt_cuteness1",description:"Miel &  Gingembre. Pour 2: 2 brochettes & 3 morceaux"},{name:"Choux pralin\xe9s",photoURL:"",price:3,formik_name:"qt_cuteness2",description:"Pour 2 : 4 pi\xe8ces"}]},Q={name:"Vins",products:[{name:"Vin blanc",photoURL:"",price:3,description:""},{name:"Vin Rouge",photoURL:"",price:3,description:""}]},W=i.a.createContext({});var K=function(){return Object(s.jsx)(W.Provider,{value:{entree:D,plat:E,dessert:I,entree2:X,plat2:Z,dessert2:B,appetizer:G,cheeses:J,cuteness:H,wines:Q},children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(R,{}),Object(s.jsx)(V,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:z}),Object(s.jsx)(l.a,{path:"/Menu",component:M})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},$=n(43),ee={position:j.b.TOP_RIGHT,timeout:5e3,offset:"30px",type:"success",transition:j.c.FADE};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g.a,{children:Object(s.jsx)(j.a,Object(a.a)(Object(a.a)({template:$.a},ee),{},{children:Object(s.jsx)(K,{})}))})}),document.getElementById("root")),Y()}},[[77,1,2]]]);
//# sourceMappingURL=main.b7d42cf9.chunk.js.map