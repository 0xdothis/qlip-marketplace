import styled from "styled-components/macro";

import CardItem from "../CardItem/CardItem";
import Hero from "../Hero";
import { QLIP_MARKETPLACE } from "../../data";

function HomepageMarketplace() {
  return (
    <Hero
      heading="QLIP MarketPlace"
      description="Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on the
QLIP marketplace.
"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper>
        <CardItem
          data={QLIP_MARKETPLACE}
          padding="2rem"
          paddingBottom="2rem"
          marginTop="1rem"
          marginBottom="1rem"
          fontBody="var(--font-body)"
          fontHeading="var(--font-h6)"
        />
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  gap: 24px;
  width: 100%;
`;

export default HomepageMarketplace;
