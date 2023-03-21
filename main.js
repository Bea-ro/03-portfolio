import './style.css'
import {navbar} from './src/components/navbar'
import './src/pages/home'
import './src/pages/projects' 
import './src/pages/experience'    
     
document.querySelector('#app').innerHTML = `
  <div>

  </div>
`

const handleClic = (ev) => {
	ev.preventDefault(); // para que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacena la URL en una constante
  console.log('El link apunta a:', linkHref ); 
  //añadir lógica para que al pinchar muestre contenido (renderHome...) 
}

document.querySelector('a').addEventListener('click', handleClic)


const header = document.querySelector('header')
header.innerHTML = Navbar()
// const footer = document.querySelector('footer')
// footer.innerHTML = Footer()

// linkPage('#homeLink', Home) //la f linkPage está en utils
// linkPage('#projectsLink', Projects)
// linkPage('#aboutLink', Experience)

renderHome()