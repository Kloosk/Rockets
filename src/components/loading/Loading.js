import React from 'react';
import styled from 'styled-components'
import preview from './preview.gif'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  z-index: ${props => props.loading && -1};
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 30%;
  height: 35%;
   @media (orientation:portrait) and  (max-width: 768px) {
    width: 100%;
    height: 35%;
  }
   @media only screen and (orientation: landscape)and (max-width: 812px) {
      width: 40%;
  }
`;
const Txt = styled.h1`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
     @media (orientation:portrait) and  (max-width: 321px) {//iphone5
      font-size: 1rem;
  }
   @media only screen and (orientation: landscape) and (max-width: 569px) and (min-width: 300px) {//iphone 5
      font-size: 1rem;
    }
`;
const Loading = ({loading}) => {
    return (
        <Container loading={loading}>
            <Img src={preview} alt="Loading"/>
            <Txt>It may take a few seconds.</Txt>
        </Container>
    );
};

export default Loading;