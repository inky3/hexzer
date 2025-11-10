import React from "react";

export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop: "40px" }}>
      <div className="container">
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            paddingTop: 20,
            color: "var(--hexzer-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 18, height: 18, background: "var(--hexzer-red)", borderRadius: 6 }} />
            <span>© {new Date().getFullYear()} Hexzer</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
