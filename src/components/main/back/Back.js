import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {blockBtn, moveToMain, unblockBtn} from "../../../redux";

const Container = styled.button`
  position: absolute;
  top: 2vh;
  right: 2vw;  
  font-size: 2rem;
  padding: 7px 17px;
  color: #ACAAA9;
  background: transparent;
  border: 2px solid #ACAAA9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover{
      color: #fff;
      border-color:#fff;
  }
  @media (orientation:portrait) and  (max-width: 321px) {//iphone5
      font-size: 1rem;
      height: 45px;
  }
  @media only screen and (orientation: landscape) and (max-width: 569px) and (min-width: 300px) {//iphone 5
      font-size: 1rem;
    }
`;
const Svg = styled.svg`
  margin-right: 7px;
  color: #D9D9D9;
  width: 10px;
`;
const Back = () => {
    const dispatch = useDispatch();
    const block = useSelector(state => state.block.block);
    const handleClick = () => {
        if(!block){
            dispatch(moveToMain());
            dispatch(blockBtn());
            setTimeout(() => {
                dispatch(unblockBtn());
            },2000);
        }
    };
    return (
        <Container onClick={handleClick}>
            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                 role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </Svg>
            BACK
        </Container>
    );
};

export default Back;