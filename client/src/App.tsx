/**
 * App.tsx — Root component and route table.
 * Registers one route per page (6 pages total per the assignment
 * requirements) inside the shared Layout (navbar + footer).
 */

import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Education from "@/pages/Education";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* Layout provides the navbar/footer; child routes render in <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Any unknown path falls back to the Home page */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
