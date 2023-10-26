import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import NFTCollection from "./pages/NFTCollection";
import LiveTracking from "./pages/LiveTracking";
import TradingHistory from "./pages/TradingHistory";
import Clients from "./pages/Clients";
import Dealers from "./pages/Dealers";
import Suppers from "./pages/Suppers";
import Dashboard from "./pages/Dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/nft-collection":
        title = "";
        metaDescription = "";
        break;
      case "/live-tracking":
        title = "";
        metaDescription = "";
        break;
      case "/trading-history":
        title = "";
        metaDescription = "";
        break;
      case "/clients":
        title = "";
        metaDescription = "";
        break;
      case "/dealers":
        title = "";
        metaDescription = "";
        break;
      case "/suppers":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route path="/nft-collection" element={<NFTCollection />} />
      <Route path="/live-tracking" element={<LiveTracking />} />
      <Route path="/trading-history" element={<TradingHistory />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/suppers" element={<Suppers />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
