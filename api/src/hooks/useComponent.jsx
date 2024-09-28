import { createContext} from "react"
 import { useState } from "react"


export const SomeContext = createContext()


export const UseComponent = ({children}) => {
 const [nome,setNome]=useState("Lucas");

  return (
   <SomeContext.Provider value={{nome}}>
       {children}
   </SomeContext.Provider>




  )
}
