import React, {useState} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom'
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'


export default function App() {
  const [page, setPage] = useState(1)

  return (
    <main>
       <Header />
      <Route exact path='/'>
       <WelcomePage/>
      </Route>
      <Route exact path='/characters'>
      <CharacterList page={page} setPage={setPage}/>
      </Route>
      <Route exact path ='/locations'>
      <LocationsList/>
      </Route>
      <Route exact path='/episodes'>
      <EpisodeList/>
      </Route>
    </main>
  );
}
