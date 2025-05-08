import React from 'react';
import styled from 'styled-components';
import TopNavigationBar from '../../components/navigation/TopNavigationBar';

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