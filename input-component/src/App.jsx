
import './App.css'
import { useState } from 'react';
import { TextInput } from './TextInput';


function App() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [sloganInput, setSloganInput] = useState("");

  const reset = () => {
    setNameInput("")
    setAgeInput("")
    setSloganInput("")
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            nameInput,
            ageInput,
            sloganInput
          })
          reset()
      }}>
        <h3>Information form</h3>
        <TextInput
          onChange={(e) => {
          setNameInput(e.target.value);      
          }}
          value={nameInput}
          labelText={"Name"}
        />
        <TextInput
          onChange={(e) => {
          setAgeInput(e.target.value);      
          }}
          value={ageInput}
          labelText={"Age"}
        />
        <TextInput
          onChange={(e) => {
          setSloganInput(e.target.value);      
          }}
          value={sloganInput}
          labelText={"Slogan"}
        />
        {/* <div>
          <label htmlFor="name">Name:</label>
          <input type="text"
            placeholder="andres hernandez"
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
          />
        </div> */}
      </form>

    </>
  )
}

export default App
