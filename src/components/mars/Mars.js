import * as THREE from 'three'
import React, {useRef, useMemo, useState, useEffect} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import styled from 'styled-components'
import Nav from "../header/nav/Nav";
import earth_map from "./images/earth_map.jpg";
import mars_map from "./images/mars.jpg"
import sun_map from "./images/sun.jpg"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
`;
const CanvasStyled = styled(Canvas)`
   width: 100%;
   height: 90%;
`;
const RocketModel = () => {
    const [model,setModel] = useState();
    useEffect(() => {
     new GLTFLoader().load('/rockets/falcon9/scene.gltf',setModel);
    },[]);
    return (
       model ? <primitive object={model.scene}></primitive> : null
    )
};
const Mars = () => {
    function Sphere(props) {
        const texture = useMemo(() => new THREE.TextureLoader().load(props.url), [props.url]);
        const mesh = useRef();
        useFrame(() => (mesh.current.rotation.y += props.rot));

        return (
            <mesh
                {...props}
                ref={mesh}>
                <sphereBufferGeometry attach="geometry" args={[1, 32, 32]}/>
                <meshPhongMaterial attach="material" map={texture}/>
            </mesh>
        )
    }
    return (
        <Container>
            <Nav/>
            <CanvasStyled camera={{ fov: 75, position: [0, 0, 11]}}>
                <pointLight position={[-4, 6.5, 11]}/>
                <Sphere position={[-4, 6.5, 2]} url={sun_map} rot={0.001}/>
                <Sphere position={[-2, 3, 0]} url={earth_map} rot={0.002}/>
                <Sphere position={[2,-1,1]} url={mars_map} rot={0.002}/>
                <RocketModel/>
            </CanvasStyled>
        </Container>
    );
};

export default Mars;