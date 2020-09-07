import React from 'react';
import styled from 'styled-components'
import Photo from "./Photo";
import {useDispatch, useSelector} from "react-redux";
import {changePhotoNext, changePhotoNum, changePhotoPrev, loadPhotoOff, loadPhotoOn} from "../../../redux";

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.div`
    width: 80%;
    height: 60%;
    transition: background 1s ease;
    background: ${props => `url(${props.bg}) no-repeat center/cover`};
    position: relative;
`;
const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const Arrow = styled.button`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: ${props => props.rotate ? `0` : `90%`};
  transform: translateY(-50%);
  opacity: 0.3;
  width: 10%;
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  transition: opacity 0.5s ease;
  ${Img}:hover &{
    opacity: 1;
  }
`;
const Svg = styled.svg`
  color: #D9D9D9;
  width: 100%;
  transform: ${props => props.rotate ? `rotate(0)` : `rotate(180deg)`};
`;
const RightSide = props => {
    const dispatch = useDispatch();
    const numOfPhoto = useSelector(state => state.photos.numOfPhoto);
    const changePhoto = useSelector(state => state.loadingPhoto.loadingPhoto);
    const rightClick = () => {
        if(!changePhoto){
            dispatch(loadPhotoOn());
            dispatch(changePhotoNext(0,props.imgs.length));
            setTimeout(() => {
                dispatch(loadPhotoOff());
            },1000);
            if(numOfPhoto === (props.imgs.length-1)){
                document.getElementById(props.imgs.length-1).style.border="none";
                dispatch(changePhotoNum(0));
                document.getElementById(`0`).style.border="2px solid #fff";
            }
            else{
                document.getElementById(numOfPhoto).style.border="none";
                document.getElementById(numOfPhoto+1).style.border="2px solid #fff";
                dispatch(changePhotoNum(numOfPhoto+1));
            }
        }

    };
    const leftClick = () => {
        if(!changePhoto){
            dispatch(loadPhotoOn());
            dispatch(changePhotoPrev(0,props.imgs.length));
            setTimeout(() => {
                dispatch(loadPhotoOff());
            },1000);

            if(numOfPhoto === 0){
                document.getElementById(numOfPhoto).style.border="none";
                document.getElementById((props.imgs.length-1)).style.border="2px solid #fff";
                dispatch(changePhotoNum(props.imgs.length-1));
            }
            else{
                document.getElementById(numOfPhoto).style.border="none";
                document.getElementById(numOfPhoto-1).style.border="2px solid #fff";
                dispatch(changePhotoNum(numOfPhoto-1));
            }
        }
    };
    return (
        <Container>
            {props.imgs && <Img bg={props.imgs[numOfPhoto]}>
                <Arrow rotate={true} onClick={leftClick}>
                    <Svg rotate={true} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                         role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512">
                        <path fill="currentColor"
                              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                    </Svg>
                </Arrow>
                <Arrow rotate={false} onClick={rightClick}>
                    <Svg rotate={false} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                         role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512">
                        <path fill="currentColor"
                              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                    </Svg>
                </Arrow>
            </Img>}
            {props.imgs && <Gallery>{props.imgs.map((el,i) => <Photo id={i} key={i} img={el}/>)}</Gallery>}
        </Container>
    );
};

export default RightSide;