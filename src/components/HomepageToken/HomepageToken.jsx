import styled from "styled-components/macro";
import Hero from "../Hero";
import { TOKENOMICS } from "../../data";
import { QUERIES, WEIGHTS } from "../../constant";

function HomepageToken({ heading = undefined }) {
  return (
    <Hero
      heading={heading}
      description={heading ? "Tokenomics Break Down" : undefined}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper>
        <ImgWrapper>
          <Img
            src="./images/tokenomics.svg"
            alt="circle showing allocation of tokens"
          />
        </ImgWrapper>
        <TokenWrapper>
          <LogoWrapper>
            <Logo>
              <picture>
                <source
                  type="image/png"
                  srcSet={`
                  ./images/logo.png 1x,
                  ./images/logo@2x.png 2x,
                  ./images/logo@3x.png 3x
                `}
                />
                <img src="./images/logo.png" alt="qlip marketplace logo" />
              </picture>
            </Logo>
            <LogoContent>
              <HeadingH6>Total Supply: 10,000,000 $QLP</HeadingH6>
              <TokenName>Token Name: QLIP</TokenName>
            </LogoContent>
          </LogoWrapper>
          <Tokenomics>
            {TOKENOMICS.map((token) => (
              <Token key={Math.random() * 100}>
                <Circle
                  sale={token.sale
                    .split(" ")[0]
                    .replace(" Sale", "")
                    .toLowerCase()}
                />
                <TokenSale>
                  <Sales>{token.sale}:</Sales> {token.value}
                </TokenSale>
              </Token>
            ))}
          </Tokenomics>
        </TokenWrapper>
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  gap: 40px;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const ImgWrapper = styled.div`
  justify-self: center;
  /* width: 300px; */

  @media ${QUERIES.laptopAndSmaller} {
    width: 400px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 250px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TokenWrapper = styled.div`
  padding: 2rem;
  border: 2px solid var(--color-outline);
  justify-self: center;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: revert;
    margin-bottom: 3rem;
  }
`;

const Logo = styled.div`
  background-color: var(--color-outline);
  height: 70px;
  max-width: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;

  @media ${QUERIES.laptopAndSmaller} {
    padding-top: 5px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    /* height: 50px;
    width: 50px; */
  }
`;

const LogoContent = styled.div``;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);

  @media ${QUERIES.laptopAndSmaller} {
    font-size: var(--font-body);
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 16px;
  }
`;

const TokenName = styled.p`
  font-size: var(--font-body);
  color: var(--color-text-dark);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: var(--font-small);
  }
`;

const Tokenomics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 0 60px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 0 30px;
  }
`;

const Token = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 10px;
  }

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Circle = styled.span`
  display: block;
  max-width: 12px;
  height: 12px;
  width: 100%;

  border-radius: 50px;
  background-color: ${(p) => (p.sale ? `var(--color-${p.sale})` : undefined)};
`;

const TokenSale = styled.p`
  font-size: var(--font-body);
  color: var(--color-white);
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 10px;
  }
`;

const Sales = styled.span`
  color: var(--color-text-dark);
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.normal};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 12px;
  }
`;

export default HomepageToken;
