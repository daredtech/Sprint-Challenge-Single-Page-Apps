import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function Character (props) {
    //setting the state
    const {name, status, species, origin, location, characterImg} = props;

    return (
        <Card className='character-card'>
        <Image src={characterImg} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{species} {status}</Card.Meta>
          <Card.Description> Location: {location} </Card.Description>
          <Card.Description>Origin: {origin}</Card.Description>
        </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='tv' />
         Episodes
      </a>
    </Card.Content>
  </Card>

  )
}