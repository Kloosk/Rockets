import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const ViewBtn = styled.button`
    color: #fff;
    font-size: 2.5rem;
    padding: 7px 14px;
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
   @media (orientation:portrait) and  (max-width: 768px) {
    font-size: 1.5rem;
    position: relative;
    z-index: 1;
  }
   @media only screen and (orientation: landscape) and (max-width: 812px){
    margin-top: 15px;
    font-size: 1rem;
  }
`;
const Href = styled(Link)`
  text-decoration: none;
  color: #D9D9D9;
  padding: 0 5px;
  transition: all 0.2s ease-in;
  
`;
const Btn = () => {
    return (
        <Href to="/view">
            <ViewBtn>
               SURFACE
            </ViewBtn>
        </Href>
    );
};

export default Btn;