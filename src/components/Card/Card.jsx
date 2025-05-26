import styled from "styled-components/macro";

function Card({
  imgSrc,
  heading,
  description,
  alt,
  type,
  paddingBottom,
  marginTop,
  imgPadding = "1rem",
  fontBody = "var(--font-body)",
  fontHeading,
  border,
  width = "25ch",
  background,
  marginBottom,
  ...delegated
}) {
  return (
    <Wrapper
      style={{
        ...delegated,
        "--padding-bottom": paddingBottom,
        "--margin-top": marginTop,
        "--margin-bottom": marginBottom,
        "--img-padding": imgPadding,
        "--font-body": fontBody,
        "--font-heading": fontHeading,
      }}
    >
      <ImgWrapper>
        <picture>
          <source
            type="image/png"
            srcSet={`
          ${imgSrc} 1x,
          ${imgSrc.replace(".png", "@2x.png")} 2x,
          ${imgSrc.replace(".png", "@3x.png")} 3x,

        `}
          />

          <Img src={imgSrc} alt={alt} />
        </picture>
      </ImgWrapper>
      {type ? (
        <small
          style={{
            marginTop: "1rem",
            display: "block",
          }}
        >
          Type:{" "}
          <span
            style={{
              color:
                type === "Rare"
                  ? "var(--color-secondary)"
                  : type === "Common"
                  ? "var(--color-primary)"
                  : type === "Limited Edition"
                  ? "hsl(40, 100%, 64%)"
                  : "",
            }}
          >
            {type}
          </span>
        </small>
      ) : null}
      <HeadingH2>{heading}</HeadingH2>
      <DescriptionText style={{ "--width": width }}>
        {description}
      </DescriptionText>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding-bottom: var(--padding-bottom);
`;

const HeadingH2 = styled.h4`
  font-size: var(--font-heading);
  margin-top: var(--margin-top);
  margin-bottom: var(--margin-bottom);
`;

const DescriptionText = styled.p`
  width: var(--width);
  font-size: var(--font-body);
  color: var(--color-text-light);
`;

const ImgWrapper = styled.div`
  padding: var(--img-padding);
  width: max-content;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) =>
    !p.background ? "var(--color-outline)" : undefined};

  &:nth-child(even) {
    border: ${(p) => (p.border ? "2px solid var(--color-white)" : undefined)};
    background-color: transparent;
  }

  border: ${(p) =>
    !p.background ? undefined : "2px solid var(--color-white)"};
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

export default Card;
