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
        console.log('The response data: ', response.data.results);
        //to assign the received data to characters
        setCharacters(response.data.results);
      })
      // if request wasn't successful
      .catch(erroe =>{
        console.log('Can\'t get characters data');
      })
    }
    getCharacters();
  }, [])

  return <section className='character-list grid-view'>
    {/* to go over array and display each character */}
    {characters.map(character => {
      console.log(character);
    })}
    </section>

}
