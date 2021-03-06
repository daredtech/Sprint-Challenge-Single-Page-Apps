import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard  from './LocationCard'

export default function LocationsList() {
    // to track data from useEffect
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
      // to send the request
      const getLocations = () => {
        axios
        .get('https://rickandmortyapi.com/api/location/')
        // if request was successful 
        .then(response =>{
          console.log('The response data: ', response.data);
          //to assign the received data to locations
          setLocations(response.data.results);
        })
        // if request wasn't successful
        .catch(erroe =>{
          console.log('Can\'t get locations data');
        })
      }
      getLocations();
    }, [])
  
    return <section className='location-list grid-view'>
      {/* to go over array and display each location */}
      {locations.map((location, key) => (
        // console.log(location);
        <LocationCard  key={key} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length}/>
    ))}
      </section>
  
  }
  