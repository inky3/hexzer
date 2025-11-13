// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';



// function Shell({ children }) {
//   // navbarเล็ก ๆ กันพลาดเรื่อง Header import
//   return (
//     <>
//       <div style={{ padding: 16, borderBottom: "1px solid #2b2b33" }}>
//         <Link to="/" style={{ marginRight: 12 }}>Home</Link>
//         <Link to="/portfolio" style={{ marginRight: 12 }}>Portfolio</Link>
//         <Link to="/about" style={{ marginRight: 12 }}>About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <main style={{ minHeight: "60vh", padding: 24 }}>{children}</main>
//       <footer style={{ padding: 16, borderTop: "1px solid #2b2b33" }}>© Hexzer</footer>
//     </>
//   );
// }

// // เพจทดสอบ (ตัดทุก dependency ออกก่อน)
// const Home = () => <h1 style={{ color: "white" }}>Home OK</h1>;
// const Portfolio = () => <h1 style={{ color: "white" }}>Portfolio OK</h1>;
// const About = () => <h1 style={{ color: "white" }}>About OK</h1>;
// const Contact = () => <h1 style={{ color: "white" }}>Contact OK</h1>;

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Shell>
  );
}
