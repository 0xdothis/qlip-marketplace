import styled from "styled-components/macro";
import Hero from "../Hero";
import { ROADMAPS } from "../../data";
import { QUERIES } from "../../constant";

function HomepageRoadmap() {
  return (
    <Hero
      heading="QLIP Roadmap"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper>
        <ImgWrapper>
          <picture>
            <source
              type="image/png"
              srcSet={`
            ./images/car.png 1x,
            ./images/car@2x.png 2x,
            ./images/car@3x.png 3x
          `}
            />
            <Img
              src="./images/car.png"
              alt="yellow car showing progress on road map"
            />
          </picture>
        </ImgWrapper>
        <ProgressBar />
        <RoadmapWrapper>
          {ROADMAPS.map((roadmap) => (
            <ListWrapper key={Math.random() * 100}>
              <Circle />
              <HeadingH6>{roadmap.year}</HeadingH6>
              {roadmap.target.map((item) => (
                <ItemWrapper key={Math.random() * 100}>
                  <Bullet />
                  <Item>{item}</Item>
                </ItemWrapper>
              ))}
            </ListWrapper>
          ))}
        </RoadmapWrapper>
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
`;

const ImgWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  left: 17%;
  width: fit-content;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--color-secondary);
  border-radius: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const RoadmapWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: -28px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 20px;
    margin-top: -14px;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

const ListWrapper = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
`;

const Circle = styled.span`
  display: inline-block;
  height: 37.5px;
  width: 37.5px;
  border-radius: 100px;
  background-color: var(--color-white);
  outline: 10px solid hsl(0deg 0% 100% / 0.3);

  @media ${QUERIES.phoneAndSmaller} {
    height: 17.5px;
    width: 17.5px;
    outline: 5px solid hsl(0deg 0% 100% / 0.3);
  }
`;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 1rem;
    margin-bottom: 1rem;
    --font-h6: 16px;
  }
`;

const ItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 0 8px;
  margin-top: 1rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Item = styled.li`
  list-style: none;
  color: var(--color-text-dark);
`;

const Bullet = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.65rem;
  height: 5px;
  width: 5px;
  border-radius: 50px;
  background-color: var(--color-text-dark);
`;

export default HomepageRoadmap;
