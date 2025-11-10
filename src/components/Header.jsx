// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  borderRadius: 10,
  color: isActive ? "white" : "var(--hexzer-muted)",
  background: isActive ? "rgba(255,45,45,.12)" : "transparent",
  border: isActive ? "1px solid rgba(255,45,45,.35)" : "1px solid transparent",
});

export default function Header() {
  return (
    <header
      className="container"
      style={{
        paddingBlock: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          aria-hidden
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "var(--hexzer-red)",
            boxShadow: "0 0 0 6px rgba(255,45,45,.15)",
          }}
        />
        <strong style={{ letterSpacing: ".5px" }}>HEXZER</strong>
      </div>

      <nav style={{ display: "flex", gap: 8 }}>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/portfolio" style={linkStyle}>Portfolio</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}
