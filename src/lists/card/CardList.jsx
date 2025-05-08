import React from "react";
import styled from "styled-components";
import { CardButton } from "../../components/button/CardButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding-bottom: 20px;
`
export const CardList = (props) =>{

    const { cards = [] } = props;

    return (
    <Container>
        {cards.map((cardItem, index) => (
        <CardButton
            key={cardItem.id}
            {...cardItem}
            onClick={() => onClickItem(cardItem)}
        />
        ))}
    </Container>
    );
    
}