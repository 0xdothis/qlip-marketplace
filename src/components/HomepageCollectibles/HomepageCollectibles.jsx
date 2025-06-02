import styled from "styled-components/macro";

import Hero from "../Hero";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "../../constant";

function HomepageCollectibles() {
  return (
    <Hero display="flex" alignItems="center" justifyContent="center">
      <Wrapper>
        <Card style={{ "--max-width": "max-content" }}>
          <HeadingH1>QLIP Collectibles</HeadingH1>
          <DescriptionText>
            Grab collectibles of your favourite artist from the various African
            Entertainment and Arts industry, in Music, Literature, Movie,
            Fashion, Visual arts, and participate in the QLIP gaming activities.
          </DescriptionText>
          <ClaimButton>Claim Collectibles</ClaimButton>
        </Card>
        <Card
          style={{
            "--border": "2px solid var(--color-outline)",
            "--padding": "2.5rem",
            height: "470px",
          }}
        >
          <picture style={{ width: "100%", display: "block" }}>
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
              alt="a map of africa designed with sculptures"
              style={{ width: "70%" }}
            />
          </picture>
          <HeadingH6>African Mask</HeadingH6>
          <AfricanDescription>
            A collection of Africa’s rich heritage
          </AfricanDescription>
          <Price>
            20,000 QLIP <span>1 of 1</span>
          </Price>
          <Bid>
            <span>Bid</span> 10,000 QLIP
          </Bid>
        </Card>
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  width: 100%;
  gap: 150px;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 50px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    gap: 100px;
  }
`;

const Card = styled.article`
  width: var(--max-width);
  border: var(--border);
  padding: var(--padding);
  justify-self: center;

  @media ${QUERIES.laptopAndSmaller} {
    max-width: 600px;
    width: 100%;

    &:last-of-type {
      width: 300px;
    }
  }
`;

const HeadingH1 = styled.h1`
  font-size: var(--font-h1);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const DescriptionText = styled.p`
  width: 35ch;
  font-size: var(--font-body);
  color: var(--color-text-light);
  margin-top: 1rem;

  @media ${QUERIES.laptopAndSmaller} {
    width: 100%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const ClaimButton = styled(UnstyledButton)`
  border: 1px solid var(--color-primary);
  font-size: var(--font-h6);
  padding: 1.2rem 3rem;
  border-radius: 100px;
  margin-top: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    justify-self: center;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);
  margin-top: 0.5rem;
`;

const AfricanDescription = styled.p`
  color: var(--color-text-light);
  margin-top: 0.5rem;
`;

const Price = styled.p`
  font-size: var(--font-h6);
  margin-top: 0.5rem;

  & span {
    font-size: var(--font-small);
    color: var(--color-text-light);
    margin-left: 0.5rem;
  }
`;

const Bid = styled.p`
  color: hsl(254, 100%, 75%);
  font-size: var(--font-body);
  margin-top: 0.5rem;

  & span {
    color: var(--color-text-light);
    font-size: var(--font-small);
  }
`;

export default HomepageCollectibles;
