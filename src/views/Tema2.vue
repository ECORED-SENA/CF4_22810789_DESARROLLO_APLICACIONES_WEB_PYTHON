<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lenguaje de consulta

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p También llamado SQL que significa “Lenguaje de consulta estructurado”, es un estándar orientado a las bases de datos que permite recuperar información contenida en las mismas.
        br
        br
        p Este lenguaje utiliza las entidades y las relaciones que se encuentran en una base de datos, para que luego mediante una serie de comandos ejecutados de manera ordenada se logre la recuperación de la información contenida en la misma.

    .row.justify-content-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/img2.svg", style= "width: 85px", alt="")(data-aos="zoom-in")
      .col-lg
        p.mb-4(data-aos="fade-up") Es importante tener en cuenta que el lenguaje SQL es un estándar para todas las bases de datos. Existen algunas variaciones que se pueden dar dependiendo del fabricante del motor, pero son mínimas ya que debe regirse por el estándar SQL, implementado a nivel internacional.
        p(data-aos="fade-up") Hoy en día la información juega un papel fundamental para las organizaciones y las empresas a nivel mundial, siendo las bases de datos el sistema de almacenamiento principal de la información.


    .row.mb-4
      .col-lg-8
        .bg-c2.mb-4.py-4.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px", alt="").me-3(data-aos="zoom-in")
            p.mb-0(data-aos="fade-up") Requiere que no solo se puedan manipular los datos de manera correcta en cuanto a su inserción, modificación y eliminación sino que también se puedan recuperar estos con mecanismos seguros y que garanticen que dicha información sea entregada de una manera legible y entendible para el usuario. Es allí donde el lenguaje SQL toma una gran importancia en los mercados actuales, ya que este permite personalizar la manera cómo se entregan los datos al usuario, dando información precisa y confiable. A continuación se presentan varios ejemplos sobre cómo utilizar este lenguaje de consultas.


        p.mb-4(data-aos="fade-up") Lo primero que se va a tener es una base de datos, que servirá como medio para realizar las consultas que se necesita.

        p(data-aos="fade-up") Antes de iniciar con el proceso de consultas, entonces, se deberá crear la base de datos, para lo cual se entregan las tablas necesarias con sus tipos de datos:
      .col-lg-4
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema2/img3.png", alt="")(data-aos="zoom-in")


    .tarjeta.tarjeta--lila.p-4
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Se comienza colocando el nombre de la base de datos que será #[code.etiqueta “dbs_supermercado”]

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema2/slide-1.png', alt="")(data-aos="zoom-in")

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0

              p Luego, se continúa con la configuración de las siguientes tablas, como se muestra a continuación:

              ul.lista-ul.my-0.pt-2
                li.lista-ul__vineta.mb-4
                  p.mb-0 Tabla #[code tbl_estado]
                li.lista-ul__vineta.mb-4
                  p.mb-0 Tabla #[code tbl_tipo]
                li.lista-ul__vineta.mb-4
                  p.mb-0 Tabla #[code tbl_referencia]
                li.lista-ul__vineta.mb-4
                  p.mb-0 Tabla #[code tbl_productos]

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema2/slide-2.png', alt="")


          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_estado]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-3.png', alt="La imagen muestra la configuración de la tabla tbl_estado, dentro de la cual se establecen dos registros. Para el primer registro  se especifica name como PKCodigo, type  varchar, lenght 255, decimals se deja sin valores, se marca la opción not null , vitual se deja sin marcar y se establece como llave. Para el segundo registro se define name como nombre, type varchar, length 255, decimals se deja vacio, not null se deja sin marcar.")

          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta  tbl_tipo]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-4.png', alt="La imagen muestra la configuración de la tabla tbl_estado, dentro de la cual se establecen dos registros. Para el primer registro  se especifica name como PKCodigo, type  varchar, lenght 255, decimals se deja sin valores, se marca la opción not null , vitual se deja sin marcar y se establece como llave. Para el segundo registro se define name como Nombre, type varchar, length 255, decimals se deja vacio, not null se deja sin marcar.")
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_referencia]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-5.png', alt="La imagen muestra la configuración de la tabla tbl_referencia, dentro de la cual se establecen tres registros. Para el primer registro  se especifica name como PKCodigo, type  varchar, lenght 255, decimals se deja sin valores, se marca la opción not null , vitual se deja sin marcar y se establece como llave. Para el segundo registro se define name como Nombre, type varchar, length 255, decimals se deja vacio, not null se deja sin marcar y para el tercer registro se dejan los mismo valores que el registro dos excepto el Name que será Bodega.")
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_productos]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-6.png', alt="La imagen muestra la configuración de la tabla tbl_productos, dentro de la cual se establecen 10 registros. Para el primer registro  se especifica name como PKCodigo, type  varchar, lenght 255, decimals se deja sin valores, se marca la opción not null , vitual se deja sin marcar y se establece como llave. Para el segundo registro se definen los 9 registros de igual forma exceptuando el valor Name, los cuales serán: Nombre, Descripcion, Stock, PrecioUND, PrecioVent, Stockmin, FKcodigo_tbl_tipo, FKCodigo_tbl_referencia, FKCodigo_tbl_estado. Los demás valores para esos registros serán type varchar, length 255, decimals vacio, not null y virtual sin marcar.")
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Como se puede observar en la imagen se tiene el listado de las tablas o entidades que hacen parte de la base de datos, en la cual se encuentra la información que se utilizará para realizar las consultas.
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-7.png', alt="La imagen muestra el listado de las tablas o entidades que hacen parte de la base de datos en la cual se encuentra la información que utilizará para realizar las consultas.")
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Por último, se puede observar el modelo entidad relación de la base de datos donde se ilustra su distribución y la estructura de las tablas. Adicional a ello, se puede ver el tipo de datos que utiliza cada una y la extensión de estos.
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-8.png', alt="La imagen muestra el diagrama del modelo entidad relación de la base de datos donde se ilustra la distribución de los datos, la estructura de las tablas y el tipo de datos que utiliza cada una junto con su correspondiente extensión.")

    p.mt-5 Luego de crear la base de datos, se invita a hacer todos estos pasos para que tenga una mejor comprensión.

    p.mb-4 Ahora, a través del siguiente video verá las consultas para la recuperación de la información:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yNvy1dx_KbU" title="Consultas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Consultas.

    p Al final del componente, en el material complementario, hay un enlace donde se podrá explorar mucho más sobre el tema visto.
</template>

<script>
export default {
  name: 'Tema2',
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
