import { useState } from 'react'
import './App.css'

function App() {

  const [num1, setNum1] = useState(0)

  const [num2, setNum2] = useState(0)

  const [res, setRes] = useState(0)

  const [operator, setOperator] = useState("")

  function operatorHandler(){

    if(operator === ""){
      alert("Ecolha um operador lógico clicando na caixa de seleção")
    }

    if(operator === "+"){

      setRes(num1+num2)

    }
    if(operator === "-"){

      setRes(num1-num2)

    }
    if(operator === "*"){

      setRes(num1*num2)

    }
    if(operator === "/"){

      setRes(num1/num2)

    }
    if(operator === "**"){

      setRes(num1**num2)

    }
  }

  if(res == Infinity){
    setRes("Indefinido")
  }

  function Limpar(){setRes(0)}

  return (
    <div className="App">
      <h1>Calculadora</h1>

      <div className="conteiner">

        <input 

        className='input' 

        type={"number"} 
        
        onChange={
          e => setNum1(

            parseFloat(e.target.value)

          )

        }/>

        <select id='select'  onChange={e => setOperator(e.target.value)}>

          <option>Escolha o operador lógico</option>

          <option value={"+"}>+</option>

          <option value={"-"}>-</option>

          <option value={"*"}>X</option>

          <option value={"/"}>/</option>

          <option value={"**"}>x^y</option>
        
        </select>
        
        <input 

        type={"number"} 

        className='input' 

        id='input2' 
        
        onChange={
          e => setNum2(

            parseFloat(e.target.value)

          )
        }></input>

        <div id='buttons'>

            <button 
            
            id="calcule" 
            
            onClick={operatorHandler}>=</button>
            
            <button 
            
            id="calcule" 
            
            onClick={Limpar}>AC</button>

          

        </div>

      </div>

      <h2 id='res'>Resultado {res}</h2>

    </div>
  )
}

export default App
