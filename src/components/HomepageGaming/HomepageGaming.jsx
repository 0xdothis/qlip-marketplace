import styled from "styled-components/macro";
import { COLLECTIBLES } from "../../data";
import Hero from "../Hero";
import CardItem from "../CardItem/CardItem";

function HomepageGaming() {
  return (
    <Hero
      heading="QLIP Collectible Gaming"
      description="Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on the
QLIP marketplace."
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper>
        <CardItem
          data={COLLECTIBLES}
          display="flex"
          gap="24px"
          width="max-content"
          alignItems="center"
          padding="1rem"
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
`;

export default HomepageGaming;
