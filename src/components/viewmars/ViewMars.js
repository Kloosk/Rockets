import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import {CubeTextureLoader} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";
import BackBtn from "./BackBtn";

extend({ OrbitControls });

const CanvasStyled = styled(Canvas)`
    width: 100vw;
    height: 100vh;
    cursor: pointer;
`;

const CameraControls = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree();

    const controls = useRef();
    useFrame(() => controls.current.update());
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            enableZoom={false}
            autoRotate
        />
    );
};

function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "./texturesMars/arid_ft.jpg",
        "./texturesMars/arid_bk.jpg",
        "./texturesMars/arid_up.jpg",
        "./texturesMars/arid_dn.jpg",
        "./texturesMars/arid_rt.jpg",
        "./texturesMars/arid_lf.jpg",
    ]);

    scene.background = texture;
    return null;
}

function ViewMars() {
    return (
        <>
            <BackBtn/>
            <CanvasStyled>
                <CameraControls />
                <SkyBox />
            </CanvasStyled>
        </>
    );
}

export default ViewMars;
