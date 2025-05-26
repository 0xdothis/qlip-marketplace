import React from "react";
import styled from "styled-components/macro";

function ExclusiveCard({
  imgSrc,
  heading,
  description,
  alt,
  leftText,
  rightText,
  price,
}) {
  return (
    <Article>
      <Picture>
        <source
          type="image/png"
          srcSet={`
          ${imgSrc} 1x,
          ${imgSrc.replace(".png", "@2x.png")} 2x,
          ${imgSrc.replace(".png", "@3x.png")} 3x,

        `}
        />

        <Img src={imgSrc} alt={alt} />
      </Picture>
      <Wrapper>
        <HorizontalText>{leftText}</HorizontalText>
        <TextWrapper>
          <Heading>{heading}</Heading>
          <DescriptionText>{description}</DescriptionText>
        </TextWrapper>
        <HorizontalText>{rightText}</HorizontalText>
      </Wrapper>
      <Price>{price}</Price>
    </Article>
  );
}

const Article = styled.article`
  text-align: center;
  width: 356px;
  border: 8px solid var(--color-outline);
  border-radius: 16px;
`;

const Picture = styled.picture`
  /* width: 100%;
  display: block; */
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-top: -12px;
`;

const TextWrapper = styled.div`
  margin-top: 10px;
  max-width: 250px;
`;

const Heading = styled.h6`
  font-family: "Beleren2016";
  color: var(--color-white);
  font-size: 1.165rem;
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  font-family: "El_Messiri";
  font-size: 0.55rem;
  color: var(--color-white);
`;

const HorizontalText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 0.6rem;
  font-family: "El_Messiri";
  height: 100px;
  color: var(--color-white);
`;

const Price = styled.p`
  color: var(--color-text-dark);
  font-size: 1.05rem;
  font-family: "Beleren2016";
  padding: 16px;
  margin-top: -16px;
`;

export default ExclusiveCard;
