import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Container, Row} from 'reactstrap'
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [location,setLocation] = useState([])
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/').then(res => {
          setLocation(res.data.results)
        }).catch(err => console.log(err))
      }, [])
      console.log(location)

      return (
        <Container>
            <Row>
                {location.map(elem => {
                    return <LocationCard name={elem.name} type={elem.type} dimension={elem.dimension}/>
                })}

            </Row>


        </Container>

      )


}
