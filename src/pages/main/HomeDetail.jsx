import React from 'react';
import styled from 'styled-components';
import { BigButton } from '../../components/button/BigButton';
import { MyConsume } from '../../lists/main/MyConsume';
import SmallNavigationBar from '../../components/navigation/SmallNavigationBar';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 0;
    flex-direction: column;
    background-color: #fff;
    gap: 28px;
`
const MainButtons = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    width: 100%;
`
const Grids = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: baseline;
`
const GridsTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #222;
`
// const MyConsume = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 16px;
// `

const HomeDetail = () => {
    return(
        <Container>
            <MainButtons>
                <BigButton
                firsttext='소비패턴에'
                secondtext='맞는 카드 찾기'
                />
                <BigButton
                firsttext='원하는 카드 찾기'
                secondtext=''
                />
            </MainButtons>
            <Grids>
                <GridsTitle>나의 소비 내역</GridsTitle>
                <MyConsume/>
            </Grids>
            <Grids>
                <GridsTitle>인기 카드 10순위</GridsTitle>
                <SmallNavigationBar
                    creditCardComponent={<p>asdf</p>}
                    checkCardComponent={<p>qwer</p>}
                />
            </Grids>
        </Container>
    )
}

export default HomeDetail;