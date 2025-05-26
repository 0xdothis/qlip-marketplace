import React from "react";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import UnstyledButton from "../UnstyledButton";
import { WEIGHTS } from "../../constant";

function Showcase() {
  return (
    <Wrapper>
      <Background>
        <Picture>
          <source
            type="image/avif"
            srcSet={`
            ./images/showcase_img.avif 1x,
            ./images/showcase_img@2x.avif 2x,
            ./images/showcase_img@3x.avif 3x
          `}
          />

          <source
            type="image/png"
            srcSet={`
            ./images/showcase_img.png 1x,
            ./images/showcase_img@2x.png 2x,
            ./images/showcase_img@3x.png 3x
          `}
          />

          <Img
            src="./images/showcase_img.png"
            alt="a 3d illustration of an hut"
          />
        </Picture>
      </Background>
      <ContentWrapper>
        <Content>
          <HeadingH1>NFT Martkeplace for African Creators</HeadingH1>
          <DescriptionText>
            Create, explore and trade in the first-ever African owned NFT
            Markeplace.
          </DescriptionText>
          <ActionButtons>
            <Create>Create</Create>
            <Explore>Explore</Explore>
          </ActionButtons>
        </Content>
        <Banner>
          <HeadingH6>Ancient Underwater ruin of Oshun</HeadingH6>
          <Small>
            Oshun is considered one of the most powerful of all orishas, her
            temple is filled with treasures and water rune magic.
          </Small>
          <Token>
            20,000 QLIP <span>1 of 1</span>
          </Token>
        </Banner>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
const ContentWrapper = styled(MaxWidthWrapper)`
  padding-left: 64px;
  padding-right: 64px;
  height: 100%;
  position: relative;
  bottom: 55%;
`;

const Content = styled.div`
  max-width: 56ch;
`;

const HeadingH1 = styled.h1`
  font-size: var(--font-h1);
  color: var(--color-white);
`;

const DescriptionText = styled.p`
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.medium};
  color: var(--color-text-dark);
`;
const Background = styled.div`
  height: 100%;

  /* hidden excess image overflowing out of the container */
  overflow: hidden;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 3rem;
`;

const Create = styled(UnstyledButton)`
  background: linear-gradient(var(--color-from), var(--color-to));
  padding: 0.75rem 5rem;
  border-radius: 100px;
  font-weight: ${WEIGHTS.bold};
`;

const Explore = styled(UnstyledButton)`
  background-color: var(--color-white);
  padding: 0.75rem 5rem;
  border-radius: 100px;
  color: var(--color-black);
  font-weight: ${WEIGHTS.bold};
`;

const Banner = styled.div`
  width: 340px;
  position: absolute;
  right: 0;
  top: -20%;
  border: 1px dashed hsl(254deg 100% 80%);
  padding: 48px;
  border-radius: 4px;
`;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);
  margin-bottom: 8px;
`;

const Small = styled.small`
  font-size: 12px;
  color: var(--color-text-dark);
`;

const Token = styled.p`
  margin-top: 8px;
  & > span {
    font-size: 14px;
    margin-left: 8px;
  }
`;

export default Showcase;
