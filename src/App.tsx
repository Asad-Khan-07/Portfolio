import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import SplashCursor from "./components/SplashCursor"; // ← import karo

const App = () => (
  <BrowserRouter>
    <SplashCursor />  {/* ← bas yahan add karo */}
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;