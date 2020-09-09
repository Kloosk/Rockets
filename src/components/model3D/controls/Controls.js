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
   @media (orientation:portrait) and  (max-width: 768px) {
    width: 100vw;
    padding: 0;
  }
  @media only screen and (orientation: landscape)and (max-width: 812px) {
   left: 0;
   width: 50vw;
   padding: 0;
   
  }
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
`;
const Txt = styled.h1`
  text-align: right;
  width: 40%;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 5px;
   @media (orientation:portrait) and  (max-width: 768px) {
    font-size: 1rem;
  }
  @media only screen and (orientation: landscape) and (max-width: 812px){
   font-size: 1rem;
   width: 15%;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  border: 1px solid #fff;
  width: 100px;
  height: 50px;
  background-color: transparent;
  font-size: 2rem;
  color: #fff;
  margin: 0 7px;
  &:hover{
    transform: scale(1.1);
  }
   @media (orientation:portrait) and  (max-width: 768px) {
    width: 60%;
    height: 30%;
  }
   @media only screen and (orientation: landscape) and (max-width: 812px){
   width: 50px;
   height: 25px;
   font-size: 1rem;
  }
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