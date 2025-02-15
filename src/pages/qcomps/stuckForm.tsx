/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
import { useState } from 'react'
export default function Form() {
  //let firstName = '';
  //let lastName = ''; 
    const [firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[name, setName] = useState({firstName: '', lastName:''})

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    //firstName = e.target.value;
      setFirstName(e.target.value)
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    //lastName = e.target.value;
          setLastName(e.target.value)
  }

  function handleReset() {
    //firstName = '';
    //lastName = '';
      //setName({firstName:"", lastName:""})
     setFirstName('')
     setLastName('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}