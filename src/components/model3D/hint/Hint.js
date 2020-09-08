import React, {useState} from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
  transition: transform 0.8s ease-out;
  transform: ${props => props.hide && `translateY(100%)`};
   @media (max-width: 768px) {
    display: none;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.svg`
  width: 5vw;
  height: 5vh;
  color: #fff;
`;
const Title = styled.h1`
 width: 10vw;
 font-size: 1.2rem;
 color: #fff;
 text-align: center;
 padding-bottom: 2px;
`;
const Dsc = styled.p`
 position: absolute;
 left: 102%;
 top: 0;
 max-height: 80%;
 width: 40vw;
 color: #fff;
 font-size: 1.5rem;
 opacity: 0;
 transition: opacity 0.1s ease;
 ${Container}:hover &{
  opacity: 1;
 }
`;
const Hint = () => {
    const [hide,setHide] = useState(false);
    const hideHintMenu = () => {
        setHide(true);
    };
    return (
        <Container onClick={hideHintMenu} hide={hide}>
            <Title>
                CONTROL
            </Title>
            <Flex>
                <Icon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path>
                </Icon>
                <Icon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"></path>
                </Icon>
            </Flex>
            <Dsc>You can use arrows, mouse and scroll (also as a button) to control the rocket.</Dsc>
        </Container>
    );
};

export default Hint;