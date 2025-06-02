import styled from "styled-components/macro";
import { QUERIES } from "../../constant";

function PurpleCollectibles({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* gap: 40px; */
  background-color: var(--color-primary);
  padding: 104px;
  align-items: center;
  margin-top: -2px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-left: -72px;
  margin-right: -72px;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: 1.5fr 1fr;

    margin-left: 0px;
    margin-right: 0px;
    padding: 48px;
    padding-bottom: 64px;
    gap: 24px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px !important;
    padding-bottom: 64px;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default PurpleCollectibles;
