import styled from "styled-components/macro";
import HomepageCollectibles from "../components/HomepageCollectibles/HomepageCollectibles";
import HomepageHero from "../components/HomepageHero";
import HomepageMintstore from "../components/HomepageMintstore";
import HomepageSolution from "../components/HomepageSolution";
import HomepageGaming from "../components/HomepageGaming";
import HomepageMarketplace from "../components/HomepageMarketplace";
import HomepageRoadmap from "../components/HomepageRoadmap";
import HomepageToken from "../components/HomepageToken";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

function Homepage() {
  return (
    <>
      <Navbar
        value="Join Community"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <Wrapper>
        <HomepageHero />
        <HomepageMintstore />
        <HomepageCollectibles />
        <HomepageSolution />
        <HomepageGaming />
        <HomepageMarketplace />
        <HomepageRoadmap />
        <HomepageToken heading="QLIP Token" />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 64px;
`;
export default Homepage;
