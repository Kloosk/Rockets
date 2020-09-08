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
   @media (max-width: 768px) {
    font-size: 1.5rem;
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