import styled from "styled-components/macro";
import Card from "../Card";
import { QUERIES } from "../../constant";

function CardItem({
  border,
  background,
  marginTop,
  marginBottom,
  fontSize,
  paddingBottom,
  data,
  fontBody,
  fontHeading,
  display,
  gridTemplateColumns,
  gridTemplateRows,
  width,
  alignItems,
  gap,
  ...delegated
}) {
  return (
    <>
      {data?.map((datum) => (
        <Wrapper
          key={Math.random() * 100}
          style={{ ...delegated }}
          background={background}
          border={border}
        >
          <Card
            {...datum}
            marginTop={marginTop}
            marginBottom={marginBottom}
            paddingBottom={paddingBottom}
            border={border}
            background={background}
            fontBody={fontBody}
            fontHeading={fontHeading}
            display={display}
            gridTemplateColumns={gridTemplateColumns}
            gridTemplateRows={gridTemplateRows}
            gap={gap}
            width={width}
            alignItems={alignItems}
          />
        </Wrapper>
      ))}
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${(p) =>
    p.background ? "var(--color-outline)" : undefined};

  &:nth-child(even) {
    border: ${(p) => (p.border ? "2px solid var(--color-outline)" : undefined)};
    background-color: transparent;
  }

  border: ${(p) =>
    p.background ? undefined : "2px solid var(--color-outline)"};

  @media ${QUERIES.laptopAndSmaller} {
    /* width: fit-content; */
  }

  @media ${QUERIES.phoneAndSmaller} {
    /* width: fit-content; */
    padding: 1.5rem !important;
  }
`;

export default CardItem;
