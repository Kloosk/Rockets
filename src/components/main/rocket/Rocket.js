import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: 5vh 0;
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: #ACAAA9;
  transform: rotate(90deg);
  grid-column: 1/2;
  border-bottom: 2px solid #ACAAA9;
  width: 80%;
`;
const Info = styled.div`
  font-size: 1rem;
  color: #ACAAA9;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 5px;
 
`;
const Wiki  = styled.a`
  color: #ACAAA9;
  text-align: center;
  text-decoration: none;
  grid-column: 1/4;
  font-size: 2rem;
  border: 2px solid #ACAAA9;
  padding: 5px;
`;
const Infot = styled.p`
    width: 20%;
`;
const Infocont = styled.div`
    grid-column: 2/4;
`;
const Rocket = (props) => {
    const addDot = (cost) => {
        if(cost === undefined){
            return cost
        }
        let costStr = cost.toString();
        let newStr = "";
        let k = 0;
        for(let i=costStr.length-1; i>=0;i--){
            if(k===3){
                newStr+=" ";
                k=0;
            }
            newStr+=[costStr[i]];
            k++;
        }
        return newStr.split("").reverse().join("");
    };
    return (
        <Container>
            <Title>{props.title}</Title>
            <Infocont>
                <Info><Infot>Country:</Infot> {props.country}</Info>
                <Info><Infot>First flight:</Infot>  {props.first_flight}</Info>
                <Info><Infot>Cost:</Infot>  {`$${addDot(props.cost)}`}</Info>
                <Info><Infot>Diameter:</Infot>  {props.diameter && `${props.diameter.meters}m (${props.diameter.feet}ft)`}</Info>
                <Info><Infot>Height:</Infot>  {props.height && `${props.height.meters}m (${props.height.feet}ft)`}</Info>
                <Info><Infot>Mass:</Infot>  {props.mass && `${(props.mass.kg * 0.001).toFixed(0)}t`}</Info>
            </Infocont>
            <Wiki target="blank" href={props.more_info}>More (wikipedia)</Wiki>
        </Container>
    );
};

export default Rocket;