import React, {useRef} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Ul = styled.ul`
  width: 50%;
  list-style: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Li = styled.li`
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all 0.2s ease-in;
    width: 0;
    height: 1px;
    background-color: #D9D9D9;
  }
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transition: all 0.2s ease-in;
    width: 0;
    height: 1px;
    background-color: #D9D9D9;
  }
   &:hover::after,&:hover::before{
    width: 45%;
  }
`;
const Href = styled(Link)`
  text-decoration: none;
  color: #D9D9D9;
  padding: 0 5px;
  transition: all 0.2s ease-in;
  border-right: 1px solid #0D0D0D;
  border-left: 1px solid #0D0D0D;
`;
const Elements = () => {
    const listRef = useRef(null);
    const handleClick = e => {
       listRef.current.childNodes.forEach(el => {
            el.childNodes[0].style.borderLeft = "1px solid #0D0D0D";
            el.childNodes[0].style.borderRight = "1px solid #0D0D0D";
        });
       e.target.style.borderLeft = "1px solid #D9D9D9";
       e.target.style.borderRight = "1px solid #D9D9D9";
    };
    return (
        <Ul ref={listRef}>
            <Li><Href onClick={handleClick} style ={{borderRight: "1px solid #D9D9D9", borderLeft: "1px solid #D9D9D9"}} to="/">ROCKETS</Href></Li>
            <Li><Href onClick={handleClick} to="/mars">MARS</Href></Li>
        </Ul>
    );
};

export default Elements;