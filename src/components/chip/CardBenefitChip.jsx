import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 20px;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 200px;
    border: 1px solid var(--Main-Color-40, #99CAFF);
`
const Benefit = styled.p`
    color: var(--Gray-6, #888);

    /* Label/02_Medium */
    font-size: 10px;
    font-weight: 500;
`

export const CardBenefitChip =(props)=> {
    const {benefit}=props
    return(
        <Container>
            <Benefit>{benefit||'혜택'}</Benefit>
        </Container>
    )
}