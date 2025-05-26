import React from "react";
import styled from "styled-components/macro";

function User() {
  return (
    <Wrapper>
      <Picture>
        <source
          type="image/png"
          srcSet={`
          ./images/user_icon.png 1x,
          ./images/user_icon@2x.png 2x,
          ./images/user_icon@3x.png 3x
        `}
        />

        <Img src="./images/user_icon.png" alt="pilled shaped user icon" />
      </Picture>
      <Name>Karla Gyan</Name>
      <Amount>
        200<span>ETH</span>
      </Amount>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled.picture`
  display: block;
  width: 64px;
  height: 64pz;
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 100%;
`;

const Name = styled.p`
  font-size: var(--font-body);
`;

const Amount = styled.small`
  font-size: 12px;
  display: block;
  & span {
    color: var(--color-text-dark);
  }
`;

export default User;
