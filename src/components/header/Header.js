import React from 'react';
import styled from 'styled-components'
import Nav from "./nav/Nav";
import Arrows from "./arrows/Arrows";
import Slide from "./slide/Slide";
import {useSelector} from "react-redux";

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
  transition: transform 2s ease;
  transform: ${props => (props.move && `translateX(-100vw)`) || (props.move3d && `translateY(-100vh)`)};
`;

const Header = () => {
    const move = useSelector(state => state.move.move);
    const move3d = useSelector(state => state.move3d.move);

    return (
        <Container move={move} move3d={move3d}>
            <Arrows/>
            <Nav/>
            <Slide/>
        </Container>
    );
};

export default Header;