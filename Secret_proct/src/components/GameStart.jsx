import Styles from "./GameStart.module.css"
  const GameStart = ({letra}) => {
   
    return (
      < >
           <div className={Styles.titulo}>
            <h1 >Game</h1>
              <table>
                <tr>
                    <th>Aqui esta sua pontuação</th>
                </tr>
              </table>
        
               <ul>
                <li>
                  
                </li>
               
               </ul>


              <button onClick={letra}>Finalizar jogo</button> 
          </div>
    
      </>
    )
  }

export default GameStart