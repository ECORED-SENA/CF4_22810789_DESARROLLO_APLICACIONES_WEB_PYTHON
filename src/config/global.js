export default {
  global: {
    componenteFormativo: 'Arquitecturas, lógica y despliegue de aplicaciones',
    descripcionCurso:
      'El componente formativo está orientado a entregar los conocimientos sobre el manejo de las arquitecturas para la construcción de aplicaciones, lógica a aplicar para el funcionamiento de esta y el despliegue de la aplicación en un servidor de producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es un patrón de arquitectura?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lenguaje de consulta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Integración de la capa lógica en las interfaces de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicios web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Despliegue de aplicaciones en la Web',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lenguaje de consulta',
      referencia:
        '1Keydata.com. (2022). <em>Tutorial de SQL: curso de SQL.</em> 1Keydata.com. ',
      tipo: 'Tutorial web',
      link: 'https://www.1keydata.com/es/sql/',
    },
    {
      tema: 'Servicios web',
      referencia:
        'Rodríguez de Sepúlveda Maillo, D. (2015). <em>Administración de servicios web.</em> Ra-Ma',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB106473',
    },
    {
      tema: 'Servicios web',
      referencia:
        'Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y  Abrutsky, M. (2012). Bases de datos. Alfaomega Grupo Editor. ',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061572',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'Es una aplicación que permite el almacenamiento de información de manera organizada y luego poder recuperar dicha información.',
    },
    {
      termino: 'CSS',
      significado:
        'Es un lenguaje que permite la creación de hojas de estilo para ubicar y mejorar el diseño de una página web.',
    },
    {
      termino: 'Formulario',
      significado:
        'Es un conjunto de controles que se agrupan para recolectar información a un posible usuario dentro de una página web.',
    },
    {
      termino: 'Front-end',
      significado:
        'Es el nombre técnico que recibe la parte del sistema que se encarga de la interacción con el usuario final.',
    },
    {
      termino: 'HTML',
      significado:
        'Lenguaje de etiquetado que permite estructurar una página web.',
    },
    {
      termino: 'MVC',
      significado:
        'Modelo Vista Controlador, es una estructura de trabajo que permite independizar cada una de las partes de un programa, en este caso un sitio web o aplicativo web.',
    },
    {
      termino: 'Servidor web',
      significado:
        'Es una máquina dedicada a colocar los archivos de ejecución de una página web y hacerla visible para muchos usuarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'MDN Web Docs. (s.f.) <em>Proyecto constrúyelo mejor.</em> <strong>Mozilla recursos para desarrolladores.</strong>Pavón, J. (2008). <em>Estructura de las aplicaciones orientadas a objetos. El patrón Modelo-Vista-Controlador (MVC).</em> <strong>Universidad Complutense de Madrid</strong>',
      link: 'https://www.fdi.ucm.es/profesor/jpavon/poo/2.14.mvc.pdf ',
    },
    {
      referencia:
        '<strong>Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y Abrutsky, M.</strong> (2012). Bases de datos. <strong>Alfaomega Grupo Editor.</strong> https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061572',
      link: '',
    },
    {
      referencia:
        '<strong>Rodríguez de Sepúlveda Maillo,</strong> D. (2015). Administración de servicios web. <strong>Ra-Ma.</strong> ',
      link:
        ' https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB106473',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Dulfrán Antonio Montaño Montaño',
          cargo: 'Experto temático',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polánco Muñoz ',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
