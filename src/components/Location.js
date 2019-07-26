import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function Location (props) {
    
    const {name, type, dimension, residents} = props;

    return (
        <Card className='location-card'>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          {/* <Card.Meta>{type} {status}</Card.Meta> */}
          <Card.Description> {type} {dimension} </Card.Description>
          <Button className='locations-button' >
            {residents}
          </Button>
        </Card.Content>

  </Card>

  )
}