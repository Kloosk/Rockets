import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {moveDown, moveToDsc} from "../../../redux";

const Container = styled.div`
    width: 50%;
    height: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 5px;
`;
const Title = styled.h1`
 color: #D9D9D9;
 margin-bottom: 10px;
`;
const Dsc = styled.p`
 color: #D9D9D9;
 text-align: center;
 margin-bottom: 20px;
`;
const Btn = styled.button`
   border: 1px solid #D9D9D9;
   background: none;
   padding: 7px 13px;
   cursor: pointer;
   color: #D9D9D9;
   &:nth-child(even){
    margin-top: 10px;
   }
`;
const LeftSide = props => {
    const dispatch = useDispatch();
    const clickView = () => {
        dispatch(moveToDsc());
    };
    const click3D = () => {
        dispatch(moveDown());
    };
    return (
        <Container>
            <Title>{props.title}</Title>
            <Dsc>{props.dsc}</Dsc>
            <Btn onClick={clickView}>View More</Btn>
            <Btn onClick={click3D}>3D</Btn>
        </Container>
    );
};

export default LeftSide;