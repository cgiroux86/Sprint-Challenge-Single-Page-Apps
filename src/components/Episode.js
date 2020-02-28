import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Col 
} from "reactstrap";
import styled from 'styled-components'

const CustomCard = styled(Card)`
height: auto;
 width: 100%;
 border: 1px solid green;

`
const CustomBody = styled(CardBody)`
 background-size: cover; 
 opacity: 0.4;
`
const CustomText = styled(CardText)`
 color: black;
 font-size: 1.1rem;
 font-weight: bold;
`

export default function EpisodeCard(props) {
  return (
    <Col xs='6' md='3' xl='3'>
<CustomCard>
  <CardHeader><strong>Name:</strong> {props.name}</CardHeader>
  <CustomText>Type: {props.airDate}</CustomText>  
  <CardFooter>Dimension: {props.episode}</CardFooter>
</CustomCard>
</Col>
);
}