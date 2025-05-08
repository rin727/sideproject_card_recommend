import React from 'react';
import styled from 'styled-components';
import TopIndicator from '../../components/Home/TopIndicator';
import TopNavigationBar from '../../components/TopNavigationBar';
import Indicator from '../../components/Home/Indicator';

const Container = styled.div`
    justify-content: baseline;
    min-height: 772px;
`

const MainPage = () => {
    return(
        <Container>
            <TopNavigationBar/>
        </Container>
    )
}

export default MainPage;