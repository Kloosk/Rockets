import React,{useState}from 'react';
import styled from 'styled-components'
import Nav from "./nav/Nav";
import Arrows from "./arrows/Arrows";
import Slide from "./slide/Slide";
import {useSelector} from "react-redux";
import Footer from "../footer/Footer";

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: #0D0D0D;
  transition: transform 1.9s ease;
  transform: ${props => (props.move && `translateX(-100vw)`) || (props.move3d && `translateY(-100vh)`)};
`;
const QuestionMark = styled.div`
  position: absolute;
  z-index: 5;
  top: 17px;
  right: 17px;
  color: #fff;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  &:hover{
    opacity: 1;
  }
  
`;
const Btn = styled.button`
 width: 40px;
 height: 40px;
 cursor: pointer;
 border: none;
 background: transparent;
 outline: none;
 color: #fff;
 
`;
const Header = () => {
    document.title = "SpaceX Rockets";
    const move = useSelector(state => state.move.move);
    const move3d = useSelector(state => state.move3d.move);
    //const [show,setShow] = useState(false);
    // const handleClick = () => {
    //     setShow(!show);
    // };
    // window.addEventListener("click",() => {
    //     if(show){
    //         setShow(false);
    //     }
    // });
    return (
        <Container move={move} move3d={move3d}>
            <Arrows/>
            <Nav curr={true}/>
            <Slide/>
            {/*<QuestionMark >*/}
            {/*    <Btn onClick={handleClick}>*/}
            {/*        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path></svg>*/}
            {/*    </Btn>*/}
            {/*    <Footer click={show}/>*/}
            {/*</QuestionMark>*/}
        </Container>
    );
};

export default Header;