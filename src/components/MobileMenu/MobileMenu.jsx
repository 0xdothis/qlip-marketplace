import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, onDismiss, value }) {
  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={32} />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </CloseButton>

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/mint_store">Mint Store</Link>

          <Link to="/marketplace">Marketplace</Link>

          <Link to="/roadmap">Roadmap</Link>

          <Link to="/qlip_token">QLIP Token</Link>

          <Link to="/whitepaper">Whitepaper</Link>
        </Nav>
        <JoinButton>{value}</JoinButton>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--color-overlay);
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  padding: 16px;
  right: 10px;
  top: 10px;
  color: var(--color-white);
`;

const Content = styled(DialogContent)`
  background-color: var(--color-bg-dark);
  color: var(--color-white);
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;

  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* margin: auto 0; */
  gap: 24px;
  align-self: center;

  @media ${QUERIES.tabletAndSmaller} {
    height: 55%;
  }
`;

const Link = styled(NavLink)`
  color: var(--color-white);
  text-decoration: none;
  padding: 8px 12px;
  font-size: inherit;

  @media ${QUERIES.tabletAndSmaller} {
    align-self: center;
  }

  &.active {
    color: var(--color-secondary);
  }
`;

const JoinButton = styled(UnstyledButton)`
  border: 2px solid var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 1rem;
  border-radius: 50px;
  font-size: inherit;
  text-align: center;
  width: 200px;
  align-self: center;

  @media ${QUERIES.laptopAndSmaller} {
    /* display: none; */
  }
`;

export default MobileMenu;
