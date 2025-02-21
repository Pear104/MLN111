import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About/About";
import { AnimatePresence } from "framer-motion";
import Page404 from "./pages/Page404/Page404";
import Definition from "./pages/Definition/Definition";
import Problem from "./pages/Problem/Problem";
import Relation from "./pages/Relation/Relation";
import Connect from "./pages/Connect/Connect";
import Solution from "./pages/Solution/Solution";
import Assistant from "./pages/Assistant/Assistant";

export default function MainRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes {...{ location, key: location.pathname }}>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="definition" element={<Definition />} />
          <Route path="problem" element={<Problem />} />
          <Route path="relation" element={<Relation />} />
          <Route path="solution" element={<Solution />} />
          <Route path="connect" element={<Connect />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
