import React from "react";
import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";

function NFTCard() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Picture>
          <source
            type="image/png"
            srcSet={`
            ./images/africa.png 1x,
            ./images/africa@2x.png 2x,
            ./images/africa@3x.png 3x
          `}
          />

          <Img
            src="./images/africa.png"
            alt="a description of african art work"
          />
        </Picture>
      </ImgWrapper>
      <Content>
        <Heading>African Mask</Heading>
        <TextWrapper>
          <Token>20,000 QLIP</Token>
          <Rarity>1 of 1</Rarity>
        </TextWrapper>
        <TextWrapper>
          <Bid>
            Highest bid <span>0.001ETH</span>
          </Bid>
          <Bid>New bid 🔥</Bid>
        </TextWrapper>
        <Button>Buy NFT</Button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  max-width: 381px;
  border-radius: 4px;
  background-color: hsl(240deg, 5%, 8%);
  border: 2px solid var(--color-outline);
  color: var(--color-white);
  padding: 19px 36px;

  @media ${QUERIES.laptopAndSmaller} {
    max-width: revert;
  }
`;

const ImgWrapper = styled.div`
  max-width: 307px;
  border: 2px solid var(--color-outline);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 303px;

  @media ${QUERIES.laptopAndSmaller} {
    max-width: revert;
  }
`;

const Picture = styled.picture`
  /* width: 100%; */
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23.5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Heading = styled.h6`
  font-size: var(--font-h6);
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Token = styled.p`
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.bold};
`;

const Rarity = styled.span`
  font-size: 14px;
  color: hsl(220deg 10% 77%);
`;

const Bid = styled.p`
  font-size: 12px;
  color: hsl(220deg 10% 77%);

  & span {
    color: var(--color-white);
    font-weight: ${WEIGHTS.bold};
  }
`;

const Button = styled(UnstyledButton)`
  font-size: 16px;
  background-color: var(--color-primary);
  width: 100%;
  height: 45px;
  text-align: center;
`;

export default NFTCard;
