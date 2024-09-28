import {useRender} from "../src/hooks/useRender"
import { useParams } from "react-router-dom";
import "./Product.css";
const Product = () => {

  const {id}= useParams()
 const url ="  http://localhost:3000/products/" +id;
    const {data: itens }= useRender(url);

  return (

   <>
       {itens && (
   <div className="nome">
    <h1 >{itens.name}</h1>
    <img src={itens.img} alt="" />
    <p>{itens.price}</p>
    <p>camisa do flamengo 100% algodão linhas da italia bom preço</p>
   </div>
        )}

        
   </>
      
   
  )
}

export default Product