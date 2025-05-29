import Navbar from "../components/Navbar";
import NotReady from "../components/NotReady";

function Roadmap() {
  return (
    <>
      <Navbar
        value="Join Community"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <NotReady />
    </>
  );
}

export default Roadmap;
