import Navbar from "../components/Navbar";
import HomepageRoadmap from "../components/HomepageRoadmap";
import Hero from "../components/Hero";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Footer from "../components/Footer";

function Roadmap() {
  return (
    <>
      <Navbar
        value="Join Community"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <MaxWidthWrapper>
        <Hero>
          <HomepageRoadmap />
          <Footer />
        </Hero>
      </MaxWidthWrapper>
    </>
  );
}

export default Roadmap;
