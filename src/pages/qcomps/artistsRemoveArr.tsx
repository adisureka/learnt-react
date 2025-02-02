import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

/**
 * The component renders a list of artists with a delete button for each artist. 
 * When the delete button is pressed, the item should be deleted. 
 * However, this does not happen. Identify and fix the bugs.
 */

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );
    
  /*const removeArtist() => {
      let newArtists = initialArtists.filter()
  }*/
    function remove(id: number) {
        initialArtists = initialArtists.filter(x => (x.id != id))
        setArtists( initialArtists)
    }
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              //artists.splice(artist.id, 1)
                //setArtists(artists.filter((x) => (x.id != artist.id)) 
                console.log(artist.id)
                console.log(artist) 
                             remove(artist.id)
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
