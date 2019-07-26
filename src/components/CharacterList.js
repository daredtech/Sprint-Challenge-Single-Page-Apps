import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character.js'

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
    {characters.map((character, key) => (
          //  console.log(character);
           <Character key={key} name={character.name} status={character.status} species={character.species} characterImg={character.image} location={character.location.name} origin={character.origin.name}/>
    ))}
    {/* <Character/> */}
    </section>

}
