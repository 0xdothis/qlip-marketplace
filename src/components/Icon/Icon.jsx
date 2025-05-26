import styled from "styled-components/macro";

import {
  Menu,
  X,
  Twitter,
  Facebook,
  Youtube,
  Play,
  Shield,
  ArrowLeft,
  ArrowRight,
  Search,
  Sliders,
} from "react-feather";

const icons = {
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  menu: Menu,
  play: Play,
  close: X,
  shield: Shield,
  arrowRight: ArrowRight,
  search: Search,
  arrowLeft: ArrowLeft,
  filter: Sliders,
};
function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(props) =>
      props.strokeWidth !== undefined ? props.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
