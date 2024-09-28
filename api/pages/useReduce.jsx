      import React from 'react'
      import { useReducer } from 'react'    
      import "./useReduce.css"


    
      
      const useReduce = () => {

       const handleFunc= (state,action)=>{
        switch(action.type){
          case 'ADD' :
            return{
              name: "rodnei",
              idade:20
            }
           
            case 'ADD1' :
              return{
                name: "Pedro",
                idade:15
              }

        }

       }
       const [state,dispatch]=useReducer(handleFunc,"");
        const trocaNome=()=>{
         if (dispatch({type:"ADD1"})){
      
           dispatch({type:"ADD"})
          
         }
        }
       return(
         <div>
          <h1>seu nome é: {state.name }</h1>
          <p>sua idade é: {state.idade }</p>
          <button onClick={()=>{dispatch({type:"ADD"})}}>adicionar um nome</button>
          <button onClick={trocaNome}>outro nome</button>
         </div>

       )
          


               
       }
              
              export default useReduce