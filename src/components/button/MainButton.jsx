import React from "react";
import styled from "styled-components";

const Container = styled.button`
    width: 171px;
    height: 171px;
    background-color: #F2F8FF;
    border-radius: 12px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 20px;
    align-items: baseline;
    &:focus {
        border: none;
        outline: none;
    }
`
const BigButtonTitle = styled.p`
    color: #222;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    height: 60px;
    z-index: 1;
`
const BigButtonIconBox = styled.div`
    position: relative;
    left:23px;
    bottom: 4px;
    width: 120px;
    height: 104px;
    z-index: 0;
`
const BigButtonIcon = styled.img`
    width: 120px;
    height: 88px;
    padding-bottom:4px ;
`

export const MainButton = (props) => {
    const {firsttext, secondtext, icon, onClick} = props;
  return (
    <Container onClick={onClick}>
            <BigButtonTitle>
                {firsttext||null}<br/>
                {secondtext||null}
            </BigButtonTitle>
            <BigButtonIconBox>
                <BigButtonIcon src={icon}/>
            </BigButtonIconBox>
    </Container>
  );
};