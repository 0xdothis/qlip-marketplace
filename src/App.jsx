import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MintStore from "./pages/MintStore";
import Roadmap from "./pages/Roadmap";
import QlipToken from "./pages/QlipToken";
import Whitepaper from "./pages/Whitepaper";
import Marketplace from "./pages/Marketplace";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mint_store" element={<MintStore />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/qlip_token" element={<QlipToken />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
