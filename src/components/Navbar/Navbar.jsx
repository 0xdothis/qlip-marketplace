import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import UnstyledButton from "../UnstyledButton";
import Logo from "../Logo";
import { QUERIES } from "../../constant";
import MobileMenu from "../MobileMenu/MobileMenu";
import Icon from "../Icon";

function Navbar({ value, ...delegated }) {
  return (
    <BackgroundWrapper {...delegated}>
      <Wrapper>
        <Logo />
        <Side />
        <DesktopNav>
          <Link to="/mint_store">Mint Store</Link>

          <Link to="/marketplace">Marketplace</Link>

          <Link to="/roadmap">Roadmap</Link>

          <Link to="/qlip_token">QLIP Token</Link>

          <Link to="/whitepaper">Whitepaper</Link>
        </DesktopNav>
        <JoinButton>{value}</JoinButton>
        <MobileActions>
          <MobileMenu value={value} />
        </MobileActions>
      </Wrapper>
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  padding: 24px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  /* background-color: var(--color-bg-dark); */
`;

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-body);

  @media ${QUERIES.laptopAndSmaller} {
    /* display: none; */
  }
`;

const Side = styled.div`
  max-width: 100px;
`;

const DesktopNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0 8px;
  /* align-self: center; */

  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

const Link = styled(NavLink)`
  color: var(--color-white);
  text-decoration: none;
  padding: 8px 12px;
  font-size: inherit;
  align-self: center;

  &.active {
    color: var(--color-secondary);
  }
`;

const JoinButton = styled(UnstyledButton)`
  border: 2px solid var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  font-size: inherit;

  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.laptopAndSmaller} {
    display: revert;
  }
`;
export default Navbar;
