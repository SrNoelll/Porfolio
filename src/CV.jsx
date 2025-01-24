import './App.css'
import HeaderComponent from './assets/component/HeaderComponent'
import FooterComponent from './assets/component/FooterComponent'
import CVComponent from './assets/component/CVComponent/CVComponent'
import Hero2Component from './assets/component/Hero2Component'
function CV() {
  const titulo = "My CV"
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Hero2Component titulo={titulo}></Hero2Component>
      <CVComponent></CVComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default CV
