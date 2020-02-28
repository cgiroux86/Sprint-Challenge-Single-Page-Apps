import React from "react";
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import "../index.css";

const CustomLink = styled(NavLink)`{
  text-align: center;
  
}`
const StyledImg = styled.img `{
  height: 500px;
  width: 500px;
  text-align: center;

}`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className='link'>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/characters'>Characters</CustomLink>
      <CustomLink to='/locations'>Locations</CustomLink>
      <CustomLink to='/episodes'>Episodes</CustomLink>
      </div>
    </header>
  );
}
