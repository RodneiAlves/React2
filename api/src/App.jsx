

import {BrowserRouter,Routes,Route} from "react-router-dom";
import { UseComponent } from "./hooks/useComponent";
import { Nav } from "./components/Nav";
//const url= "http://localhost:3000/products"
import Home from "../pages/Home"
import Product from "../pages/Product";
import Cad from "../pages/Cad"



import './App.css'

function App() {

  return (
  <div className="app">
    <UseComponent>
   <h1>pagina principal</h1>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product/:id" element={<Product/>}/>
      <Route path="/Cad" element={<Cad/>} />
    </Routes>
    </BrowserRouter>
    </UseComponent>
  </div>   
     
  )
  
}

export default App
