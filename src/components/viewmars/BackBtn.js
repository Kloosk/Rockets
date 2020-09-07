import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled(Link)`
    z-index: 99;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    background: transparent;
`;
const Svg = styled.svg`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #D9D9D9;
  width: 20%;
`;
const BackBtn = () => {
    return (
        <Container to="/mars">
            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                 role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </Svg>
        </Container>
    );
};

export default BackBtn;