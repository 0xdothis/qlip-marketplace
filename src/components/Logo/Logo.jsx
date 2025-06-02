import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { QUERIES } from "../../constant";

function Logo({ ...delegated }) {
  return (
    <Wrapper to="/" {...delegated}>
      <ImgWrapper ImgWrapper>
        <Picture>
          <source
            type="image/png"
            srcSet={`
          ./images/logo.png 1x,
          ./images/logo@2x.png 2x,
          ./images/logo@3x.png 3x`}
          />
          <Img src="./images/logo.png" alt="logo" />
        </Picture>
      </ImgWrapper>
      <LogoText>QLIP</LogoText>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-white);
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

const ImgWrapper = styled.div`
  height: fit-content;
  width: 40px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Picture = styled.picture``;

const LogoText = styled.h1`
  font-family: "Unione", sans-serif;
  font-size: 34px;
  line-height: 34px;
  align-self: flex-start;
`;

export default Logo;
