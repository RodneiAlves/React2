import "./SecretStart.css"

const SecretStart = ({start}) => {
  console.log(start)
  return (
    <div className="start">
       <h1 >Secret Word</h1>
       <p>Clique para começar o jogo</p>
     <button onClick={start}>Começar o jogo</button>
    </div>
  )
}

export default SecretStart