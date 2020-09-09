import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import Rocket from "./rocket/Rocket";
import {useSelector} from "react-redux";
import Back from "./back/Back";
import Background from "../background/Background";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    transition: transform 1.9s ease;
    transform: ${props => props.move ? `translate(0,-100vh);` : `translate(100vw,-100vh);`}
`;
const Main = () => {
    const numOfSlide = useSelector(state => state.slide.numOfSlide);
    const URL = `https://api.spacexdata.com/v3/rockets`;
    const [rockets,setRockets] = useState([]);
    const [rocket,setRocket] = useState([]);
    const move = useSelector(state => state.move.move);
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
        setRocket(rockets[numOfSlide]);
    },[numOfSlide]);
    return (
        <Container move={move}>
            <Background/>
            <Back/>
            {rocket && <Rocket title={rocket.rocket_name} cost={rocket.cost_per_launch} country={rocket.country} diameter={rocket.diameter} first_flight={rocket.first_flight} height={rocket.height} mass={rocket.mass} more_info={rocket.wikipedia} />}
        </Container>
    );
};

export default Main;