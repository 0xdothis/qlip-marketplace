import styled from "styled-components";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <Logo />
      <Nav>
        <LinkWrapper>
          <FooterLink to="/mint_store">Mint Store</FooterLink>
          <FooterLink to="/marketplace">Marketplace</FooterLink>
          <FooterLink to="/roadmap">Roadmap</FooterLink>
          <FooterLink to="qlip_token">QLink Token</FooterLink>
          <FooterLink to="whitepaper">Whitepaper</FooterLink>
        </LinkWrapper>

        <LinkWrapper>
          <FooterLink>Twitter</FooterLink>
          <FooterLink>Telegram</FooterLink>
          <FooterLink>Youtube</FooterLink>
          <FooterLink>Medium</FooterLink>
        </LinkWrapper>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 20px;
  padding-top: 4rem;
  border-top: 4px solid var(--color-outline);
`;

const FooterLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-body);
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 100px;
`;

const LinkWrapper = styled.ul`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default Footer;
