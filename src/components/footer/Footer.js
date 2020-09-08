import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;  
  background-color: #000;
  color: #fff;
  width: 50vw;
  height: 100vh;
  transition: transform 1s ease;
  opacity: 1;
  transform: ${props => props.click ? `translate(0,0)` : `translate(100%,-100%)`};
`;
const Footer = ({click}) => {
    return (
        <Container click={click}>

        </Container>
    );
};

export default Footer;