import React from 'react';
import styled from 'styled-components'
import preview from './preview.gif'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20%;
  height: 30%;
`;
const Loading = () => {
    return (
        <Container>
            <Img src={preview} alt="Loading"/>
        </Container>
    );
};

export default Loading;