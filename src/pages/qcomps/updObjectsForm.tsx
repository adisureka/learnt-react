import { useState } from 'react';

/**
 * The component has a bug that 
 * prevents the state from being updated correctly.
 * Identify the bug and fix it.
 */
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    //player.likescore++;
      setPlayer({
          ...player,
          likescore: player.likescore + 1
      })
  }

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    //player.lastName = e.target.value;
      setPlayer({
          ...player,
          lastName:e.target.value
      })
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
            <hr/>
      </label>
      <label>
         First name:       
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />         
      </label>
               <b>{player.firstName}</b>
              <hr/>
      <label>
        Last name:    
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
           
           <b>{player.lastName}</b>
                <hr/>
    </>
  );
}
