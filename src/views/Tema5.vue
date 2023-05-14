<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo y control de versiones

    p(data-aos="fade-up") En este espacio se realizará el despliegue de la aplicación construida en Python, cabe aclarar que existen muchos hosting y sitios donde se puede llevar a cabo el despliegue de su sitio; pero va a utilizar un servicio gratuito llamado pythonanywhere.com el cual proporcionará todos los recursos para colocar en marcha su sitio sin ninguna dificultad.

    p(data-aos="fade-left") A continuación se mostrarán los pasos previos para lograr dicho objetivo:

    .tarjeta.tarjeta--lila.p-4.mb-5
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 1
              p Ingrese a pythonanywhere donde realizará el registro o login para poder utilizar los servicios.

              p Si es la primera vez dé clic en Sign up here! allí seleccione la opción Create a Beginner account y proceda a colocar sus datos para el registro.

              p ¡Ya está listo para iniciar la creación de su sitio!

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-1.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 2
              p Le mostrará luego el Dashboard en pythonanywhere donde va a crear su espacio de sitio, ingresando en la barra superior a la opción Web.

              p Puede observar que le aparece una opción llamada Add a new web app.

              p Dé clic en Next y seleccione Flask, que es el framework seleccionado para la construcción de su sitio.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-2.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 3

              p Luego, en la siguiente ventana va a seleccionar la versión de Python, en este caso utilizará la versión más actual, aunque en algunas ocasiones se debe realizar de acuerdo con la versión trabajada.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-3.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 4

              p Por último, le mostrará el nombre del archivo principal, que va a dejar tal cual, ya que luego lo que hará será cambiar el código que este contiene y después dé clic en siguiente.

              p Con esto verá que su sitio ha sido creado con éxito.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema5/slide-4.png')

    .row.align-items-center.mb-5
      .col-xl-7
        .bg-c4.p-5(data-aos="fade-right")
          p Luego de creado el sitio a través del servicio (pythonanywhere) siguiendo los pasos indicados, se continuará con su despliegue.

          p.mb-0 Ahora se mostrará el paso a paso, tenga en cuenta que si bien el ejercicio se hace con base en el ejemplo planteado servirá de guía para que lo pueda hacer, vea el despliegue en el video
      .col-xl-5
        img(src='@/assets/curso/temas/tema5/img-1.png')(data-aos="zoom-in")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Título del video.


    p(data-aos="fade-up") Como se pudo observar en el video se acaba de ver la puesta a punto del sitio a través de un servidor, logrando su visualización y la colocación de un dato para verificar que todo funciona de manera correcta.

    p.mb-5(data-aos="fade-up") Es importante tener en cuenta que se deben seguir los pasos de manera continua para lograr el objetivo de forma correcta y que si bien como se indicó este es un ejemplo a través del servidor gratuito propuesto, podrá seguir esta cadena lógica de pasos para poner a punto su sitio en este u otro servidor.

    .row.justify-content-center.mb-3
      .col-xl-7
        .bg-c2.mb-4.py-3.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px").me-3
            .bg-c2-texto
              p.mb-2 Se ha llegado al final del componente formativo, se espera que estos conocimientos aporten a su vida personal y profesional.

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
