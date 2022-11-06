import "./App.css";
import { useState } from "react";
import InputField from "./InputField";

async function fetchCharacter(URL) {
  try {
    const response = await fetch(URL);

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      alert("Error retrieving the JSON");
      console.log(response);
    }
  } catch (err) {
    alert(err);
  }
}

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const URL = `http://localhost:3001/character/${fName}/${lName}/${age}/${profession}`;

  function setValues(json) {
    setFName(json?.character?.fName || "");
    setLName(json?.character?.lName || "");
    setAge(json?.character?.age || "");
    setProfession(json?.character?.profession || "");
  }

  function clearCharacter() {
    setValues();
  }

  async function randomizeCharacter() {
    const data = await fetchCharacter(`http://localhost:3001/character////`);
    setValues(data);
  }

  async function handleFill() {
    const data = await fetchCharacter(URL);
    setValues(data);
  }

  return (
    <div id="App">
      <form>
        <h1>Character Generator</h1>
        <InputField
          label="First name"
          inputType="string"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <InputField
          label="Last name"
          inputType="string"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <InputField
          label="Age"
          inputType="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <InputField
          label="Profession"
          inputType="string"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <div>
          <button type="button" onClick={clearCharacter}>
            Clear
          </button>
          <button type="button" onClick={handleFill}>
            Fill
          </button>
          <button type="button" onClick={randomizeCharacter}>
            Randomize
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
