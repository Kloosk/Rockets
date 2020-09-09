//rsc
import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios';
import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Container = styled.div`
  height: 90vh;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: ${props => props.animOn ? `translate(${props.wayToMove})` : `translate(0)`};
  opacity: ${props => props.animOn ? '0' : '1'};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
   @media only screen and (orientation: landscape) and (max-width: 825px) and (min-width: 560px){
    flex-direction: row;
   }
`;
const Slide = () => {
    const URL = `https://api.spacexdata.com/v3/rockets`;
    const [firstRun,setFirstRun] = useState(true);
    const [animOn,setAnimOn] = useState(false);
    const [rockets,setRockets] = useState([]);
    const [rocket,setRocket] = useState([]);
    const numOfSlide = useSelector(state => state.slide.numOfSlide);
    const wayMove = useSelector(state => state.ways.wayToMove);
    useEffect(() => {
        axios.get(URL)
            .then(res =>{
                setRockets(res.data);
                setRocket(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    useEffect(() => {
        if(firstRun === false){
            setAnimOn(true);
            setTimeout(() => {
                setRocket(rockets[numOfSlide]);
                setAnimOn(false);
            }, 500);
        }
        setFirstRun(false);
    },[numOfSlide]);
    return (
        <Container animOn={animOn? 1 : 0} wayToMove={wayMove ? '120%' : '-120%'}>
            {rocket && <LeftSide title={rocket.rocket_name} dsc={rocket.description}/> }
            {rocket && <RightSide imgs={rocket.flickr_images}/> }
        </Container>
    );
};

export default Slide;