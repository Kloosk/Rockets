import * as THREE from 'three'
import React, {useRef, useMemo, useState, useEffect} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import styled from 'styled-components'
import Nav from "../header/nav/Nav";
import earth_map from "./images/earth_map.jpg";
import mars_map from "./images/mars.jpg"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Description from "./Description";
import Title from "./Title";
import Btn from "./Btn";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
`;
const Flex = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  padding: 15px;
`;
const Missionmars = styled.div`
  margin-top: 10vh;
  padding: 30px 0 40px 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CanvasStyled = styled(Canvas)`
`;
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
    const RocketModel = () => {
        const [model,setModel] = useState();
        const mesh = useRef();
        const move = () => {
            if(mesh.current.position.x <= 2){
                mesh.current.position.x += 0.006;
            }
        };
        const rotate = () => {
            if(mesh.current.rotation.z >= -0.5 && mesh.current.position.x < 1){
                mesh.current.rotation.z -= 0.01;
            }
            else if(mesh.current.position.x > 1.7 && mesh.current.rotation.z < 0 && mesh.current.position.x < 2){
                mesh.current.rotation.z += 0.01;
            }
        };

        useFrame(() =>(model && rotate()));
        useFrame(() =>(model && move()));
        useEffect(() => {
            new GLTFLoader().load('./rockets/falcon9/scene.gltf',setModel);
        },[]);
        return (
            model ? <primitive ref={mesh} position={[-2, -0.5, 0]} scale={[0.04,0.04,0.04]} object={model.scene}></primitive> : null
        )
    };
    return (
        <Container>
            <Nav/>
            <Flex>
                <Description/>
                <Missionmars>
                    <Title/>
                    <CanvasStyled camera={{ fov: 26, position: [0, 0, 11]}}>
                        <pointLight position={[0, 0, 10]}/>
                        <RocketModel/>
                        <Sphere position={[-2, -1, 0]} url={earth_map} rot={0.002}/>
                        <Sphere position={[2,-1,1]} url={mars_map} rot={0.002}/>
                    </CanvasStyled>
                    <Btn/>
                </Missionmars>
            </Flex>
        </Container>
    );
};

export default Mars;