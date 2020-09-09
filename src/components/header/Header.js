import React from 'react';
import styled from 'styled-components'
import Nav from "./nav/Nav";
import Arrows from "./arrows/Arrows";
import Slide from "./slide/Slide";
import {useDispatch, useSelector} from "react-redux";
import {scrollOff} from "../../redux";
import Background from "../background/Background";

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background: transparent;
  transition: transform 1.9s ease;
  transform: ${props => (props.move && `translateX(-100vw)`) || (props.move3d && `translateY(-100vh)`)};

`;
const Header = () => {
    document.title = "SpaceX Rockets";
    const dispatch = useDispatch();
    dispatch(scrollOff());
    const move = useSelector(state => state.move.move);
    const move3d = useSelector(state => state.move3d.move);
    return (
        <Container move={move} move3d={move3d}>
            <Background/>
            <Arrows/>
            <Nav curr={true}/>
            <Slide/>
        </Container>
    );
};

export default Header;