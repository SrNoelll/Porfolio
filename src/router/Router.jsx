import {Routes,Route} from "react-router-dom"
import HomeComponent from "../assets/component/HomeComponent/HomeComponent"
import CV from "../CV.jsx"
import Contact from "../Contact.jsx"
export const Router = () =>{
    return (
        <div>
            <Routes>
                    <Route path="/" element={<HomeComponent></HomeComponent>} ></Route>      
                    <Route path="/CV" element={<CV></CV>}></Route>
                    <Route path="/Contact" element={<Contact></Contact>}></Route>

            </Routes>
        </div>
    )
}