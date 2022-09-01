import React, {useState} from "react";

const Choice = ({setChoice,label}) => {

  const handleClick = (event) => {
     setChoice(event.target.value)
  }

  return (
    <div>
      <h1>{label}</h1>
    <label> 
      <input onClick={handleClick} type="radio" value="Rock" name={label} />Rock
    </label>
    <label>
      <input onClick={handleClick} type="radio" value="Paper" name={label} />Paper
    </label>
    <label>
      <input onClick={handleClick} type="radio" value="Scissors" name={label} />Scissors
    </label>
    </div>
  );
}

const Shoot = ({playerOneChoice, playerTwoChoice}) => {
  // Do something with the winner state response.
  const determineWinner = () => {
    if(playerOneChoice===playerTwoChoice) {
      return(<div>TIE</div>)  
    }
  }

  return (  
    <>
    <button>Shoot</button>
    {determineWinner}
    </>
  )
}

const App = () => {
  const [playerOneChoice, setPlayerOneChoice] = useState(null)
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null)

  return(
    <>
      <Choice label="P1" setChoice={setPlayerOneChoice} />
      <Choice label="P2" setChoice={setPlayerTwoChoice} />
      {
        playerOneChoice &&
        playerTwoChoice &&
        (<Shoot playerOneChoice={playerOneChoice} playerTwoChoice={playerTwoChoice}/>)
      }
    </>
 )
}


export default App
