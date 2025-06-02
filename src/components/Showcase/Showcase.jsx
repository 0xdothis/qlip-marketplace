import React from "react";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import UnstyledButton from "../UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";

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

  @media ${QUERIES.tabletAndSmaller} {
    height: revert;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 35%;
    top: 80px;
  }
`;

const ContentWrapper = styled(MaxWidthWrapper)`
  padding-left: 64px;
  padding-right: 64px;
  height: 100%;
  position: relative;
  bottom: 55%;

  @media ${QUERIES.tabletAndSmaller} {
    position: absolute;
    bottom: -45%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 32px;
    padding-right: 32px;
    /* position: revert; */
    /* bottom: -10%; */
    margin-bottom: 5rem;
  }
`;

const Content = styled.div`
  max-width: 56ch;
`;

const HeadingH1 = styled.h1`
  font-size: var(--font-h1);
  color: var(--color-white);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2.25rem;
  }
`;

const DescriptionText = styled.p`
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.medium};
  color: var(--color-text-dark);

  @media ${QUERIES.phoneAndSmaller} {
    width: fit-content;
    /* display: none; */
  }
`;

const Background = styled.div`
  height: 100%;

  /* hidden excess image overflowing out of the container */
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    /* position: relative; */
    height: 100%;
    /* top: 40px; */
  }
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: inherit;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 1rem;
  }
`;

const Create = styled(UnstyledButton)`
  background: linear-gradient(var(--color-from), var(--color-to));
  padding: 0.75rem 5rem;
  border-radius: 100px;
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0.5rem 3rem;
  }
`;

const Explore = styled(UnstyledButton)`
  background-color: var(--color-white);
  padding: 0.75rem 5rem;
  border-radius: 100px;
  color: var(--color-black);
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0.5rem 3rem;
  }
`;

const Banner = styled.div`
  width: 340px;
  position: absolute;
  right: 0;
  top: -20%;
  border: 1px dashed hsl(254deg 100% 80%);
  padding: 48px;
  border-radius: 4px;

  @media ${QUERIES.laptopAndSmaller} {
    right: 5%;
    top: -25%;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
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
