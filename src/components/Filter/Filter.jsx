import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";
import { QUERIES } from "../../constant";

function Filter({ ...delegated }) {
  return (
    <Wrapper style={{ ...delegated }}>
      <FilterItem>All items</FilterItem>
      <FilterItem>Art</FilterItem>
      <FilterItem>Meme</FilterItem>
      <FilterItem>Photography</FilterItem>
      <FilterItem>Music</FilterItem>
      <FilterItem>Video</FilterItem>
      <FilterItem>3D</FilterItem>
      <FilterItem>Virtual Reality</FilterItem>
      <FilterItem>Domain Names</FilterItem>
      <FilterItem>
        <Icon id="filter" />
        <span>Filter by:</span> Most Recent
      </FilterItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 3rem;

  @media ${QUERIES.laptopAndSmaller} {
    gap: 1rem;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--color-text-dark);

  @media ${QUERIES.laptopAndSmaller} {
    font-size: var(--font-small);
  }

  &:last-of-type {
    color: var(--color-white);
  }

  &:first-of-type {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 9px 22px;
    border-radius: 100px;
  }

  & span {
    color: var(--color-text-dark);
    margin-left: 8px;
  }
`;

export default Filter;
