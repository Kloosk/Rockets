import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;
const H1 = styled.h1`
  letter-spacing: 20px;
  font-size: 5rem;
  color: #fff;
   @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 3px;
  }
`;
const Title = () => {
    return (
        <Container>
            <H1>MISSION</H1>
            <H1>MARS</H1>
        </Container>
    );
};

export default Title;