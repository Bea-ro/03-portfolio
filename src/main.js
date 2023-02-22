import './style.css'

const personalData = {
  image: 'https://media.licdn.com/dms/image/C5603AQFtoH6sDs_PKQ/profile-displayphoto-shrink_800_800/0/1621622148786?e=1679529600&v=beta&t=afxnKYUNq6jhsaFpActmWiCfNMWzH31BiQx1vfdYb0I',
  name: 'Beatriz',
  surname: 'Rodríguez Maya',
  city: 'Madrid',
  occupation: '💻 Full Stack Developer',
  description: 'I am begining in programming with a wide experience in Marketing',
  githubProfile: 'https://github.com/Bea-ro', 
  linkedinProfile: 'https://www.linkedin.com/in/beatrizrodriguezmaya/',
}
const experiences = [
  { position: "Communication Manager",
    date: "May 2018 – October 2022",
    logo: './assets/images/down-madrid-logo.png',
    organization: "Fundación Síndrome de Down de Madrid",
    description: "Comunication Strategy building align with Foundation Strategic Plan.",
    responsabilities = [
    'Ensure compliance of the Foundation purpose', 
    'Reputation safeguard', 
    'Social Media management',
    'Website administration'],
    organizationURL: 'https://downmadrid.org/'  
  },
  {
    position: "Marketing Product Manager",
    date: "Jan 2012 – May 2018",
    organization: "Estée Lauder Companies",
    logo: './assets/images/estee-lauder-logo.svg',
    description: "Management of M·A·C Cosmetics products in Iberia.",
    responsabilities = [
      'Distribution and pricing strategy ensuring rentability',
      'Forecast and stock control',
      'Results, consummer insights, competitors and sector trends analysis to seize all opportinity growth', 
      'Visual Merchandising and promotional campaings implementation'
      ],
    organizationURL: 'https://www.esteelauder.es/' 
  },
  {
    position: "Sales and Marketing Assistant",
    date: "Jun 2005 – Dec 2011",
    organization: "M·A·C Cosmetics",
    logo: './assets/images/mac-cosmetics-logo.png',
    description: "Assistance in sales and marketing management with over 80 points of sale and over two thousand products line-up.",
    responsabilities = [
      'Sales reporting to local and EMEA Managers', 
      'Product distribution to Iberia retailers',
      'Product line-up update', 
      'Retail Managers and Manager Retail Operations support', 
      'Store openings and stores housekeeping coordination'
      ],
    organizationURL: 'https://www.maccosmetics.es' 
  }
  {
    position: "Marketing and Communication Intern",
    date: "Jun 2004 – May 2005",
    organization: "Estée Lauder Companies",
    logo: './assets/images/mac-cosmetics-logo.png',
    description: "Administrative assistance in Marketing and Communication areas",
    responsabilities = [
      'Data basing and reporting',
      'Sales tracking in Excel', 
      'Press coverage follow-up', 
      'Press releases translation',
      'Other administrative responsabilities'
      ],
    organizationURL: 'https://www.maccosmetics.es/' 
  },
  {
    position: "Trade Promoter",
    date: "Jun 2003 – May 2004",
    organization: "Grupo TEMA Marketing Integral",
    logo: './assets/images/tem-logo.svg',
    description: "Trade promotion of several brands throug Marketing Agency",
    responsabilities = [
      'Customer acquisition and engagement',
      'Product demonstration', 
      ],
    organizationURL: 'https://www.temapromotion.com/' 
  }
]

const projects = [
{
image: './assets/images/responsive-project.png',
name: 'Responsive Webpage',
description: 'Creation of a responsive webpage using HTML and CSS.', 
date: 'February 2023',
requirements = [
  'semantic elements',
  'use of navbars and unordered lists',
  'variables declaration',
  'flex and grid positioning',
  'media queries for appropiate performance in mobile, tablet and desktop',
],
projectURL: 'https://hm-home.netlify.app/'
},
{
  image: './assets/images/dynamic-shop-project.png',
  name: 'Dynamic Shop',
  description: 'Creation of a responsive and dynamic shop using JavaScript DOM',
  date: 'February 2023',
  requirements = [
    'use of tag templates for a dynamic HTML',
    'loops and iteration',
    'filters',
    'event handling',
    'media queries for appropiate performance in mobile and desktop',
  ],
  projectURL: 'https://pc-componentes-filters.netlify.app/'
  },
  {
    image: './assets/images/color-flipper-project.png',
    name: 'Color Flipper',
    description: 'Creation of a dynamic color flipper using Vite',
    date: 'December 2022',
    requirements = [
      'dynamic HTML with JavaScript DOM',
      'select type input',
      'loops and iteration',
      'event handling',
      ],
    projectURL: 'https://color-flipper-bea.netlify.app/',
    },
    {
      image: '#',
      name: 'Dynamic Portfolio',
      description: 'Creation of a dynamic personal portfolio using Vite',
      date: 'February 2023',
      requirements = [
        'dynamic HTML with JavaScript DOM',
        'navigation emulation in a SPA',
        'event handling',
        'colorful and appropiate color range'
      ],
      projectURL: '#'
      },
      {
        image: '#',
        name: 'Star Wars',
        description: 'Creation of a dynamic webpage using and API',
        date: 'December 2022',
        requirements = [
          'dynamic HTML with JavaScript DOM',
          'navigation emulation in a SPA',
          'event handling',
          'style'
        ],
        projectURL: '#' // desplegar en netifly star-wars xo antes corregir 
        }
]


    
      {
        position: "Master MBA + Digital Marketing",
        date: "2021",
        where: "ThePower Business School",
      },
    
    languages: {
      language: "English",
      title: "Official Languages School (Proficiency equivalent)",
      date: "2003",
    },
    habilities: [
      "Analitycs",
      "Teamwork",
      "Adaptability",
    ],
    };

document.querySelector('#app').innerHTML = `
  <div>
  <nav>
  <a href="/home">Página principal</a>
  <a href="/experience">Experiencia</a>
  <a href="/projects">Proyectos</a>
  </nav>

  </div>
`

const handleClic = (ev) => {
	ev.preventDefault(); // para que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacena la URL en una constante
  console.log('El link apunta a:', linkHref ); 
  //añadir lógica para que al pinchar muestre contenido (renderHome...) 
}

document.querySelector('a').addEventListener('click', handleClic)

renderHome() //
renderExperience() //enlace a web emp cuando click en los elementos
renderProjects() //imágenes y al click web del proyecto.