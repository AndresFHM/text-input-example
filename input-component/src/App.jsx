
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
          //prop spreading, setting up inputProps as an object with key value pairs, placeholder is not a prop, but
          // this act of creating another attribute is spreading props
          inputProps={{
            onChange: (e) => {
              setNameInput(e.target.value);
              },
            value: nameInput, 
            placeholder: "Jon Snow"
          }}
          labelText={"Name"}
        />
        <TextInput
          inputProps={{
            onChange: (e) => {
              setAgeInput(e.target.value);
              },
            value: ageInput, 
            placeholder: "16"
          }}
          labelText={"Age"}
        />
        <TextInput
          inputProps={{
            onChange: (e) => {
              setSloganInput(e.target.value);
              },
            value: sloganInput, 
            placeholder: "I know nothing"
          }}
          labelText={"Slogan"}
        />
        {/* <div>
          <label htmlFor="age">Age:</label>
            <input
              type="text"
              placeholder="17"
              onChange={(e) => {
                setAgeInput(e.target.value);
              }}
              value={ageInput}
            />
        </div>
        <div>
          <label htmlFor="name">Slogan:</label>
              <input
              type="text"
              placeholder="love to kick butt and take names"
              onChange={(e) => {
                setSloganInput(e.target.value);
                  }}
              value={sloganInput}
            />
        </div> */}
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
