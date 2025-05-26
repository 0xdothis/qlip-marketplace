import styled from "styled-components/macro";

export default styled.button`
  display: ${(propss) => propss.display || "block"};
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
