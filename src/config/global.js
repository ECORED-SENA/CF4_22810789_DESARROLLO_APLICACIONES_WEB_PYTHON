export default {
  global: {
    componenteFormativo: 'Arquitecturas, lógica y despliegue de aplicaciones',
    descripcionCurso:
      'El componente formativo está orientado a entregar los conocimientos sobre: el manejo de las arquitecturas para la construcción de aplicaciones, la lógica que se aplica para el funcionamiento de esta y el despliegue de la aplicación en un servidor de producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Despliegue de aplicaciones en la web',
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
        download: 'downloads/22810789_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
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
        'Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y  Abrutsky, M. (2012). <em>Bases de datos.</em> Alfaomega Grupo Editor. ',
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
      termino: '<em>Front-end</em>',
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
        ' Modelo Vista Controlador, es una estructura de trabajo que permite independizar cada una de las partes de un programa, en este caso un sitio web o aplicativo web.',
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
        'MDN Web Docs. (s.f.) <em>Proyecto constrúyelo mejor.</em> Mozilla recursos para desarrolladores.',
    },
    {
      referencia:
        'Pavón, J. (2008). <em>Estructura de las aplicaciones orientadas a objetos. El patrón Modelo-Vista-Controlador (MVC).</em>Universidad Complutense de Madrid.',
      link: 'https://www.fdi.ucm.es/profesor/jpavon/poo/2.14.mvc.pdf',
    },
    {
      referencia:
        'Reinosa, E., Maldonado, C., Muñoz, R., Damiano, L. y Abrutsky, M. (2012). <em>Bases de datos.</em> Alfaomega Grupo Editor.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061572',
    },
    {
      referencia:
        'Rodríguez de Sepúlveda Maillo, D. (2015). <em>Administración de servicios web.</em>Ra-Ma.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB106473',
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
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Dulfrán Antonio Montaño Montaño',
          cargo: 'Experto Temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polánco Muñoz ',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
