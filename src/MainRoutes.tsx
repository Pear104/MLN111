import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About/About";
import { AnimatePresence } from "framer-motion";

export default function MainRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes {...{ location, key: location.pathname }}>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} key={"home"} />
          <Route path="about" element={<About />} key={"about"} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
