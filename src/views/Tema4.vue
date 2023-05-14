<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicios web


    .row.align-items-center
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg')
      .col-xl-8
        p Son un conjunto de tecnologías que permiten el acceso de la información de diferentes fuentes y aplicaciones.

        p.mb-4 Su alimentación principal es la interacción con los diferentes subsistemas que se encuentran en la red, ahora bien, los servicios web proporcionan gran parte de la dinámica que se genera a través de Internet y que proporciona el flujo de información que se presenta todos los días, con ejemplos como:

        .bg-c10.p-4
          ul.lista-ul.my-0.text-white
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Los servicios de correo electrónico.
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Servicios de alojamiento de información.
            li.lista-ul__vineta.mb-2
              p.mb-0.text-white Servicios de redes sociales, entre muchos otros.


    .bg-c12.mb-5
      .px-5
        .bg-c9.p-4.mb-4
          p Todos estos se encuentran soportados por servicios web, se entiende que dependiendo de las necesidades que se tengan se pueden contratar según las capacidades técnicas requeridas, siendo su costo razonable de acuerdo con lo que ofrecen y que se convierte en la ventaja competitiva para las organizaciones.

          p Los servicios web varían desde el despliegue de las aplicaciones hasta complejas infraestructuras que permiten a grandes organizaciones soportar todos los servicios que estas requieren para funcionar. De esta manera se puede decir que de acuerdo con la necesidad que tenga el cliente, así será el tipo de infraestructura que implementa.

          p Ahora bien, es importante tener en cuenta que los servicios web se utilizan para realizar el intercambio de información que puede requerir una aplicación. Para esto utiliza unos protocolos específicos para realizar estas operaciones teniendo como base el protocolo de transferencia http.

        .row.justify-content-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema4/img2.svg", style= "width: 85px")
          .col-lg
            p.mb-4 Sabe que las comunicaciones son un punto importante hoy en día ya que todo está conectado con diversas fuentes de información y aplicaciones de propósito específico y general, es decir, la comunicación tal y como la ve hoy en día no se visualizaba de esa manera hace muchos años, la mayoría de las aplicaciones solucionaban problemas de manera local y solo algunos servicios tales como correo electrónico y consultas eran los que requerían la conectividad a Internet.

            p.mb-0 Hoy en día de acuerdo con la demanda de los procesos del mercado actual prácticamente una aplicación que no tenga la posibilidad de utilizar servicios de comunicación, compartir o intercambiar con otras aplicaciones está propensa a desaparecer. Esto ha generado toda una dinámica interesante en todos los sectores de la industria, ya que existe un acto llamado seguridad, que puede estar presente en cada uno de estos procesos.

        .row.justify-content-center.mb-5
          .col-xl-10
            .bg-c11.p-4

              h5 ¿Qué es un web service?

              p El concepto hace referencia al sistema de comunicación, los protocolos y los estándares entre dos dispositivos electrónicos conectados a la misma red para intercambiar datos entre sistemas o aplicaciones.

              p Es un software creado para la comunicación entre máquina y máquina y, la interoperabilidad entre ellas.

              p.mb-0 Uno de los elementos clave de este sistema es el XML (Extensible Markup Language o Lenguaje de Marcado Extensible en español). Es la manera en que están codificados o programados los datos para que se puedan procesar por diferentes sistemas, es decir, es un lenguaje estándar que permite que se dé la comunicación aun cuando las aplicaciones o sistemas usen lenguajes diferentes de programación.

    h5.mb-3 Tipos y beneficios del web service
    p.mb-5 Existen dos tipos de web services que se diferencian por sus estándares (el SOAP y el RESTful) y varios beneficios del uso de estos servicios en diferentes sectores productivos, pero enfocarse en el sector industrial. Se profundiza en todo esto a continuación:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="SOAP")
        h4 SOAP
        p.mb-4 El SOAP (Simple Object Access Protocol) se trata de un protocolo basado en el lenguaje XML, estándar de comunicación que permite enviar y recibir mensajes del servicio web entre varios sistemas o aplicaciones. Por lo tanto, se puede decir que SOAP define cómo es la comunicación y utiliza el protocolo HTTP para ello. El HTTP o protocolo de transferencia de hipertexto se refiere al protocolo que permite realizar una petición de datos y recursos. Es de los más utilizados en Internet por buscadores como Google y servidores.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="RESTful")
        h4 RESTful
        p.mb-4 RESTful son las aplicaciones de Web service procedente de la arquitectura de software REST (Representational State Transfer) y, a diferencia del SOAP, este no se encuentra estructurado bajo estándares definidos y siendo este más ligero. Además, su flexibilidad permite que no funcione únicamente con lenguaje XML, sino también puede funcionar bajo JSON (JavaScript Object Notation) u otros lenguajes de programación.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Beneficios")
        h4 Beneficios
        p.mb-4 Uno de los más relevantes en el sector industrial es poder acceder a programas o aplicaciones sin necesidad de tenerlos instalados en su ordenador, porque están alojados en el Web service. De esta manera, siempre accederá al mismo contenido sin que haya pérdidas de la información. No obstante, un Web service sirve para poder acceder a cualquier tipo de archivos y contenidos que tenga alojados en un alojamiento web o hosting.

        P.MB-4 Es esencial contar con un Web service de calidad si en su empresa tiene automatizados procesos en red con PLC’s, sistemas de supervisión y control de los procesos productivos o sistemas SCADA. Estos deben de contar con una buena conexión para asegurar un correcto funcionamiento.

    p.mb-4 La interacción que los servicios web ofrecen es la conexión mediante protocolos e interfaces, los diferentes servicios e información que se puede intercambiar entre estas mismas aplicaciones. Esto para obtener un beneficio propio, es decir, cómo se puede apreciar en la figura que ilustra el siguiente ejemplo:

    .bg-c10.p-4.mb-5
      .row
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema4/img3.svg", style= "width: 90px")
        .col
          p.mb-0.text-white Un cliente ingresa a través de una interfaz gráfica a la página de un sitio de un agente de viajes, tiene un servicio web instalado que proporciona información y datos al usuario sobre el proceso que este implica, pero a su vez está conectado con otra interfaz que permite, por ejemplo, si el cliente requiere utilizar los servicios del banco para pagar tener conexión con dichos procesos y, si el cliente requiere solicitar alojamiento en algún hotel a través de la página web lo podrá hacer. Ya que está le ofrecerá conexión con este servicio, que de hecho, podrá utilizar el servicio de tarjeta de crédito para cancelar sus reservaciones

    .row.justify-content-center.mb-4.pb-4.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4. #[span Servicios web]
        figure.figura
          img(src="@/assets/curso/temas/tema4/figura4.svg")


    p Esto se puede observar en la páginas de e-commerce, en las cuales se ofrecen los servicios de pagos en línea, entre otros, este es un claro ejemplo del uso de servicios web, ya que la aplicación de e-commerce está instalada en un servidor y está siendo administrada por una empresa o particular; pero en cierto modo, tiene la posibilidad de realizar el pago en línea y es allí donde entra el proceso a tomar fuerza, ya que al momento que se desee cancelar y utilizar medios electrónicos automáticamente se redireccionará al cliente a la página del banco para realizar el proceso.

    p Una vez este culmine retornará a la página del sitio de e-commerce para culminar el proceso de compra. Este es un claro ejemplo de servicios web.
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
