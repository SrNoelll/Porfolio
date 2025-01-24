import HeaderComponent from './assets/component/HeaderComponent'
import FooterComponent from './assets/component/FooterComponent'
import Hero2Component from './assets/component/Hero2Component'
import FormComponent from './assets/component/FormComponent/FormComponent'
function Contact() {
  const titulo = "Contact"
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Hero2Component titulo={titulo}></Hero2Component>
      <FormComponent></FormComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Contact
