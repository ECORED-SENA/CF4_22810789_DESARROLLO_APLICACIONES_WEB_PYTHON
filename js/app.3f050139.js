(function(e){function a(a){for(var o,t,c=a[0],s=a[1],u=a[2],d=0,l=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&l.push(r[t][0]),r[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==r[c]&&(o=!1)}o&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"ddbab8b9","chunk-0206bfa0":"27b6d574","chunk-0c047e41":"5e6a757e","chunk-13a6037e":"a235e748","chunk-18f95272":"106200cd","chunk-25b302c8":"c9d14723","chunk-26fc7596":"a5ef8d66","chunk-2c06842c":"f468f130","chunk-2d0c5615":"6931fd9d","chunk-2d0e96ec":"eeaf3605","chunk-2d208d90":"a577904a","chunk-2d21d0e2":"b5e04bc7","chunk-2d22c123":"83c43e3e","chunk-2d2747e2":"dfb3ada1","chunk-2e80bb9a":"1ca28982","chunk-319206de":"163b92db","chunk-32334cb6":"0b79ace8","chunk-36769079":"1f5c73a4","chunk-3c57cd7b":"0e2ed519","chunk-4cdd78c0":"f1d3a09a","chunk-4f2d402a":"5e9a0c89","chunk-515a8379":"9a933d9e","chunk-53ccb27e":"d2228215","chunk-55d286b8":"d48f35ae","chunk-59974754":"d9a29456","chunk-60cbc06b":"f3f27ad3","chunk-659152b8":"4806969b","chunk-6e1e538a":"39dfbdb2","chunk-766a929b":"7573cf80","chunk-c796899c":"1949e87d","chunk-e8a7823a":"d1cd9406","chunk-f2df7d2c":"dd6c9d60","chunk-fde47172":"14c01bac",comple:"ed9a927f",creditos:"dbe4816b",glosario:"c6e3858d",intro:"3fe346fc",referencias:"db5dc94a",sintesis:"3a8300d9",tema1:"67b51e3a",tema2:"92867d47",tema3:"b5497250"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"cd95946a","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a3bbbf90","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"76a00081","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"60c237d2",creditos:"e61c14b5",glosario:"9e53d68b",intro:"31d6cfe0",referencias:"c6828eaa",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===r))return a()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===o||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],m.parentNode.removeChild(m),n(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",l.name="ChunkLoadError",l.type=o,l.request=t,n[1](l)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=a,u=u.slice();for(var l=0;l<u.length;l++)a(u[l]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.2c9deaa0.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=n("2877"),u=Object(s["a"])(c,t,r,!1,null,null,null),d=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");l["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema3").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Arquitecturas, lógica y despliegue de aplicaciones",descripcionCurso:"El componente formativo está orientado a entregar los conocimientos sobre: el manejo de las arquitecturas para la construcción de aplicaciones, la lógica que se aplica para el funcionamiento de esta y el despliegue de la aplicación en un servidor de producción.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"¿Qué es un patrón de arquitectura?",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Lenguaje de consulta",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Integración de la capa lógica en las interfaces de usuario",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Servicios web",desarrolloContenidos:!0},{nombreRuta:"tema5",numero:"5",titulo:"Despliegue de aplicaciones en la web",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/22810789_CF04_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar HTML",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Lenguaje de consulta",referencia:"1Keydata.com. (2022). <em>Tutorial de SQL: curso de SQL.</em> 1Keydata.com. ",tipo:"Tutorial web",link:"https://www.1keydata.com/es/sql/"},{tema:"Servicios web",referencia:"Rodríguez de Sepúlveda Maillo, D. (2015). <em>Administración de servicios web.</em> Ra-Ma",tipo:"Libro",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB106473"},{tema:"Servicios web",referencia:"Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y  Abrutsky, M. (2012). <em>Bases de datos.</em> Alfaomega Grupo Editor. ",tipo:"Libro",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061572"}],glosario:[{termino:"Bases de datos",significado:"Es una aplicación que permite el almacenamiento de información de manera organizada y luego poder recuperar dicha información."},{termino:"CSS",significado:"Es un lenguaje que permite la creación de hojas de estilo para ubicar y mejorar el diseño de una página web."},{termino:"Formulario",significado:"Es un conjunto de controles que se agrupan para recolectar información a un posible usuario dentro de una página web."},{termino:"<em>Front-end</em>",significado:"Es el nombre técnico que recibe la parte del sistema que se encarga de la interacción con el usuario final."},{termino:"HTML",significado:"Lenguaje de etiquetado que permite estructurar una página web."},{termino:"MVC",significado:" Modelo Vista Controlador, es una estructura de trabajo que permite independizar cada una de las partes de un programa, en este caso un sitio web o aplicativo web."},{termino:"Servidor web",significado:"Es una máquina dedicada a colocar los archivos de ejecución de una página web y hacerla visible para muchos usuarios."}],referencias:[{referencia:"MDN Web Docs. (s.f.) <em>Proyecto constrúyelo mejor.</em> Mozilla recursos para desarrolladores."},{referencia:"Pavón, J. (2008). <em>Estructura de las aplicaciones orientadas a objetos. El patrón Modelo-Vista-Controlador (MVC).</em>Universidad Complutense de Madrid.",link:"https://www.fdi.ucm.es/profesor/jpavon/poo/2.14.mvc.pdf"},{referencia:"Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y Abrutsky, M. (2012). <em>Bases de datos.</em> Alfaomega Grupo Editor.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061572"},{referencia:"Rodríguez de Sepúlveda Maillo, D. (2015). <em>Administración de servicios web.</em>Ra-Ma.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB106473"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Zvi Daniel Grosman Landáez",cargo:"Diseñador Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Dulfrán Antonio Montaño Montaño",cargo:"Experto Temático",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Correctora de Estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Juan Daniel Polánco Muñoz ",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Desarrollador Fullstack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres ",cargo:"Storyboard e Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Mary Jeans Palacio Camacho ",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Ricardo Mutis",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.609f9c78.png"},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.ea9d2475.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.48476404.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.972cd56e.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.3f050139.js.map