import React, { useState } from "react";


export default function SearchForm(props) {

  const handleChange = (e) => {
    props.setSearch(e.target.value)
    
    console.log(props.search)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.setCharacter(props.character.filter(elem => elem.name.toLowerCase().includes(props.search.toLowerCase())))
    console.log(props.character)
  }
 
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label>Search
        <input onChange={handleChange} type='text'></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
