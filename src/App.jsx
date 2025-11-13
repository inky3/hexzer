// src/App.jsx
import React from "react";
// 1. Import "Outlet" เพิ่มเข้ามา
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

// 2. เอา "Shell" กลับมา (ไม่ต้องใช้ {children} แล้ว)
function Shell() {
  return (
    <>
      {/* --- นี่คือ Navbar --- */}
      <div style={{ padding: 16, borderBottom: "1px solid #2b2b33" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/portfolio" style={{ marginRight: 12 }}>Portfolio</Link>
        <Link to="/about" style={{ marginRight: 12 }}>About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* --- 3. นี่คือจุดที่หน้าลูก (Home, About) จะมาแสดงผล --- */}
      <main style={{ minHeight: "60vh", padding: 24 }}>
        <Outlet />
      </main>

      {/* --- นี่คือ Footer --- */}
      <footer style={{ padding: 16, borderTop: "1px solid #2b2b33" }}>© Hexzer</footer>
    </>
  );
}

// 4. นี่คือ App หลัก
export default function App() {
  return (
    <Routes>
      {/* 5. สร้าง Route "แม่" ให้ใช้ Shell */}
      <Route path="/" element={<Shell />}>
        
        {/* 6. สร้าง Route "ลูก" ที่จะไปแสดงใน <Outlet /> */}
        <Route index element={<Home />} /> {/* "index" คือหน้าแรกสุด (path="/") */}
        <Route path="portfolio" element={<Portfolio />} /> {/* ไม่ต้องมี / ข้างหน้า */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Route> {/* ปิด Route "แม่" */}

      {/* ถ้า URL ไม่ตรงกับอะไรเลย ให้กลับไปหน้า Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
