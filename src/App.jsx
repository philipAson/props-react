import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 
1 Skapa två fiktiva React-komponenter: ParentComponent och ChildComponent.

2 ParentComponent kommer att representera en förälder som har ett visst antal pengar i sitt sparande. 
Använd en state-variabel för att lagra detta sparande.

3 ChildComponent kommer att representera ett barn som behöver pengar för att köpa en leksak. 
Använd en prop för att skicka information om hur mycket pengar barnet behöver till ChildComponent.

4 När barnet trycker på en "Begär pengar" -knapp i sin komponent, bör förälderns sparande minska med det belopp som behövs för leksaken.
Uppdatera också lämpligt sätt för att visa det uppdaterade sparandet och om barnet har tillräckligt med pengar eller inte.

5 Använd tillstånd (state) för att hålla koll på sparandet i ParentComponent och skicka det som en prop till ChildComponent. 
Använd props för att skicka information om det belopp som barnet behöver till ChildComponent.
*/
function App() {

const ParentComponent = () => {

  const [accountAssets, setAmount] = useState(20000);

  const withdraw = (amount) => {

    setAmount(accountAssets - amount);
  }

  return (
    <div>
      <h2>Parent</h2>
      Account total: {accountAssets}€
      <h1>-------------------</h1>

      <ChildComponent requestMethod={withdraw} />
    </div>
  )

}

const ChildComponent = ({requestMethod}) => {

  const[amount, setDemand] = useState(0);
  
  const handleDemand = (e) => {
    requestMethod(amount);
  }

  const handleDemandChange = (e) => {
    setDemand(parseInt(e.target.value));
  }

  return (
    <div>
      <h2>Child</h2>
      <input type="text" value={amount} onChange={handleDemandChange} />
      <button onClick={handleDemand}>Demand</button>
    </div>
  )
}

  return (
    <>
    <ParentComponent />
    </>
  )
}

export default App
