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
  width: 20%;
  height: 30%;
`;
const Loading = ({loading}) => {
    return (
        <Container loading={loading}>
            <Img src={preview} alt="Loading"/>
        </Container>
    );
};

export default Loading;