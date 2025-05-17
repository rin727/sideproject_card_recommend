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
const CardInfos = styled.div`
    color: #222;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    height: 64px;
    width: 100%;
    display: flex;

`
const CardImgBox = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    flex-shrink: 0;
`
const CardImg = styled.img`
    width: 40.421px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 2px;
`
const CardInfo = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
    width: 100%;
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
    flex-shrink: 0
    `

    export const CardButton = ({ cardnum, cardImg, cardCompany, cardName, benefits }) => {
  return (
    <Container>
      <CardInfos>
        <CardImgBox>
          <CardImg src={cardImg || "/default-image.png"} />
        </CardImgBox>
        <CardInfo>
          <CardInfoTexts>
            <CardCompany>{cardCompany}</CardCompany>
            <CardName>{cardName}</CardName>
          </CardInfoTexts>
          <CardBenefitChipList benefits={benefits} />
        </CardInfo>
      </CardInfos>
      <Icon />
    </Container>
  );
};
