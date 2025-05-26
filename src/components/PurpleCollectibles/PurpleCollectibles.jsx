import styled from "styled-components/macro";

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
`;

export default PurpleCollectibles;
