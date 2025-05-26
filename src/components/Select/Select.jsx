import React from "react";
import styled from "styled-components/macro";

function Select() {
  return (
    <Wrapper>
      <StyledSelect>
        <Option value="Today">Today</Option>
      </StyledSelect>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 256px;
  padding-right: 8px;
  color: var(--color-white);
  border-radius: 12px;
  /* overflow: none; */
  border: 2px solid var(--color-outline);
`;

const StyledSelect = styled.select`
  color: var(--color-white);
  background-color: transparent;
  padding: 12px 16px;
  width: 100%;
  outline: none;
  border: none;
`;

const Option = styled.option`
  /* display: none; */
`;

export default Select;
