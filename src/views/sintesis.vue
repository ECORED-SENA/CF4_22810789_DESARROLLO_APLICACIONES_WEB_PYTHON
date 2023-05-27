<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Como se ha visto hay diferentes caminos en la industria del #[em software] que ayudarán en su construcción, muchos orientados en la funcionalidad de este y otros enmarcados en el ámbito y la capacidad de poder adaptarse a las necesidades cambiantes de los usuarios de hoy en día.

    p.mb-4 Este material formativo ha llevado a desarrollar los conocimientos sobre el manejo de arquitecturas para la construcción de aplicaciones y lógica para el funcionamiento de estas, que resultan en la creación de algún aplicativo.

    p.mb-5 A continuación se podrá ver la síntesis de lo tratado en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Sintesis")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
