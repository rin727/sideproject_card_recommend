import React from "react";
import styled from "styled-components";
import { CardBenefitChip } from "../../components/chip/CardBenefitChip";

const Container = styled.div`
    display: flex;
    gap: 4px;
`

export const CardBenefitChipList = ({ benefits = [] }) => {
    return (
        <Container>
            {benefits.map((benefit, index) => (
                <CardBenefitChip key={index} benefit={benefit} />
            ))}
        </Container>
    );
};
