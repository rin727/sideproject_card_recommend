import React from "react";
import styled from "styled-components";
import { Header } from "../../components/navigation/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
`
const FirstInfoBox = styled.div`
    display: flex;
    flex-direction: row;
`
const SecondInfoBox = styled.div`
    display: flex;
    flex-direction: row;
`
const InfoText = styled.h3`
    color: var(--Gray-9, #222);

    /* Headline/02_Medium */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    letter-spacing: -0.5px;
`
const InfoHighlightText = styled(InfoText)`
    color: var(--Main-Color-100, #007BFF);
`
const InfoBlank = styled.div`
    width: 4px;

`

const ChooseConsume = () =>{
    return(
        <Container>
            <Header
                leftIcon = '#'
                title='소비패턴분석'
                rightIcon = '#'
            />
            <Wrapper>
                <InfoBox>
                    <FirstInfoBox>
                        <InfoText>분석 할 소비 내역을을</InfoText>
                    </FirstInfoBox>
                    <SecondInfoBox>
                        <InfoHighlightText>선택</InfoHighlightText>
                        <InfoText>하거나,</InfoText><InfoBlank/>
                        <InfoHighlightText>추가</InfoHighlightText>
                        <InfoText>해주세요</InfoText>
                    </SecondInfoBox>
                </InfoBox>
            </Wrapper>
        </Container>
    )
}

export default ChooseConsume;