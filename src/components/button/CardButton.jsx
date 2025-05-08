import React from "react";
import styled from "styled-components";
import { CardBenefitChipList } from "../../lists/card/CardBenefitChipList";

const Container = styled.button`
    width: 358px;
    height: 80px;
    background-color: #fff;
    /* border-radius: ${props => props.radius};*/
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 16px;
    &:focus,
    &:after,
    &:hover {
        border: none;
        outline: none;
    }
`
// const CardNum = styled.p`
//     padding: 0 0 0 8px;
//     position: relative;
//     left: -16px;
//     color: var(--Main-Color-100, #007BFF);
//     text-align: center;
//     font-size: 16px;
//     font-weight: 600;
// `
const CardInfo = styled.div`
    background-color: green;
    color: #222;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    height: 64px;
    width: 100%;
    gap: 16px;
    display: flex;

`
const CardImgBox = styled.div`
    width: 64px;
    height: 64px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CardImg = styled.img`
    background-color: yellow;
    width: 40.421px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 2px;
`
const CardInfoTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const CardCompany = styled.p`
    color: var(--Gray-6, #888);
    /* Label/02_Medium */
    font-size: 10px;
    font-weight: 500;
`
const CardName = styled.p` 
    width: 190px;
    /* ${props => props.width}; 190 / 214 */
    text-align: start;
    overflow: hidden;
    color: var(--Gray-9, #222);
    text-overflow: ellipsis;

    /* Title/01_Semibold */
    font-size: 16px;
    font-weight: 600;
`

const Icon = styled.div`
    background-color: green;
    width: 24px;
    height: 24px;
`
export const CardButton = (props) => {
    const {cardnum, cardImg, cardCompany, cardName} = props;
  return (
    <Container>
        {cardnum||null}
        <CardInfo>
            <CardImgBox>
                <CardImg src={cardImg}/>
            </CardImgBox>
            <div>
                <CardInfoTexts>
                    <CardCompany>{cardCompany}</CardCompany>
                    <CardName>{cardName}</CardName>
                </CardInfoTexts>
                <CardBenefitChipList/>
            </div>
        </CardInfo>
        <Icon></Icon>
    </Container>
  );
};