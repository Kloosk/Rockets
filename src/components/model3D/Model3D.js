import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import Rocket3D from "./rocket3d/Rocket3D";
import Controls from "./controls/Controls";
import Hint from "./hint/Hint";
import Back from "./back/Back";

const rocketsURL = [
    {
        name:'falcon1',
        pointLight: false,
        ambientLight: true,
        intensity: 1.5,
        scale: 3,
        positionY: -40
    },
    {
        name: 'falcon9',
        pointLight: false,
        ambientLight: true,
        intensity: 1.5,
        scale: 1.5,
        positionY: -50
    },
    {
        name: 'falconHeavy',
        pointLight: true,
        ambientLight: false,
        intensity: 1,
        scale: 6,
        positionY: -15
    },
    {
        name: 'starship',
        pointLight: true,
        ambientLight: false,
        intensity: 20,
        scale: 0.01,
        positionY: 20
    }];
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transition: transform 2s ease;
  transform: ${props => props.move3d ? `translateY(-200vh)` : `translateY(-100vh)`};
`;
const Model3D = () => {
    const [url,setUrl] = useState(`/rockets/${rocketsURL[0].name}/scene.gltf`);
    const move3d = useSelector(state => state.move3d.move);
    const id = useSelector(state => state.slide.numOfSlide);
    useEffect(() => {
        setUrl(`/rockets/${rocketsURL[id].name}/scene.gltf`);
    },[id]);
    return (
        <Container move3d={move3d}>
            <Rocket3D url={url} pointlight={rocketsURL[id].pointLight} ambientlight={rocketsURL[id].ambientLight} intensity={rocketsURL[id].intensity} scale={rocketsURL[id].scale} positionY={rocketsURL[id].positionY} />
            <Controls/>
            <Hint/>
            <Back/>
        </Container>
    );
};

export default Model3D;