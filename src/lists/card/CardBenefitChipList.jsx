import React from "react";
import styled from "styled-components";
import { CardBenefitChip } from "../../components/chip/CardBenefitChip";

const Container = styled.div`
    display: flex;
    gap: 4px;
`

export const CardBenefitChipList = () => {
    return(
        <Container>
            <CardBenefitChip/>
            <CardBenefitChip/>
            <CardBenefitChip/>
        </Container>
    )
}