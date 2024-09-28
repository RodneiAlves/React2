//componentes
//css
import {useRender} from "../src/hooks/useRender"
import UseReduce from "./useReduce"
import { Link } from "react-router-dom"
import "./Home.css"


// 5 hook do react
import { useContext } from "react";
//5 componente useContext
 import { SomeContext } from "../src/hooks/useComponent";



const Home = ()=>{
const {nome} = useContext(SomeContext)

 
  let url="http://localhost:3000/products"
      const{data : itens,loading} = useRender(url)
   
  return(
    <div>
      {loading && <p>carregando</p>}
<ul className="lista_items">
    {itens && itens.map((item)=>(
      <li key={item.id}>
      <img src={item.img} alt="" />
        <h2>{item.name}</h2>
        <p className="paragra_fo">{item.price}</p>  
        <Link className="navegat" to={`/product/${item.id}`}>Mais infomações</Link>
        </li>
    ))}
  
</ul>

<h2>meu nome é {nome}</h2>
    <UseReduce/>

    </div>
 
 
  )

 
}
export default Home;