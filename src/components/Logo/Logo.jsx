import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { QUERIES } from "../../constant";

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
  align-items: center;
  gap: 1rem;
  color: var(--color-white);
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

const ImgWrapper = styled.div`
  height: fit-content;
  width: calc((40 / 16) * 1rem);
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Picture = styled.picture``;

const LogoText = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: calc((34 / 16) * 1rem);
  line-height: calc((34 / 16) * 1rem);
  margin-top: -5px;
`;

export default Logo;
