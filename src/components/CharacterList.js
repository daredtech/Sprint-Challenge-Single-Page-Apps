import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList() {
  // to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // to send the request
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      // if request was successful 
      .then(response =>{
        console.log('The response data: ',response.data);
      })
      // if request wasn't successful
      .catch(erroe =>{
        console.log('Can\'t get characters data');
      })
    }
    getCharacters();
  }, [])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
