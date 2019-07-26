import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodesList() {
    // to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
      // to send the request
      const getEpisodes = () => {
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        // if request was successful 
        .then(response =>{
          console.log('The response data: ', response.data.results);
          //to assign the received data to episodes
          setEpisodes(response.data.results);
        })
        // if request wasn't successful
        .catch(error =>{
          console.log('Can\'t get episodes data');
        })
      }
      getEpisodes();
    }, [])
  
    return <section className='episodes-list grid-view'>
      {/* to go over array and display each episode */}
      {episodes.map((episode, key) => 
        // console.log(episode);
        <EpisodeCard key={key} name={episode.name} iardate={episode.air_date} episode={episode.episode}/>

      )}
      </section>
  
  }
  