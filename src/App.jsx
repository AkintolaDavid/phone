import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Landing";
import OfferPage from "./pages/OfferPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/offerpage" element={<OfferPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
