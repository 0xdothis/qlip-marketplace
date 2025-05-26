import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";

function PilledRank({ rank, ...delegated }) {
  return (
    <Wrapper style={{ ...delegated }}>
      <Icon id="shield" size={16} />
      <p>{rank}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  align-items: center;
  width: max-content;
  padding: 4px 25px;
  border-radius: 100px;
  margin-bottom: 24px;
`;

export default PilledRank;
