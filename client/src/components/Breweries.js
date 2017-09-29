import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

class Breweries extends Component {
  state = {breweries: []}


  componentDidMount() {
    axios.get('/api/all_breweries')
    .then( res => {
      this.setState({ breweries: res.data.entries })
    })
    .catch( err => {
    })
  }

  
  render() {
    return(
      <Card.Group>
      { this.state.breweries.map( brewery =>
        <Card inverted key={brewery.id}>
          <Card.Header>
            <h1>{brewery.name}</h1>
          </Card.Header>
       
        </Card>
        ) 
      }
    </Card.Group>
    )
  }
}  


export default Breweries;