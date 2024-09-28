import "./Cad.css"

const Cad = () => {
  return (
<div >
     <form className="form" >
        <label >
          <span>Nome:</span>
            <input type="text" />
        </label>
        <label >
        <span>Preço:</span>
            <input type="number" />
        </label>
    <input type="submit" value="Cadastra"/>
      



     </form>
     </div>
  )
}

export default Cad