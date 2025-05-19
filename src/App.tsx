import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CreatePlan from "./pages/CreatePlan.tsx";
import ListPlan from "./pages/ListPlan.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/list-plan" element={<ListPlan />} />
      </Routes>
    </Router>
  );
}

export default App;