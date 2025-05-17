import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 390px;
    height: 20px;
    justify-content: center;
    align-items: center;
`
const Bar = styled.div`
    width: 135px;
    height: 5px;
    background-color: #222;
    border-radius: 20px;
`

const Indicator = () => {
    return(
        <Container>
            <Bar/>
        </Container>
    )
}

export default Indicator;