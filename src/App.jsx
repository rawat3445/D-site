import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import Interior from "./Pages/Interior";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Intro from "./Pages/Intro"

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
