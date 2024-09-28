import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"


export const Nav = () => {
  
  return (
  
        <nav className='nav'>
       <Link className='link' to="/">Home</Link>
       <Link className='link' to="/Cad">Cadastro</Link>
        </nav>
    
  )
}

