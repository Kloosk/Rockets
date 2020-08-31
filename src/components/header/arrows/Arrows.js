import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeSlidePrev, changeSlideNext, changePhotoNum, wayToMove} from "../../../redux";

const LeftArrow = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 5vw;
  height: 100vh;
  opacity: 0.1;
  border-right: 1px solid #D9D9D9;
  cursor: pointer;
  transition: all 1s ease-in;
  &:hover{
    opacity: 1;
  }
`;
const RightArrow = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  width: 5vw;
  height: 100vh;
  opacity: 0.1;
  border-left: 1px solid #D9D9D9;
  cursor: pointer;
  transition: all 1s ease-in;
  background-color: #000;
  &:hover{
    opacity: 1;
  }
`;
const Svg = styled.svg`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #D9D9D9;
  width: 20%;
`;
const Arrows = () => {
    let clickBefore = false;
    const numOfPhoto = useSelector(state => state.photos.numOfPhoto);
    const dispatch = useDispatch();
    const clickLeft = () => {
        if(clickBefore === false){
            clickBefore = true;
            dispatch(changeSlidePrev());
            dispatch(wayToMove(false));
            setTimeout(() => {
                dispatch(changePhotoNum());
                document.getElementById(numOfPhoto).style.border="none";
                document.getElementById("0").style.border="2px solid #fff";
            },500);
            setTimeout(() => {
                clickBefore = false;
            },1000);
        }
    };
    const clickRight = () => {
        if(clickBefore === false){
            clickBefore = true;
            dispatch(changeSlideNext());
            dispatch(wayToMove(true));
            setTimeout(() => {
                dispatch(changePhotoNum());
                document.getElementById(numOfPhoto).style.border="none";
                document.getElementById("0").style.border="2px solid #fff";
            },500);
            setTimeout(() => {
                clickBefore = false;
            },1000);
        }
    };
    return (
        <div>
            <LeftArrow onClick={clickLeft}>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                     role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </Svg>
            </LeftArrow>
            <RightArrow onClick={clickRight}>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                     role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </Svg>
            </RightArrow>
        </div>
    );
};

export default Arrows;