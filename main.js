import './style.css'

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

renderHome() //imagen, nombre, puesto de trabajo, desc, Github, LinkedIn…
renderExperience() //lista empresas (mín 5, puede ser inventado) con: título, logo, fechas, desc, lista de responsabilidades, 
//enlace a web emp cuando click en los elementos.
renderProjects() // gran lista de proyectos (mín 5, se puede inventar) con imágenes y al click 
//web del proyecto.