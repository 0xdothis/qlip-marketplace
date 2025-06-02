import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constant";

function Hero({
  children,
  heading = undefined,
  description = undefined,
  size,
  width = "54ch",
  ...delegated
}) {
  return (
    <Wrapper style={{ ...delegated }}>
      {heading && <Heading size={size}>{heading}</Heading>}
      {description && (
        <DescriptionText width={width}>{description}</DescriptionText>
      )}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: var(--spacing-top);
  padding-bottom: var(--spacing-bottom);
  padding-left: var(--spacing-left);
  padding-right: var(--spacing-right);
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: ${(p) => (p.size ? p.size : "var(--font-h1)")};
  margin-bottom: 1rem;

  @media ${QUERIES.laptopAndSmaller} {
    /* text-align: center; */
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: 1rem;
  }
`;

const DescriptionText = styled.p`
  color: var(--color-text-light);
  max-width: ${(p) => (p.width ? p.width : "")};
  text-align: center;
  font-size: var(--font-body);
  font-weight: ${WEIGHTS.medium};
  margin-bottom: 2.5rem;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 500px;
  }
`;

export default Hero;
