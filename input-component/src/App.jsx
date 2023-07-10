
import './App.css'
import { useRef, useState } from 'react';
import { TextInput } from './TextInput';
import { PhoneInput } from './PhoneInput';


function App() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [sloganInput, setSloganInput] = useState("");

  const sloganRef = useRef(null)

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
        <button onClick={() => {
          sloganRef.current?.scrollIntoView();
        }}>  Scroll to Slogan</button>
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
        {"a"
          .repeat(50)
          .split("")
          .map((_, index) => (
          <TextInput
            key={index}
            inputProps={{
              placeholder: "HHERRRO",
              ref:sloganRef,
            }}
            labelText={"herro"}
          />
        ))}
        <TextInput
          inputProps={{
            onChange: (e) => {
              setSloganInput(e.target.value);
              },
            value: sloganInput, 
            placeholder: "I know nothing",
            id: "my-input",
            style: {
              backgroundColor: "tomato"
            }
          }}
          labelText={"Slogan"}
        />

{"a"
          .repeat(50)
          .split("")
          .map((_, index) => (
          <TextInput
            key={index}
            inputProps={{
              placeholder: "HHERRRO",
              ref:sloganRef,
            }}
            labelText={"herro"}
          />
          ))}
        
        {"a"
          .repeat(50)
          .split("")
          .map((_, index) => (
          <TextInput
            key={index}
            inputProps={{
              placeholder: "HHERRRO",
              ref:sloganRef,
            }}
            labelText={"herro"}
          />
          ))}
        
        {"a"
          .repeat(50)
          .split("")
          .map((_, index) => (
          <TextInput
            key={index}
            inputProps={{
              placeholder: "HHERRRO",
              ref:sloganRef,
            }}
            labelText={"herro"}
          />
        ))}

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
        <PhoneInput />
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
