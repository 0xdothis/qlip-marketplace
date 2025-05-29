import styled from "styled-components/macro";
import Hero from "../Hero";
import { TOKENOMICS } from "../../data";
import { WEIGHTS } from "../../constant";

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
`;

const ImgWrapper = styled.div`
  justify-self: center;
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
`;

const Logo = styled.div`
  background-color: var(--color-outline);
  height: 70px;
  width: 70px;
  display: grid;
  place-content: center;

  border-radius: 100px;
`;

const LogoContent = styled.div``;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);
`;

const TokenName = styled.p`
  font-size: var(--font-body);
  color: var(--color-text-dark);
`;

const Tokenomics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 0 60px;
`;

const Token = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Circle = styled.span`
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background-color: ${(p) => (p.sale ? `var(--color-${p.sale})` : undefined)};
`;

const TokenSale = styled.p`
  font-size: var(--font-body);
  color: var(--color-white);
  font-weight: ${WEIGHTS.bold};
`;

const Sales = styled.span`
  color: var(--color-text-dark);
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.normal};
`;

export default HomepageToken;
