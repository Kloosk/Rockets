import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {Canvas, useFrame ,extend, useThree} from 'react-three-fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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
    const [model,setModel] = useState();
    const rocketRef = useRef();
    useEffect(() => {
        new GLTFLoader().load(url,setModel);
    },[url]);
    return (
        <Container camera={{ fov: 75, position: [0, 0, 100]}}>
            {ambientlight && <ambientLight intensity={intensity}/>}
            {pointlight && <pointLight intensity={intensity} position={[10,20,10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[-10,-20,-10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[10,-20,10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[10,20,10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[0,20,10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[0,20,-10]}/>}
            {pointlight && <pointLight intensity={intensity} position={[0,0,15]}/>}
            {pointlight && <pointLight intensity={intensity} position={[0,0,-15]}/>}
            <Controls/>
            {model ? <primitive ref={rocketRef} object={model.scene} scale={[scale,scale,scale]} position={[0,positionY,0]}></primitive> : null}
        </Container>
    );
};

export default Rocket3D;