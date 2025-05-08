import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 390px;
    height: 51px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 26px;
    font-size: 15px;
    color: #222;
`
const Left = styled.div`
    width: 180px;
    height: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Right = styled.div`
    width: 180px;
    height: 51px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`
const IosTime = styled.p`
    /* width: 54px; */
    height: 21px;
    display: flex;
    justify-content: center;
    /* position: relative;
    left: 26px;
    top: 20px; */
`
const IosIcons = styled.div`
    width: 67px;
    height: 14px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* position: relative;
    right: 31px;
    top: 26px; */
`

const TopIndicator = () => {
    return(
        <Container>
            <Left>
                <IosTime>9:41</IosTime>
            </Left>
            <Right>
                <IosIcons>asdf</IosIcons>
            </Right>
        </Container>
    )
}

export default TopIndicator;