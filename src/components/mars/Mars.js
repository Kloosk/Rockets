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
import {useDispatch} from "react-redux";
import {scrollOn} from "../../redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
   @media (max-width: 768px) {
    height: auto;
  }
`;
const Flex = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 15px;
  @media (max-width: 768px) {
    height: auto;
    padding: 0;
    flex-direction: column-reverse;
  }
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
   @media (max-width: 768px) {
    margin: 0;
    z-index: 1;
    position: static;
    height: 90vh;
    width: 100%;
  }
  @media only screen and (orientation: landscape)and (max-width: 812px) {
   width: 40%;
  }
`;
const CanvasStyled = styled(Canvas)`
    
`;
const Mars = () => {
    document.title = "SpaceX Mars";
    const dispatch = useDispatch();
    dispatch(scrollOn());
    const [mobile,setMobile] = useState(26);
    useEffect(() => {
        if(window.innerWidth < 768){
            setMobile(38);
        }
    },[]);
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
            model ? <primitive ref={mesh} position={[-2, -0.5, 2]} scale={[0.03,0.03,0.03]} object={model.scene}></primitive> : null
        )
    };
    return (
        <Container>
            <Nav curr={false}/>
            <Flex>
                <Description/>
                <Missionmars>
                    <Title/>
                    <CanvasStyled camera={{ fov: mobile, position: [0, 0, 11]}}>
                        <pointLight position={[0, 0, 10]}/>
                        <Sphere position={[-2, -1, 0]} url={earth_map} rot={0.002}/>
                        <Sphere position={[2,-1,1]} url={mars_map} rot={0.002}/>
                        <RocketModel/>
                    </CanvasStyled>
                    <Btn/>
                </Missionmars>
            </Flex>
        </Container>
    );
};

export default Mars;