import './App.css';
import { useState } from 'react';

function App() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [profession, setProfession] = useState('')
  const [age, setAge] = useState('')
  const URL = `http://localhost:3001/character/${fName}/${lName}/${age}/${profession}`

  async function fillCharacter(e) {
    e.preventDefault();
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const json = await response.json();
        console.log(json); // POISTa
        setFName(json.character.fName)
        setLName(json.character.lName)
        setAge(json.character.age)
        setProfession(json.character.profession)
      } else {
        alert('Error retrieving the JSON');
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  const clearCharacter = e => {
    e.preventDefault()
    setFName('')
    setLName('')
    setAge('')
    setProfession('')
  }

const randomizeCharacter = e => {
  e.preventDefault();
  clearCharacter()
  //fillCharacter()
}


  return (
<div id="App">
      <h1>Character Generator</h1>
      <form>
        <div>
          <label>First name</label>
          <input type="string"
          value={fName} onChange={e => setFName(e.target.value)}></input>
        </div>
        <div>
          <label>Last name</label>
          <input type="string"
          value={lName} onChange={e => setLName(e.target.value)}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number" step="1"
          value={age} onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
          <label>Profession</label>
          <input type="string"
          value={profession} onChange={e => setProfession(e.target.value)}></input>
        </div>
        <div>
          <button onClick={clearCharacter}>Clear</button>
          <button onClick={fillCharacter}>Fill</button>
          <button onClick={randomizeCharacter}>Randomize</button>
        </div>
      </form>
    </div>
  );
}

export default App;
