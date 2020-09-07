import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {Canvas, useFrame ,extend, useThree} from 'react-three-fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useDispatch, useSelector} from "react-redux";
import {lightSet, scaleSet} from "../../../redux";

extend({OrbitControls});

const Container = styled(Canvas)`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
`;

const Controls = () => {
    const {camera,gl} = useThree();
    const orbitRef = useRef();

    useFrame(() => {
       orbitRef.current.update();
    });
    return(
        <orbitControls args={[camera,gl.domElement]} autoRotate ref={orbitRef}/>
        )
};


const Rocket3D = ({url,pointlight,ambientlight,intensity,scale,positionY}) => {
    const dispatch = useDispatch();
    const [model,setModel] = useState();
    const rocketRef = useRef();
    useEffect(() => {
        dispatch(lightSet(intensity));
        dispatch(scaleSet(scale));
        new GLTFLoader().load(url,setModel);
         },[url]);
    const light = useSelector(state => state.light.value);
    const size = useSelector(state => state.scale.value);
    return (
        <Container camera={{ fov: 75, position: [0, 0, 100]}}>
            {ambientlight && <ambientLight intensity={light}/>}
            {pointlight && <pointLight intensity={light} position={[10,20,10]}/>}
            {pointlight && <pointLight intensity={light} position={[-10,-20,-10]}/>}
            {pointlight && <pointLight intensity={light} position={[10,-20,10]}/>}
            {pointlight && <pointLight intensity={light} position={[10,20,10]}/>}
            {pointlight && <pointLight intensity={light} position={[0,20,10]}/>}
            {pointlight && <pointLight intensity={light} position={[0,20,-10]}/>}
            {pointlight && <pointLight intensity={light} position={[0,0,15]}/>}
            {pointlight && <pointLight intensity={light} position={[0,0,-15]}/>}
            <Controls/>
            {model ? <primitive ref={rocketRef} object={model.scene} scale={[size,size,size]} position={[0,positionY,0]}></primitive> : null}
        </Container>
    );
};

export default Rocket3D;