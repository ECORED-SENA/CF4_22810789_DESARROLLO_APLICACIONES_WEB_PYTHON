<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-c1.mb-4.px-5.py-3(data-aos="zoom-in")
      .row.align-items-center
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/temas/intro/img1.png", style="max-width: 170px", alt="")
        .col
          p.mb-4 En el mercado actual de la industria del #[em software] existen diferentes caminos y tecnologías a aplicar en la construcción de #[em software], muchas de ellas se orientan a la funcionalidad, pero otras se encuentran enmarcadas en el ámbito y la capacidad de poder adaptarse a las necesidades cambiantes de los usuarios de hoy en día.

          p.mb-0 A través del siguiente video se dará una introducción a esta interesante temática:


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x98DsytBqj4" title="Arquitecturas, lógica y despliegue de aplicaciones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Arquitecturas, lógica y despliegue de aplicaciones.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
