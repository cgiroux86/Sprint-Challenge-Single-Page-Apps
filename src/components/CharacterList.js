import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Row,Container} from 'reactstrap'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] =useState([])
  const [search, setSearch] = useState()
  
  console.log(character)

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`).then(res => {
      setCharacter(res.data.results)
    }).catch(err => console.log(err))
  }, [])
console.log(character)

  return (
    
      <Container >
        <div className='cont'>
        <SearchForm character={character} setCharacter={setCharacter} search={search} setSearch={setSearch}/>
        </div>
          <Row>
            {character.map((elem,i) => {
                return <CharacterCard key={i} origin={elem.origin.name} url={elem.image} name={elem.name} created={elem.created} id= {elem.id}/>
            })} 
       </Row>  
       <button onClick={() => props.setPage(props.page+1)} >Next Page</button>
      <button onClick={() => props.setPage(props.page-1)}>Prev Page</button>
      {console.log(props.page)}
     </Container>
    
  )
}
