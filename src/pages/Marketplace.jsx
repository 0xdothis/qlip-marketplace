import styled from "styled-components/macro";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase/Showcase";
import ExclusiveCard from "../components/ExclusiveCard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { EXLUSIVE_CARDS } from "../data";
import Select from "../components/Select";
import SellerItem from "../components/SellerItem";
import Icon from "../components/Icon";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";

function Marketplace() {
  return (
    <>
      <Navbar
        value="Connect Wallet"
        style={{ backgroundColor: "hsl(244deg 73% 8%)" }}
      />
      <Showcase />
      <Wrapper>
        <Hero
          heading="Exclusive QLIP NFTs"
          description="Afrian is home to a large variety of races, some native to its lands and some hailing from other realms."
          display="flex"
          flexDirection="column"
          alignItems="center"
          size="var(--font-h2)"
          width="100%"
        >
          <CardWrapper>
            {EXLUSIVE_CARDS.map((card) => (
              <ExclusiveCard {...card} key={Math.random() * 100} />
            ))}
          </CardWrapper>
        </Hero>
        <Hero heading="Top Sellers" size="var(--font-h2)">
          <InputWrapper>
            <Select />
            <IconDiv>
              <IconWrapper>
                <Icon id="arrowLeft" size={16} />
              </IconWrapper>
              <IconWrapper>
                <Icon id="arrowRight" size={16} />
              </IconWrapper>
            </IconDiv>
          </InputWrapper>

          <SellerItem />
        </Hero>
        <Hero>
          <SearchWrapper>
            <HeadingH2>Marketplace</HeadingH2>
            <SearchInput />
          </SearchWrapper>
          <Filter marginTop="5rem" />
        </Hero>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(MaxWidthWrapper)``;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
  width: 100%;
  gap: 48px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid var(--color-outline);
  color: var(--color-outline);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  &:nth-child(2) {
    border: 1px solid var(--color-white);
    color: var(--color-white);
  }
`;

const IconDiv = styled.div`
  display: flex;
  gap: 32px;
  width: 150px;
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

const HeadingH2 = styled.h2`
  font-size: var(--font-h2);
`;

export default Marketplace;
