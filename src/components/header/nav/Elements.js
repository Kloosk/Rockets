import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Ul = styled.ul`
  width: 70%;
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
  font-size: 1.5rem;
`;
const Elements = ({curr}) => {
    const [current,setCurrent] = useState(curr);
    const styles = {
        borderRight: '1px solid #D9D9D9',
        borderLeft: '1px solid #D9D9D9'
    };
    return (
        <Ul>
            <Li><Href to="/" style={current ? styles : null}>ROCKETS</Href></Li>
            <Li><Href to="/mars" style={current ? null : styles}>MARS</Href></Li>
        </Ul>
    );
};

export default Elements;