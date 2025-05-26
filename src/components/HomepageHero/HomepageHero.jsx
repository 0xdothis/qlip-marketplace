import React from "react";
import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import { WEIGHTS } from "../../constant";
import Hero from "../Hero";

function HomepageHero() {
  return (
    <Hero
      heading="Revolutionizing the NFT Ecosystem"
      description="QLIP provides value for creators, collectors, mainstream artists and
        decentralized store users."
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <BuyButton>Buy QLIP Tokens</BuyButton>
      <Video controls={true} />
    </Hero>
  );
}

const BuyButton = styled(UnstyledButton)`
  background: linear-gradient(var(--color-from), var(--color-to));
  padding: 1.125rem 3rem;
  font-weight: ${WEIGHTS.bold};
  border-radius: 100px;
  margin-bottom: 4.375rem;
`;

const Video = styled.video`
  max-width: 58rem;
  width: 100%;
  border: 3px solid var(--color-outline);
`;

export default HomepageHero;
