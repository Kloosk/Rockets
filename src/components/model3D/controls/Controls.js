import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {lightAdd, lightSub, scaleAdd, scaleSub} from "../../../redux";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  width: 20vw;
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
`;
const Txt = styled.h1`
  width: 50%;
  font-size: 2rem;
  color: #fff;
  margin-right: 5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  
`;
const Btn = styled.button`
  cursor: pointer;
  border: 1px solid #fff;
  width: 20%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  margin: 0 2px;
`;

const Controls = ({name}) => {
    const dispatch = useDispatch();
    const setLightAdd = () => {
        dispatch(lightAdd());
    };
    const setLightSub = () => {
        dispatch(lightSub());
    };
    const setScaleAdd = () => {
        if(name === 'starship'){
        dispatch(scaleAdd(0,true))
    }else dispatch(scaleAdd());
    };
    const setScaleSub = () => {
        if(name === 'starship'){
            dispatch(scaleSub(0,true))
        }else dispatch(scaleSub());

    };
    return (
        <Container>
            <Flex>
                <Txt>Size</Txt>
                <Btn onClick={setScaleAdd}>+</Btn>
                <Btn onClick={setScaleSub}>-</Btn>
            </Flex>
            <Flex>
                <Txt>Light</Txt>
                <Btn onClick={setLightAdd}>+</Btn>
                <Btn onClick={setLightSub}>-</Btn>
            </Flex>
        </Container>
    );
};

export default Controls;