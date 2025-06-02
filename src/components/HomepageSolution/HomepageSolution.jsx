import styled from "styled-components/macro";
import Hero from "../Hero";
import CardItem from "../CardItem/CardItem";
import { QLIP_EXHIBIT } from "../../data";
import { QUERIES } from "../../constant";

function HomepageSolution() {
  return (
    <Hero>
      <Wrapper>
        <CardItem
          padding="3.5rem"
          border={true}
          background={true}
          paddingBottom="9.5rem"
          marginTop="2rem"
          marginBottom="2rem"
          data={QLIP_EXHIBIT}
          fontBody="var(--font-h6)"
          fontHeading="var(--font-h4)"
        />
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 50px;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default HomepageSolution;
