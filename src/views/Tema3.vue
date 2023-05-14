<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Integración de la capa lógica en las interfaces de usuario

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En este paso se lleva a cabo la conexión entre la interfaz del usuario y los procesos que debe realizar el aplicativo, a través de la vista el usuario entrega a la lógica mediante el controlador los datos necesarios para ejecutar las operaciones requeridas en el sistema y este luego procede a hacerlas.
        br
        br
        p Si en alguno de los casos se requiere que se almacenen los datos en una base de datos entrarían en juego el modelo, que se encargaría de realizar el almacenamiento y posterior recuperación de la información solicitada por el usuario final de la aplicación.


    .row.mb-4
      .col-lg-8
        p Es importante que tenga en cuenta que este es un proceso de intercambio de estructuras, las cuales tienen como objetivo dividir las funcionalidades del sistema en espacios propios.

        p En pocas palabras, la vista se encarga de visualizar los formularios, el controlador se encarga de verificar dichos datos y procesarlos, y el modelo de almacenar y recuperar la información.

        p De acuerdo con la información y lo requerido por el usuario verá más adelante un ejemplo de cómo realizar este proceso paso a paso. Pero inicialmente, debe definir el framework que utilizará para la creación de su proyecto, Flask, vea ahora algunos conceptos básicos sobre este framework.
      .col-lg-4
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema3/img2.svg")

    .bg-c2.p-5.pb-4.mb-5
      .bg-c5.mb-4
        .bg-c5-body
          h5 ¿Qué es Flask?
          p Es un framework minimalista escrito en Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.

          p Está basado en la especificación WSGI de Werkzeug, el motor de templates Jinja2 y tiene una licencia BSD, dentro de este framework se puede encontrar un alto grado de integración con las librerías de Python para realizar el proceso de creación de sitios dinámicos que integren el uso de bases de datos, dentro de las cuales tiene compatibilidad con las principales que se encuentran en el mercado.

          p Flask es muy compacto, pero no débil, en ese sentido se dice que es compacto por su practicidad en la construcción de una aplicación, es muy simple su codificación, lo cual lo hace uno de los framework más utilizados para la construcción de sitios web, integrando el lenguaje de programación Python.

          p Esto genera una gran compatibilidad con librerías externas para la generación de archivos de texto, entre otros, este framework también tiene la ventaja de ocupar poco espacio y poder ser utilizado en equipos que no tienen mucha capacidad de procesamiento y ficha técnica, esto también se podría ver como una gran ventaja.

          p A continuación verá un paso a paso de la creación de una página web en Python utilizando el framework de Flask y conectado con una base de datos MySQL, como se ha venido trabajando en este curso.

      .bg-c9.p-3
        p.mb-0 #[strong Nota:] antes de comenzar descargue los archivos para la creación de las vistas en el Anexo. Archivos para creación de las vistas.

    .tarjeta.tarjeta--lila.p-4.mb-5
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Primero comience con la creación de las vistas, para lo cual previamente debió descargar los archivos indicados. En este primer paso ingresará a visual studio code y creará una carpeta para implementar todos los documentos, que llamará PROYECTOFLASK.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-1.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Como se observa en la imagen a su carpeta (PROYECTOFLASK) le agregará los 3 archivos de vistas previamente descargados.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-2.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Ya con su carpeta de templates creada con las vistas que se le proyectarán al usuario, cree una carpeta llamada static donde se colocarán los arreglos de los archivos de css, adicional creará otra carpeta llamada js donde colocará el archivo de arreglos para la visualización de la información de manera organizada.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-3.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              p Luego de esto, podrá ver de esta manera la visualización de las carpetas del proyecto con los archivos main.css y main.js, estos deberá descargarlos del repositorio de documentos del proyecto dentro de la actividad.

              p #[strong Nota:] el documento main.css contiene la configuración de fondo y las líneas que se visualizan en su programa.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-4.png')

    p.my-5 Ya luego de estos pasos iniciales puede proceder a la creación de la base de datos y a las configuraciones que llevarán a la ejecución del programa:

    .tarjeta.tarjeta--lila.p-4.mb-5
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 1
              p Se procede a crear la base de datos para el almacenamiento de los datos que capturará desde sus vistas ya creadas.

              p Vea la secuencia de código #[span.etiqueta DDL], que permite la creación de la base de datos para el almacenamiento de la información que suministra el usuario, tener en cuenta que el campo #[code pkid] es autonumérico y por lo tanto, no se solicitará al usuario, lo utilizará para controlar la secuencia de registros y para poder realizar las operaciones de actualización y eliminación de elementos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-5a.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 2
              p Se crea el archivo de código fuente llamado #[code.etiqueta app.py], el cual utilizará para almacenar todos los códigos de la aplicación.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-5.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 3

              p Lo primero que realizará es la instalación de Flask y luego la librería para el uso de la base de datos Mysql, comenzando con el comando #[code.etiqueta pip install flask]

              p Con eso empezará la instalación desde el repositorio del framework de trabajo #[span.etiqueta Flask]. Para verificar que quedó bien instalado se verifica la versión con el comando que se visualiza a continuación:

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-6.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 4

              p Luego, realizará la instalación de las librerías de Mysql con el comando  #[code.etiqueta pip install flask-mysqldb]

              p Este comando permite realizar la instalación de la librería de Mysql para poder llevar a cabo la integración del framework #[span.etiqueta Flask] con la base de datos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-7.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 5

              p Llama las librerías necesarias para realizar la ejecución de cada uno de los componentes, se puede observar que se importan las librerías de #[span.etiqueta Flask] y las de #[span.etiqueta Mysqldb], que serán utilizadas para la manipulación de las diferentes rutas de acceso del programa y al mismo tiempo la conexión con la base de datos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-8.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 6

              p Del paso anterior se tendrá la configuración de la conexión con el servidor, el tipo de conexión en este caso local #[code (localhost)], el nombre del usuario que en este caso es el usuario administrador #[code (root)], el password que en este caso no se tiene (en caso de colocarlo se ubicaría en ese espacio) y por último, el nombre de la base de datos #[code (dbs_datos)].

              p La línea de código llamada #[code app.secret_key] establece una clave secreta para la conexión y acceso a la información, se podrá configurar una palabra secreta #[code (mysecretkey)] como se ve en la imagen.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-9.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 7

              p Se crea las rutas de acceso a los templates y la información que se visualizará en cada uno de ellos, la instrucción #[code @app.route] indica la ruta que se va a acceder y la función #[code def Index():] indica que la información que se visualizará será mostrada en la ruta principal (en el archivo index.html), luego se procede a la creación de un cursor que realiza una consulta a la base de datos y busca en la tabla #[code.etiqueta tbl_informacion] y retorna los datos en el template con el nombre #[code.etiqueta index.html], crea un arreglo llamado #[code contacts] y le asigna los datos traídos por medio de la consulta sql, para luego mostrar los datos en la vista.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-10.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 8

              p Se codifica la ruta de acceso add_contact, que permite realizar el registro de un nuevo contacto y se crea una función llamada #[code def add_contact():] la cual recibe a través de un método POST las variables enviadas desde la vista enviando los datos de nombre, contacto y correo y los almacena en estas variables, que son enviadas a través de parámetros a la instrucción insert into, que permite realizar un nuevo registro en la base de datos y envía un mensaje que el dato fue registrado y retorna a la ruta #[code.etiqueta Index] que realiza el despliegue de la información que se encuentra almacenada como se hizo en el punto anterior.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-11.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 9

              p Ahora, se puede observar la ruta de acceso de la vista #[span.etiqueta edit_contact.html], que permite enviar los datos que se actualizarán, en la ruta se observa lo siguiente #[code.etiqueta &#39;/edit/&lt;id&gt;&#39;] esto indica que se está llamando el botón de edición y se envía el id que contenga esa fila de datos para colocarlo en la instrucción where para que no actualice todos los registros, sino el registro que se presiona en el botón, luego se ejecuta la instrucción #[code.etiqueta select * from tbl_informacion where pkid = %s’, (id)] que permite que se consulte solo ese dato en particular y se cargue a la vista edit_contact.html

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-12.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 10

              p Observe ahora la ruta que permite realizar la actualización de los datos, se procede a recibir los datos en las variables de nombres, contacto y correo y, luego se ejecuta la instrucción update, la cual permite realizar el cambio del dato seleccionado, en ese momento se envía el mensaje correspondiente a la actualización de los datos y se procede a llamar la ruta Index, que utiliza la plantilla del archivo #[span.etiqueta index.html] trayendo los datos después de realizar el cambio de los datos en la base de datos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-13.png')
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h5 Paso 11

              p Por último, observe el proceso de eliminación de un dato, se crea la ruta que recibe el id de la persona que se desea sacar de la base de datos y luego se procede a ejecutar la instrucción delete, la cual permite eliminar un registro de la base de datos, pero en la cláusula where se le envía el id de la persona que se esté seleccionando para que no elimine todos los registros sino solo el que se está seleccionando. También se coloca el app.run donde se selecciona el puerto 3000 y se ejecuta la aplicación, la cual utilizará el navegador predeterminado para realizar el despliegue de las vistas y la integración del backend creado y se procede a ejecutar la aplicación para ver su operación.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-14.png')


    p.mb-4 Como se dijo con antelación, para la creación de una página web en Python utilizando el framework de Flask y conectado a una base de datos MySQL se tuvo que dar algunos pasos previos que llevan al momento de la ejecución del programa, como se verá en el siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Título del video.

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
