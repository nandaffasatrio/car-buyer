import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
