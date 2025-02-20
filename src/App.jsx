import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router components
import Features from "./pages/Feature";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./pages/Work";
import Testimonials from "./pages/Testinomial";
import Contact from "./pages/Contact";
import "./App.css";
import ApplyLoan from "./pages/Apply";
import LendMoney from "./pages/LendMoney";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lend-money" element={<LendMoney />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
