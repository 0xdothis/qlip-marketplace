import { Link } from "react-router-dom";
import styled from "styled-components/macro";

function Logo({ ...delegated }) {
  return (
    <Wrapper to="/" {...delegated}>
      <ImgWrapper>
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
  gap: 0 16px;
  text-decoration: none;
  color: var(--color-white);
  align-items: flex-start;

  &:focus {
    outline: none;
  }
`;

const ImgWrapper = styled.div`
  height: 35px;
  width: 35px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Picture = styled.picture``;

const LogoText = styled.h1`
  font-family: "Unione", sans-serif;
  font-size: var(--font-h5);
  line-height: var(--font-h5);
  margin-top: -3px;
`;

export default Logo;
