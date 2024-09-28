//css
import './App.css'

import { useCallback,useEffect,useState } from 'react'
//data
import {wordsList} from "./data/Words";
//componentes

import SecretStart from './components/SecretStart'
import GameStart from './components/GameStart';
import GameOver from './components/GameOver';

//  array com cada fasedo jogo
const stages =[{ id: 1, name:"startgame"}, { id: 2, name:"game"},{ id: 3, name:"gameOver"},
]
// função principal
function App() {
  const [gameStages,setGameStages]=useState(stages[0].name)
  const [words] = useState(wordsList)

  const [palavraescolhida,setPalavraescolhida] =useState()
  const [CategoriaPalavra,setCategoriaPalavra] =useState()
  const [letra,setletra] =useState([])
 // categoria escolhida do jogo aleatorio
  const categiraEscolhida=()=>{
    const categoria =Object.keys(words)
    const categorias = categoria[Math.floor(Math.random()* Object.keys(categoria).length)];

    
  }


  //starts

  const startGame = ()=>{
categiraEscolhida()
    setGameStages(stages[1].name)

  }
  //start para processar a letra do usuario
  const letraVerificar=()=>{
    setGameStages(stages[2].name);
  
    
  }
  const retryFinich =()=>{
    setGameStages(stages[0].name)
  }


  return (
      <div className='app'>
        {gameStages=== "startgame" && <SecretStart start={startGame}/> }
        {gameStages=== "game" && <GameStart letra={letraVerificar}/>}
        {gameStages=== "gameOver" && <GameOver retry={retryFinich}/>}

   
      </div>
    
     
  
  )
}

export default App
