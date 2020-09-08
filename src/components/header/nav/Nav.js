import React from 'react';
import styled from "styled-components";
import Elements from "./Elements";

const Container = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0.8;
  transition: all 1s ease-in;
  &:hover{
    opacity: 1;
  }
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #D9D9D9;
    opacity: 0.1;
    transition: all 1s ease-in;
  }
  &:hover::after{
    opacity: 1;
  }
`;

const Nav = ({curr}) => {
    return (
        <Container>
            <Elements curr={curr}/>
        </Container>
    );
};

export default Nav;