<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Despliegue de aplicaciones en la web

    p(data-aos="fade-up") En este espacio se realizará el despliegue de la aplicación construida en Python, cabe aclarar que existen muchos #[em hosting] y lugares donde se puede llevar a cabo el despliegue de su sitio; pero para este momento se va a utilizar un servicio gratuito llamado #[em pythonanywhere.com] el cual proporcionará todos los recursos para colocar en marcha el sitio sin ninguna dificultad.

    p(data-aos="fade-left") A continuación se mostrarán los pasos previos para lograr dicho objetivo:

    .tarjeta.tarjeta--lila.p-4.mb-5
      .px-4
        SlyderA(tipo="b")
          .row.mt-lg-3
            .col-lg-12.col-xl-4.mb-4.mb-md-0
              h5 Paso 1
              p Se ingresa a pythonanywhere y se realiza el registro o #[em login] para poder utilizar los servicios.

              p Si es la primera vez dar clic en #[em Sign up here!]  Allí hay que seleccionar la opción #[em Create a Beginner account] y proceder a colocar sus datos para el registro.

              p ¡Ya está listo para iniciar la creación de su sitio!

            .col-lg-12.col-xl-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-1.png', alt="")

          .row.mt-lg-3
            .col-lg-12.col-xl-4.mb-4.mb-md-0
              h5 Paso 2
              p Se mostrará luego el #[em Dashboard] en pythonanywhere donde se va a crear el espacio del sitio, ingresando en la barra superior a la opción web.

              p Posteriormente, aparecerá una opción llamada #[em Add a new web app.] Dar clic en #[em Next] y seleccione #[em Flask], que es el #[em framework] seleccionado para la construcción de su sitio.

            .col-lg-12.col-xl-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-2.png', alt="")

          .row.mt-lg-3
            .col-lg-12.col-xl-4.mb-4.mb-md-0
              h5 Paso 3

              p Luego, en la siguiente ventana, se va a seleccionar la versión de Python; en este caso se utilizará la versión más actual, aunque en algunas ocasiones se debe realizar de acuerdo con la versión trabajada.

            .col-lg-12.col-xl-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-3.png', alt="")

          .row.mt-lg-3
            .col-lg-12.col-xl-4.mb-4.mb-md-0
              h5 Paso 4

              p Por último, le  mostrará el nombre del archivo principal, que va a dejar tal cual, ya que luego lo que sigue será cambiar el código que este contiene y después dar clic en siguiente.

              p Con esto se verá que el sitio ha sido creado con éxito.

            .col-lg-12.col-xl-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-4.png', alt="")

    .row.align-items-center.mb-5
      .col-xl-7.col-lg-6
        .bg-c4.p-4.py-lg-3.px-lg-3.p-xl-5(data-aos="fade-right")
          p Luego de creado el sitio a través del servicio pythonanywhere, siguiendo los pasos indicados, se continuará con su despliegue.

          p.mb-0 Ahora se mostrará el paso a paso en el siguiente video. Hay que tener en cuenta que si bien el ejercicio se hace con base en el ejemplo planteado servirá de guía para que lo pueda hacer después.
      .col-xl-5.col-lg-6.d-block.d-md-none.d-lg-block
        figure.mt-4.mt-xl-0
          img(src='@/assets/curso/temas/tema5/img-1.png', alt="", style="max-width: 505px")(data-aos="zoom-in")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xZjIMrmu-bg" title="Despliegue de aplicación en la web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Despliegue de aplicación en la web.


    p(data-aos="fade-up") El video expone, entonces, la puesta a punto del sitio a través de un servidor, logrando su visualización y la colocación de un dato para verificar que todo funcione de manera correcta.

    p.mb-5(data-aos="fade-up") Es importante tener presente que se deben seguir los pasos de manera continua para lograr el objetivo de forma idónea y que si bien, como se indicó, este es un ejemplo a través del servidor gratuito propuesto, se podrá seguir esta cadena lógica de pasos para poner a punto su sitio en este u otro servidor.

    .row.justify-content-center.mb-3
      .col-xl-7
        .bg-c2.mb-4.py-3.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px", alt="").me-3
            .bg-c2-texto
              p.mb-2 Se ha llegado al final del componente formativo, esperando que estos conocimientos le aporten a su vida personal y profesional.

              p.mb-0 #[strong ¡Muchos éxitos!]
</template>

<script>
export default {
  name: 'Tema5',
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
