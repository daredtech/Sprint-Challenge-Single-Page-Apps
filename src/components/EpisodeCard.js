import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard (props) {
    
    const {name,iardate,episode} = props;

    return (
        <Card className='location-card'>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description> {episode} {iardate} </Card.Description>
        
        </Card.Content>

  </Card>

  )
}