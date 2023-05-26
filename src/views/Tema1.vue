<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es un patrón de arquitectura?

    .row
      .col-lg-7
        .bg-c2.mb-4.py-3.ps-0.pe-4(data-aos="fade-right")
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px", alt="").me-3
            p.mb-0 Es un modelo que permite llegar a la solución de estructuración de un proyecto de #[em software], este facilita que tanto el proceso de diseño como la construcción del producto se realice de manera correcta, usando técnicas que mantengan la escalabilidad, la seguridad y la operatividad del producto de #[em software] que se desea construir.


        p.mb-4(data-aos="fade-up") Con los patrones de arquitectura también se genera una ruta trazable donde se pueden visualizar cada uno de los componentes que conforman el producto y su aporte al funcionamiento del sistema en general, es decir, se puede desglosar cada parte del #[em software] y conocer su comportamiento y funcionamiento como parte integral del sistema.

        p(data-aos="fade-up") En este caso al poder tener la posibilidad de conocer cada una de sus partes y la interacción que tienen con los demás componentes del #[em software], su modificación y construcción es mucho más sencilla; por lo que se puede construir el #[em software] por componentes y luego agruparlos de manera completa en una sola solución. Al tener dicha posibilidad, si se requiere modificar una parte del #[em software] solo se concentrará en esa y no en todo el conjunto en general; de allí que el escalamiento y la versatilidad de modificaciones sea mucho más fácil para quien está realizando dichos ajustes.
      .col-lg-5
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img1.png", alt="")(data-aos="fade-left")


    .bg-c3.mb-5
      .p-5
        .bg-c4.py-4.px-5.mb-4(data-aos="fade-up")
          .row.justify-content-center
            .col
              .bg-c5
                .bg-c5-body
                  p.mb-4 La arquitectura de #[em software] es una disciplina muy relevante en el mundo del desarrollo #[em web] o App. Ahora, se va a profundizar en los diferentes tipos de arquitectura de #[em software] que existen, pero antes es necesario conocer qué significa esta ciencia.
                  p.mb-0 En el mundo del desarrollo existen complejos problemas a tratar. Si bien es conocido que el #[em software] puede ser más o menos complejo, lo más probable es que vaya mejorando para cubrir nuevas necesidades o funcionalidades. Es por ello que la elección de una estructura o método en el se encajen todas las piezas o componentes es vital para obrar un sistema escalable que dé solución a los problemas del cliente.


        p.mb-4 En la actualidad existen muchos patrones de arquitectura de #[em software], pero se centrará en 2 de ellos:

        .row.justify-content-center.align-items-center.mb-5
          .col-xl-5.mb-3.mb-xl-0
            .bg-c2.p-4(data-aos="zoom-in")
              .row.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema1/img2.svg", style="max-width: 54px", alt="")
                .col
                  p.mb-0 #[strong MVC (Modelo Vista Controlador)]
          .col-xl-5.mb-3.mb-xl-0
            .bg-c2.p-4(data-aos="zoom-in")
              .row.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema1/img3.svg", style="max-width: 63px", alt="")
                .col
                  p.mb-0 #[strong MVT (Modelo Vista #[em Template])]

        p.mb-4(data-aos="fade-up") Estos patrones de arquitectura son los que actualmente rigen el proceso de construcción de las aplicaciones #[em web] en el mercado. Hay que recordar que los patrones están diseñados para que un producto de #[em software] sea elevado a una calidad tal que pueda ser modificado y escalable sin necesidad de tantos esfuerzos por parte de los equipos de desarrollo.

        p.mb-4(data-aos="fade-up") Esto deriva en el uso de buenas prácticas al momento de construcción de un producto de #[em software], eso quiere decir, que se puede garantizar no solo un buen proceso de construcción, sino también la utilización de un estándar de desarrollo a nivel internacional.

        .row
          .col-lg-5.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/temas/tema1/img4.png", alt="")(data-aos="fade-right")
          .col-lg-7
            p.mb-4(data-aos="fade-left") Gracias a este tipo de arquitecturas las aplicaciones de hoy en día pueden ser desplegadas y construidas con mayor facilidad que en otros tiempos. No es un secreto que muchas personas y hasta empresas no utilizan patrones de arquitectura para la construcción de sus productos de #[em software], esto no quiere decir que estos productos no cumplan con los requerimientos que necesitan los clientes.

            p.mb-4(data-aos="fade-up") Estas pueden ser funcionales y de alguna manera solucionar problemas que requiera el sector empresarial; pero lo que sí no se puede dejar de lado es que al momento de realizar una modificación o agregar nuevas funcionalidades, los tiempos de elaboración sí pueden variar de manera negativa, por eso siempre la invitación es a utilizar los estándares y los patrones de arquitectura para garantizar la calidad en los productos de #[em software] que se desarrollen.


    h4.mb-5(data-aos="fade-right") #[span.btn-subtitulo Patrón Modelo Vista Controlador]

    p.mb-4 Es un patrón en el diseño de #[em software] comúnmente utilizado para implementar las interfaces de usuario, los datos y la lógica de control. Enfatiza en una separación entre la lógica de negocios y su visualización.

    p.mb-4 Esta "separación de preocupaciones" proporciona una mejor división del trabajo y una mejora en el mantenimiento. Ver figura.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1. <br> #[span #[em Diagrama del MVC]]
        figure
          img(src="@/assets/curso/temas/tema1/figura1.svg", alt="")(data-aos="zoom-in")


    p.mb-5 Las tres partes del patrón (modelo, vista y controlador) de diseño de #[em software] MVC se pueden describir de la siguiente manera:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Modelo")
        h4 Modelo
        p.mb-4 El modelo define qué datos debe contener la aplicación. Si el estado de estos datos cambia, el modelo generalmente notificará a la vista (para que la pantalla pueda cambiar según sea necesario) y, a veces al controlador (si se necesita una lógica diferente para controlar la vista actualizada).
        p.mb-4 Volviendo a la aplicación de la lista de compras, el modelo especificará qué datos deben contener los artículos de la lista (artículo, precio, etc.) y qué artículos de la lista ya están presentes.
        p.mb-4 Regularmente el modelo tiene estrecha comunicación con la base de datos o el modelo de almacenamiento que se esté utilizando para el aplicativo, este contiene todas las entidades, las relaciones y los datos que requiere el programa para operar y tiene la disposición de proporcionar a la aplicación esta información cuando sea requerido por el mismo.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Vista")
        h4 Vista
        p.mb-4 La vista define cómo se deben mostrar los datos de la aplicación.
        p.mb-4 En la aplicación de la lista de compras, la vista definiría cómo se presenta la lista al usuario y recibiría los datos para mostrar desde el modelo.
        p.mb-4 Las vistas representan los objetos, los formularios o el despliegue de la información para el usuario que opera el sistema, es decir, es la cara visible al usuario con la que este interactúa y realiza el envío o solicitud de información, según sea lo requerido por el usuario del sistema. Ahora bien, es importante tener en cuenta que los estados de la vista no solo se pueden ver afectados por el usuario de la aplicación, sino que pueden existir eventos y procedimientos que de acuerdo con la información de entrada por otros sistemas o programadas puede realizar cambios en la vista.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Controlador")
        h4 Controlador
        p.mb-4 El controlador contiene una lógica que actualiza el modelo y/o vista en respuesta a las entradas de los usuarios de la aplicación, por ejemplo, la lista de compras podría tener formularios de entrada y botones que permitan agregar o eliminar artículos. Estas acciones requieren que se actualice el modelo, por lo que la entrada se envía al controlador, que luego manipula el modelo según corresponda, que luego envía los datos actualizados a la vista.
        p.mb-4 Sin embargo, es posible que también se desee actualizar la vista para mostrar los datos en un formato diferente, por ejemplo, cambiar el orden de los artículos de menor a mayor precio o en orden alfabético. En este caso, el controlador podría manejar esto directamente sin necesidad de actualizar el modelo.

        p.mb-4 Al implementar dicho patrón en los proyectos puede verse beneficiado en los siguientes puntos:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="")(data-aos="zoom-in")
      .col-lg-8
        .bg-c2.bg-c6.px-4.py-4
          ul.lista-ul.my-0.pt-2
            li.lista-ul__vineta.mb-4
              p.m-0 #[strong Organización modular.] Se podrá dividir la lógica del programa haciendo la aplicación más escalable.

            li.lista-ul__vineta.mb-4
              p.m-0 #[strong Hacer abstracción de los datos para facilitar la realización de consultas a la base de datos.] Esto se da en el caso de los #[em framework] como Ruby on Rails, ASP NET, etc.

            li.lista-ul__vineta.mb-4
              p.m-0 #[strong Código más organizado y legible.] Siendo ideal si se trabaja en equipo o para continuar el trabajo de otro programador.

            li.lista-ul__vineta
              p.m-0 #[strong Este patrón se implementa hace muchos años y lo utilizan grandes empresas,] debido a su correcto diseño y extensibilidad.

    h4.mb-5 #[span.btn-subtitulo Patrón Modelo Vista #[em Template]]

    p(data-aos="fade-right") Es utilizado para mostrar inicialmente los datos al usuario con unas vistas ya definidas que se llaman #[em templates] o plantillas, las cuales tienen una estructura construida y solo se requiere que sean llamadas para enviar los datos a la misma y mostrarlos al usuario.

    p(data-aos="zoom-in") A diferencia del MVC en donde las vistas pueden variar de acuerdo con lo solicitado por el usuario, en este modelo se tiene una plantilla específica para mostrar la información.

    p(data-aos="fade-left") Aunque esto puede parecer no ser una buena práctica, de hecho, facilita mucho la construcción de aplicaciones ya que las vistas están definidas y solo falta entregarle la información que se solicitará en otros aspectos, siendo mucho más rápida su ejecución y entendimiento.

    p.mb-5(data-aos="fade-up") A continuación se ilustran estos aspectos en general.

    .row.justify-content-center.mb-5.pb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2. <br> #[span #[em  Modelo Vista #[em Template]]]
        figure.figura
          img(src="@/assets/curso/temas/tema1/figura2.png", alt="")(data-aos="zoom-in")

          figcaption  #[strong Nota.] Adaptado de <a href="https://docs.hektorprofe.net/django/web-personal/patron-mvt-modelo-vista-template/" target="_blank">https://docs.hektorprofe.net/django/web-personal/patron-mvt-modelo-vista-template/</a>

    .bg-c7-t1.p-4.mb-5
      .row
        .col-xl-8
          p(data-aos="fade-up") Como se puede apreciar en la figura, este tipo de arquitectura realiza el paso de una plantilla para la visualización de los datos al cliente y, como se comentó anteriormente, esto permite que las vistas ya se encuentren definidas, facilitando de alguna manera las consultas e información a visualizar.

          p.mb-0(data-aos="fade-up") Si bien se centrará en los modelos MVC y MVT, también existe el Modelo Cliente-Servidor al cual se le abrirá un pequeño espacio.
        .col-xl-4.d-none.d-xl-block

    h4.mb-5 #[span.btn-subtitulo Modelo Cliente - Servidor]

    p(data-aos="fade-up") Es un modelo de diseño de #[em software] en el que las tareas se reparten entre los proveedores de los recursos o los servicios, llamados los servidores y los demandantes, y los clientes. Un cliente realiza peticiones a otro programa y el servidor le da respuesta.

    p(data-aos="fade-up") Este modelo es el utilizado por muchos años para el funcionamiento de los sitios #[em web] y servicios a nivel mundial. El servidor es una máquina dedicada a recibir peticiones de equipos que se encuentran repartidos por todo el mundo. Contiene los aplicativos y los datos que requieren las aplicaciones; y, mediante un proceso de comunicación, que incluye diferentes tipos de protocolos, recibe la información, la procesa y la entrega a los equipos de clientes que la solicitan. Ver figura.

    .row.justify-content-center.mb-4.pb-4.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3. <br> #[span #[em  Modelo Cliente Servidor]]
        figure.figura
          img(src="@/assets/curso/temas/tema1/figura3.svg", alt="")(data-aos="zoom-in")


    .bg-c8.p-4
      .row.align-items-center
        .col-lg-3
          img(src="@/assets/curso/temas/tema1/img7.svg")(data-aos="zoom-in")
        .col-lg-9
          p Como se ve en la figura se tiene a tres clientes interactuando con el servidor a través del servicio de conectividad de Internet, lo que puede suceder es que cada uno de estos clientes se encuentra en diferentes partes del mundo y de esta manera pueden hacer uso de l1os recursos del aplicativo.

          p Cabe anotar que muchos de los servicios que se utilizan hoy en la vida cotidiana, tales como el correo electrónico, las redes sociales, entre otros, funcionan bajo este mismo esquema, por tanto, se espera que estos conceptos y conocimientos aporten a su vida profesional y personal, y que siga avanzando en su proceso de aprendizaje.

          p.mb-0 Tenga en cuenta que también podrá explorar otros patrones de arquitectura, ya que existen varios en el mercado, aunque para efectos prácticos se hará énfasis en los que se presentaron.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
