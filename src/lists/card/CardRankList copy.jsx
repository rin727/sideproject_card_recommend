import React from "react";
import styled from "styled-components";
import { CardRankingButton } from "../../components/button/CardRankingButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 0;
`
export const CardList = (props) => {
    const { cards = [], onClickItem = () => {} } = props;
  
    return (
      <Container>
        {cards.map((cardItem) => (
          <CardRankingButton
            key={cardItem.id}
            {...cardItem}
            onClick={() => onClickItem(cardItem)}
          />
        ))}
      </Container>
    );
  };
