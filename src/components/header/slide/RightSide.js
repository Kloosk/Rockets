import React from 'react';
import styled from 'styled-components'
import Photo from "./Photo";
import {useSelector} from "react-redux";

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
    transition: background 0.2s ease;
    background: ${props => `url(${props.bg}) no-repeat center/cover`};
`;
const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const RightSide = props => {
    const numOfPhoto = useSelector(state => state.photos.numOfPhoto);
    return (
        <Container>
            {props.imgs && <Img bg={props.imgs[numOfPhoto]}></Img>}
            {props.imgs && <Gallery>{props.imgs.map((el,i) => <Photo id={i} key={i} img={el}/>)}</Gallery>}
        </Container>
    );
};

export default RightSide;