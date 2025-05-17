import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 390px;
    height: 52px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background-color: #fff;
`
const IconBox = styled.button`
    display: flex;
    width: 44px;
    height: 44px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: none;
    &:focus {
        border: none;
        outline: none;
    }
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`
const HeaderText = styled.p`
    color: var(--Gray-9, #222);
    text-align: center;

    /* Headline/01_SemiBold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    letter-spacing: -0.5px;
`

export const Header = (props) =>{
    const {title, leftIcon, rightIcon} = props
    return(
        <Container>
            <IconBox>
                <Icon src={leftIcon}/>
            </IconBox>
            <HeaderText>{title}</HeaderText>
            <IconBox>
                <Icon src={rightIcon}/>
            </IconBox>
        </Container>
    )
}