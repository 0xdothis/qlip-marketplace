import React from "react";
import styled from "styled-components/macro";
import { RANKED_COLORS } from "../../data";
import SellerCard from "../SellerCard/SellerCard";
import { QUERIES } from "../../constant";

function SellerItem() {
  return (
    <Wrapper>
      <InnerWrapper>
        {RANKED_COLORS.map((color) => (
          <SellerCard {...color} key={Math.random() * 100} />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 54px;
  margin-right: -32px;

  /* To hide excess content spilling out the container */
  overflow: hidden;
  /* background-color: white; */

  @media ${QUERIES.laptopAndSmaller} {
    overflow: auto;
    margin-right: -16px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export default SellerItem;
