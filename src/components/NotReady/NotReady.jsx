import React from "react";
import styled from "styled-components/macro";

function NotReady() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img
          src="./images/construction.png"
          alt="this page is under construction"
        />
      </ImgWrapper>
      <HeadingH3>This Page is under construction</HeadingH3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  justify-items: center;
`;

const ImgWrapper = styled.div`
  max-width: 600px;
`;

const Img = styled.img`
  width: 100%;
`;

const HeadingH3 = styled.h3`
  font-family: "Unione";
  font-size: var(--font-h3);
  text-transform: uppercase;
  text-align: center;
  margin-top: -50px;
`;
export default NotReady;
