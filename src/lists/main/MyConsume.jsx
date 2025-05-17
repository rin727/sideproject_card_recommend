import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  /* 스크롤바 숨기기 */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  cursor: grab;
  user-select: none;
  width: 374px;
  height: 80px;
  /* background-color: yellow; */
  gap: 16px;
  padding-right: 16px;
`;
const MyConsumeCard = styled.button`
  width: 126.667px;
  height: 80px;
  flex-shrink: 0;
  aspect-ratio: 126.67 / 80.0;
  border-radius: 6px;
  padding: 0;
  background-image: ${props=>`url(${props.CardImg || "/default-image.png"})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column-reverse;
  border: none;
  &:focus {
    outline: none;
  }
`;
const MyConsumeCardPlus = styled.button`
  width: 126.667px;
  height: 80px;
  flex-shrink: 0;
  aspect-ratio: 126.67 / 80.0;
  border-radius: 6px;
  background-color: #f2f8ff;
  border: none;
  &:focus {
    outline: none;
  }
`;


const MyConsumeCardInformation = styled.div`
    width: 100%;
    height: 55px;
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.50);
    box-shadow: 0px -2px 4px 0px rgba(136, 136, 136, 0.10);
    backdrop-filter: blur(4px);
    border-radius: 0px 0px 6px 6px;
`
const InformationCardCompany = styled.p`
    width: 100%;
    text-align: start;
    color: var(--Gray-6, #888);

    /* Label/02_Medium */
    font-size: 10px;
    font-weight: 500;
`
const InformationCardName = styled.p`
    width: 100%;
    text-align: start;
    overflow: hidden;
    color: var(--Gray-9, #222);
    text-overflow: ellipsis;

    /* Title/01_Semibold */
    font-size: 16px;
    font-weight: 600;
`

export const MyConsume = (props) => {
  const {CardImg} = props;
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 스크롤 감도 조절
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Container
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <MyConsumeCard CardImg={CardImg}>
        <MyConsumeCardInformation>
            <InformationCardCompany>현대카드</InformationCardCompany>
            <InformationCardName>현대카드 M</InformationCardName>
        </MyConsumeCardInformation>
      </MyConsumeCard>
      <MyConsumeCard CardImg={CardImg}>
        <MyConsumeCardInformation>
            <InformationCardCompany>현대카드</InformationCardCompany>
            <InformationCardName>현대카드 M</InformationCardName>
        </MyConsumeCardInformation>
      </MyConsumeCard>
      <MyConsumeCardPlus>plusicon</MyConsumeCardPlus>
    </Container>
  );
};
