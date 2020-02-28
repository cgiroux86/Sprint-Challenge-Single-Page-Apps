import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Container, Row} from 'reactstrap'
import Episode from './Episode'

export default function EpisodeList() {
    const [episode,setEpisode] = useState([])

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/').then(res => {
          setEpisode(res.data.results)
        }).catch(err => console.log(err))
      }, [])
      console.log(episode)

      return (
        <Container>
            <Row>
                {episode.map(elem => {
                    return <Episode name={elem.name} airDate={elem.air_date} episode={elem.episode}/>
                })}

            </Row>


        </Container>

      )


}
