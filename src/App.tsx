import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from './pages/Home';
import Planner from './pages/Planner';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
