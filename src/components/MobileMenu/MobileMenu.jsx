import React from "react";
import styled from "styled-components/macro";
import { Dialog } from "radix-ui";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, onDismiss, value }) {
  const [showTrigger, setShowTrigger] = React.useState(true);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {showTrigger && (
          <CloseButton onClick={() => setShowTrigger(false)}>
            <Icon id="menu" size={32} />
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          </CloseButton>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>
            <VisuallyHidden>Navigation Links</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description>
            <VisuallyHidden>Links to each section of the page</VisuallyHidden>
          </Dialog.Description>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/mint_store">Mint Store</Link>

            <Link to="/marketplace">Marketplace</Link>

            <Link to="/roadmap">Roadmap</Link>

            <Link to="/qlip_token">QLIP Token</Link>

            <Link to="/whitepaper">Whitepaper</Link>
          </Nav>
          <JoinButton>{value}</JoinButton>
          <Dialog.Close asChild>
            <CloseButton onClick={() => setShowTrigger(true)}>
              <Icon id="close" size={32} />
              <VisuallyHidden>Dismiss Menu</VisuallyHidden>
            </CloseButton>
          </Dialog.Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Overlay = styled(Dialog.Overlay)`
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
  right: 0px;
  top: 10px;
  color: var(--color-white);
`;

const Content = styled(Dialog.Content)`
  background-color: var(--color-bg-dark);
  border-radius: 6px;
  position: absolute;
  top: -70px;
  right: 0;

  width: 350px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  color: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
