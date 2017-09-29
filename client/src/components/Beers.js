import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

class Beers extends Component {
  state = {beers: []}


  componentDidMount() {
    axios.get('/api/all_beers')
    .then( res => {
      this.setState({ beers: res.data.entries })
    })
    .catch( err => {
    })
  }

  
  render() {
    return(
      <Card.Group>
      { this.state.beers.map( beer =>
        <Card inverted key={beer.id}>
          <Card.Header>
            <h1>{beer.name}</h1>
          </Card.Header>
       
        </Card>
        ) 
      }
    </Card.Group>
    )
  }
}  


export default Beers;