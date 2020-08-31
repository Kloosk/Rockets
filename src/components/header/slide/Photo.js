import React, {useEffect} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {changePhotoNum} from "../../../redux";

const Container = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => `url(${props.bg}) no-repeat center/cover`};
  margin: 3px;
  cursor: pointer;
`;
const Photo = (props) => {
    const id = props.id;
    useEffect(() => {
        if(id === 0){
            document.getElementById(id).style.border="2px solid #fff";
        }
    },[]);
    const dispatch = useDispatch();
    const numOfPhoto = useSelector(state => state.photos.numOfPhoto);
    const handlePhoto = () => {
        document.getElementById(numOfPhoto).style.border="none";
        dispatch(changePhotoNum(id));
        document.getElementById(id).style.border="2px solid #fff";
    };
    return (
        <Container id={`${id}`} onClick={handlePhoto} bg={props.img}></Container>
    );
};

export default Photo;