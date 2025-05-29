import Navbar from "../components/Navbar";
import NotReady from "../components/NotReady";

function MintStore() {
  return (
    <>
      <Navbar
        value="Connect Wallet"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <NotReady />
    </>
  );
}

export default MintStore;
