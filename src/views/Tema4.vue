<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicios web


    .row.align-items-center.mb-5
      .col-xl-4
        figure.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema4/img1.svg', alt="", style="max-width: 400px")(data-aos="zoom-in").m-auto
      .col-xl-8
        p(data-aos="fade-up") Son un conjunto de tecnologías que permiten el acceso de la información de diferentes fuentes y aplicaciones.

        p.mb-4(data-aos="fade-up") Su alimentación principal es la interacción con los diferentes subsistemas que se encuentran en la red, ahora bien, los servicios web proporcionan gran parte de la dinámica que se genera a través de Internet y que proporciona el flujo de información que se presenta todos los días, con ejemplos como:

        .bg-c10.p-4(data-aos="fade-up")
          ul.lista-ul.my-0.text-white
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Los servicios de correo electrónico.
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Servicios de alojamiento de información.
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Servicios de redes sociales, entre muchos otros.


    .bg-c12.mb-5
      .px-2.px-lg-5
        .bg-c9.p-4.mb-4
          p(data-aos="fade-left") Todos estos se encuentran soportados por servicios  web. Se entiende que dependiendo de las necesidades que se tengan se puede contratar según las capacidades técnicas requeridas, siendo su costo razonable de acuerdo con lo que ofrecen, convirtiéndose, además, en la ventaja competitiva para las organizaciones.

          p(data-aos="fade-right") Los servicios web varían desde el despliegue de las aplicaciones hasta complejas infraestructuras que permiten a grandes organizaciones soportar todos los servicios que estas requieren para funcionar.

          p(data-aos="fade-up") Ahora bien, es importante tener en cuenta que los servicios web se utilizan para realizar el intercambio de información que puede requerir una aplicación. Para esto utiliza unos protocolos específicos para realizar estas operaciones teniendo como base el protocolo de transferencia http.

        .row.justify-content-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema4/img2.svg", style= "width: 85px", alt="")(data-aos="zoom-in")
          .col-lg
            p.mb-4(data-aos="fade-left") Se sabe que las comunicaciones son un punto importante hoy en día ya que todo está conectado con diversas fuentes de información y aplicaciones de propósito específico y general; es decir, la comunicación tal y como se ve hoy en día no se visualizaba de esa manera hace muchos años. La mayoría de las aplicaciones solucionaban problemas de manera local y solo algunos servicios tales como correo electrónico y consultas eran los que requerían la conectividad a Internet.

            p.mb-0(data-aos="fade-right") Hoy en día, de acuerdo con la demanda de los procesos del mercado actual, prácticamente una aplicación que no tenga la posibilidad de utilizar servicios de comunicación, compartir o intercambiar con otras aplicaciones está propensa a desaparecer. Esto ha generado toda una dinámica interesante en todos los sectores de la industria, ya que existe un acto llamado seguridad, que puede estar presente en cada uno de estos procesos.

        .row.justify-content-center.mb-5
          .col-xl-10
            .bg-c11.p-4

              h5 ¿Qué es un #[em web service]?

              p El concepto hace referencia al sistema de comunicación, los protocolos y los estándares entre dos dispositivos electrónicos conectados a la misma red para intercambiar datos entre sistemas o aplicaciones.

              p Es un #[em software] creado para la comunicación entre máquina y máquina y la interoperabilidad entre ellas.

              p.mb-0 Uno de los elementos clave de este sistema es el XML #[em (Extensible Markup Language] o Lenguaje de Marcado Extensible en español). Es la manera en que están codificados o programados los datos para que se puedan procesar por diferentes sistemas, es decir, es un lenguaje estándar que permite que se dé la comunicación aun cuando las aplicaciones o sistemas usen lenguajes diferentes de programación.

    h5.mb-3(data-aos="fade-up") Tipos y beneficios del #[em web service]
    p.mb-5(data-aos="fade-up") Existen dos tipos de #[em web services] que se diferencian por sus estándares: el #[em SOAP y el RESTful], los cuales tienen varios beneficios de uso en diferentes sectores productivos. Se profundiza en todo esto a continuación:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="SOAP")
        h4 SOAP
        p.mb-4 El SOAP #[em(Simple Object Access Protocol)] se trata de un protocolo basado en el lenguaje XML, estándar de comunicación que permite enviar y recibir mensajes del servicio web entre varios sistemas o aplicaciones. Por lo tanto, se puede decir que SOAP define cómo es la comunicación y utiliza el protocolo HTTP para ello.
        p.mb-4 El HTTP o protocolo de transferencia de hipertexto se refiere al protocolo que permite realizar una petición de datos y recursos. Es de los más utilizados en Internet por buscadores como Google y servidores.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="RESTful")
        h4 RESTful
        p.mb-4 #[em RESTful] son las aplicaciones de #[em Web service] procedente de la arquitectura de #[em software REST (Representational State Transfer)] y, a diferencia del SOAP, este no se encuentra estructurado bajo estándares definidos y siendo este más ligero.
        p.mb-4 Además, su flexibilidad permite que no funcione únicamente con lenguaje XML, sino también puede funcionar bajo JSON (JavaScript Object Notation) u otros lenguajes de programación.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Beneficios")
        h4 Beneficios
        p.mb-4 Uno de los más relevantes en el sector industrial es poder acceder a programas o aplicaciones sin necesidad de tenerlos instalados en su ordenador porque están alojados en el #[em web service.] De esta manera, siempre accederá al mismo contenido sin que haya pérdidas de la información.
        p.mb-4 No obstante, un #[em web service] sirve para poder acceder a cualquier tipo de archivos y contenidos que tenga alojados en un alojamßiento web o #[em hosting.]

        P.mb-4 Es esencial contar con un #[em web service] de calidad si en su empresa tiene automatizados procesos en red con PLC’s, sistemas de supervisión y control de los procesos productivos o sistemas SCADA. Estos deben de contar con una buena conexión para asegurar un correcto funcionamiento.

    p.mb-4(data-aos="fade-up") La interacción que los servicios web ofrecen es la conexión mediante protocolos e interfaces y el intercambio  de diferentes servicios e información que se puede dar entre estas mismas aplicaciones. Esto para obtener un beneficio propio, tal y como se puede apreciar en el siguiente ejemplo:

    .bg-c10.p-4.mb-5
      .row
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema4/img3.svg", style= "width: 90px", alt="")(data-aos="zoom-in")
        .col
          p.mb-0.text-white  Un cliente ingresa a través de una interfaz gráfica a la página de un sitio de un agente de viajes. Este tiene un servicio web instalado que proporciona información y datos al usuario sobre el proceso que este implica, pero a su vez está conectado con otra interfaz que permite, por ejemplo, si el cliente requiere solicitar alojamiento en algún hotel a través de la página web lo podrá hacer o si requiere utilizar los servicios del banco para pagar su reservación, también, ya que tiene la conexión con dichos procesos y servicios.

    .row.justify-content-center.mb-4.pb-4.mt-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4. <br> #[span #[em Servicios web]]
        figure.figura
          img(src="@/assets/curso/temas/tema4/figura4.svg", alt="La imagen muestra un diagrama que representa un ejemplo de servicios web de una agencia de viajes. En el diagrama, se pueden identificar diferentes componentes y funcionalidades relacionadas con los servicios ofrecidos por la agencia. Se visualizan módulos y además, se observan conexiones y flujos de información entre los diferentes servicios, indicando la interacción y dependencia entre ellos.")(data-aos="zoom-in")


    p Esto se puede observar en la páginas de #[em e-commerce], en las cuales se ofrecen los servicios de pagos en línea, entre otros. Este es un claro ejemplo del uso de servicios web, ya que la aplicación de #[em e-commerce] está instalada en un servidor y está siendo administrada por una empresa o particular; pero en cierto modo, tiene la posibilidad de realizar el pago en línea y es allí donde el proceso toma fuerza, ya que al momento que se desee cancelar y utilizar medios electrónicos automáticamente se redireccionará al cliente a la página del banco para realizar el proceso.

    p Una vez este culmine retornará a la página del sitio de #[em e-commerce] para finalizar el proceso de compra.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
