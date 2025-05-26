import React from "react";
import styled from "styled-components/macro";
import PilledRanked from "../PilledRank";
import User from "../User/";

function SellerCard({ color, rank }) {
  return (
    <Wrapper>
      <PilledRanked rank={rank} backgroundColor={color} />
      <User />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 246px;
  border-radius: 16px;
  background-color: var(--color-outline);
  padding: 60px 24px;
`;
export default SellerCard;
