(this["webpackJsonpreact-firebase-app"]=this["webpackJsonpreact-firebase-app"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(20),s=n.n(c),i=(n(25),n(3)),u=function(e){var t=e.onClick,n=void 0===t?null:t,a=e.children,r=void 0===a?null:a;return Object(i.jsx)("button",{className:"boton",onClick:n,children:r})},o=n(14),l=n(11),d=n(12);n(29),n(30);d.a.initializeApp({apiKey:"AIzaSyAGGAnxt7K7M6veKv1NwSpiWcvNaKtepSg",authDomain:"firechat-573dd.firebaseapp.com",projectId:"firechat-573dd",storageBucket:"firechat-573dd.appspot.com",messagingSenderId:"1001828762594",appId:"1:1001828762594:web:4de46c43251452b99f6fbb",measurementId:"G-VEM8BM94KN"});var j=d.a.firestore(),p=new d.a.auth.GoogleAuthProvider,b=n(34),f=function(e){var t="";return e&&(t=(t=Object(b.a)(e,new Date)).charAt(0).toUpperCase()+t.slice(1)),t},h=function(e){var t=e.createdAt,n=void 0===t?null:t,a=e.text,r=void 0===a?"":a,c=e.displayName,s=void 0===c?"":c,u=e.photoURL,o=void 0===u?"":u;return r?Object(i.jsxs)("div",{className:"user",children:[o?Object(i.jsx)("img",{className:"photo-user",src:o,alt:"Avatar",title:"{text}"}):null,s?Object(i.jsx)("span",{className:"name-user",children:s}):null,(null===n||void 0===n?void 0:n.seconds)?Object(i.jsx)("span",{className:"date-user",children:f(new Date(1e3*n.seconds))}):null,Object(i.jsx)("p",{className:"mensaje-user",children:r})]}):null},v=function(e){var t=e.user,n=void 0===t?null:t,r=Object(a.useState)([]),c=Object(l.a)(r,2),s=c[0],u=c[1];Object(a.useEffect)((function(){return j.collection("messages").orderBy("createdAt").limit(100).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[]);var p=n.uid,b=n.displayName,f=n.photoURL,v=Object(a.useState)(""),m=Object(l.a)(v,2),O=m[0],x=m[1],g=j.collection("messages"),N=Object(a.useRef)();return Object(a.useEffect)((function(){N.current&&N.current.focus()}),[N]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"messages-container",children:s.map((function(e){return Object(i.jsx)("p",{children:Object(i.jsx)(h,Object(o.a)({},e))},e.id)}))}),Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=O.trim();t&&(g.add({text:t,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:p,displayName:b,photoURL:f}),x(""))},children:[Object(i.jsx)("input",{className:"mensaje",ref:N,type:"text",value:O,onChange:function(e){e.preventDefault(),x(e.target.value)},placeholder:"Escribe tu mensaje aqui...",autoComplete:"off"}),Object(i.jsxs)("button",{className:"boton btn-send",type:"submit",disabled:!O,children:[" ","Enviar"," "]})]})]})},m=n(10),O=n.n(m),x=n(13),g=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.a.auth().useDeviceLanguage(),e.prev=1,e.next=4,d.a.auth().signInWithPopup(p);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();var S=function(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(l.a)(s,2),u=i[0],o=i[1];return Object(a.useEffect)((function(){return e.onAuthStateChanged((function(e){o(e||!1),r&&c(!1)}))}),[e,r]),{user:u,initializing:r}};var C=function(){var e=S(d.a.auth()),t=e.initializing,n=e.user;return Object(i.jsxs)(i.Fragment,{children:[function(){if(t)return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Cargando Espera ..."})})}(),n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{onClick:N,children:" Salir"}),Object(i.jsx)("p",{children:" Bienvenidos al Chat!"}),Object(i.jsx)(v,{user:n})]}):Object(i.jsx)(u,{onClick:g,children:" Sign in with Google "})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.3fbc35d8.chunk.js.map