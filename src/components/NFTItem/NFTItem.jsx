import React from "react";
import styled from "styled-components/macro";
import NFTCard from "../NFTCard/NFTCard";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "../../constant";

function NFTItem() {
  const [showMore, setShowMore] = React.useState(false);

  const NFTCards = showMore
    ? Array.from({ length: 12 })
    : Array.from({ length: 6 });

  return (
    <>
      <Wrapper>
        {NFTCards.map((card) => (
          <NFTCard key={Math.random() * 100} />
        ))}
      </Wrapper>
      <Button onClick={() => setShowMore((show) => !show)}>
        {showMore ? "Load Less" : "Load More"}
      </Button>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(381px, 1fr));
  gap: 36px;
  margin-bottom: 85px;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 16px;
  }
`;

const Button = styled(UnstyledButton)`
  margin: 0 auto;
  height: 74px;
  width: 307px;
  text-align: center;
  border: 2px solid var(--color-primary);
  border-radius: 9999px;
`;

export default NFTItem;
