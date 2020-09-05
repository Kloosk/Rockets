import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;
const H1 = styled.h1`
  letter-spacing: 7px;
  font-size: 3rem;
  color: #fff;
  margin-bottom: 5px;
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