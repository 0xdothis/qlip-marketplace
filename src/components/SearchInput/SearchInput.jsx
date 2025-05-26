import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";

function SearchInput() {
  const [search, setSearch] = React.useState("");
  return (
    <Wrapper>
      <IconWrapper id="search" color="var(--color-outline)" />
      <Input
        type="text"
        placeholder="Search for items, collections and account"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  color: var(--color-outline);
  border: 3px solid currentColor;
  width: 100%;
  top: 5px;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  left: 2rem;
  top: 27%;
  pointer-events: none;
`;

const Input = styled.input`
  padding: 16px;
  width: 100%;
  background-color: transparent;
  color: var(--color-white);
  padding-left: 5rem;
  border: none;
`;

export default SearchInput;
