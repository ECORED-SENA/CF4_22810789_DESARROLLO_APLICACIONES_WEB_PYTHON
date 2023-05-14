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
        p También llamado SQL que significa “Lenguaje de consulta estructurado” es un estándar orientado a las bases de datos que permite recuperar información contenida en las mismas.
        br
        br
        p Este lenguaje utiliza las entidades y las relaciones que se encuentran en una base de datos, para que luego mediante una serie de comandos ejecutados de manera ordenada se logre la recuperación de la información contenida en la misma.

    .row.justify-content-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/img2.svg", style= "width: 85px")(data-aos="zoom-in")
      .col-lg
        p.mb-4(data-aos="fade-up") Es importante tener en cuenta que el lenguaje SQL es un estándar para todas las bases de datos, es decir, puede ser utilizado en todas. Ahora bien, existen algunas variaciones que se pueden dar dependiendo del fabricante del motor de base de datos, pero son mínimas ya que debe regirse por el estándar SQL implementado a nivel internacional.
        p(data-aos="fade-up") Hoy en día la información juega un papel fundamental para las organizaciones y las empresas a nivel mundial, siendo las bases de datos el sistema de almacenamiento principal de la información.


    .row.mb-4
      .col-lg-8
        .bg-c2.mb-4.py-4.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px").me-3(data-aos="zoom-in")
            p.mb-0(data-aos="fade-up") Requiere que no solo se puedan manipular los datos de manera correcta en cuanto a su inserción, modificación y eliminación sino que también se puedan recuperar estos con mecanismos seguros y que garanticen que dicha información sea entregada de una manera legible y entendible para el usuario, es allí donde el lenguaje SQL toma una gran importancia en los mercados actuales, ya que este permite personalizar la manera cómo se entregan los datos al usuario y así entregar información precisa y confiable. A continuación verá varios ejemplos sobre cómo utilizar este lenguaje de consultas.


        p.mb-4(data-aos="fade-up") Lo primero que va a tener es una base de datos, que servirá como base para realizar las consultas que necesita.

        p(data-aos="fade-up") Antes de iniciar con el proceso de consultas deberá crear la base de datos, para lo cual se entregan las tablas necesarias, con sus tipos de datos para que la cree con dicha información:
      .col-lg-4
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema2/img3.png")(data-aos="zoom-in")


    .tarjeta.tarjeta--lila.p-4
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Comience colocando el nombre de la base de datos que será #[code.etiqueta “dbs_supermercado”]

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema2/slide-1.png')(data-aos="zoom-in")

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0

              p Y sigue con la configuración de las siguientes tablas, como se muestra a continuación:

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
                img(src='@/assets/curso/temas/tema2/slide-2.png')


          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_estado]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-3.png')

          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta  tbl_tipo]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-4.png')
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_referencia]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-5.png')
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Tabla #[code.etiqueta tbl_productos]
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-6.png')
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Como se puede observar en la imagen se tiene el listado de las tablas o entidades que hacen parte de su base de datos, en la cual se encuentra la información que utilizará para realizar las consultas.
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-7.png')
          .row.my-lg-4
            .col-md-3.mb-4.mb-md-0
              p Por último, se puede observar el modelo entidad relación de la base de datos donde se ilustra la distribución de los datos y la estructura de las tablas, adicional a ello se puede ver el tipo de datos que utiliza cada una y la extensión de estos.
            .col-md-9
              figure
                img(src='@/assets/curso/temas/tema2/slide-8.png')
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
