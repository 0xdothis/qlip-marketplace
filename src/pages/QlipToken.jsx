import Navbar from "../components/Navbar";
import NotReady from "../components/NotReady";

function QlipToken() {
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

export default QlipToken;
