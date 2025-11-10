import React from "react";
import Card from "./Card.jsx";

export default function FeatureGrid({ items = [] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(12, 1fr)",
      }}
    >
      {items.map((f, i) => (
        <div
          key={i}
          style={{
            gridColumn: i < 2 ? "span 6" : "span 3",
          }}
        >
          <Card title={f.title} copy={f.copy} icon={f.icon} />
        </div>
      ))}
      <div style={{ gridColumn: "1/-1" }}>
        <div
          className="card"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 16,
            padding: 16,
          }}
        >
          <div className="card" style={{ borderRadius: 12, minHeight: 220 }} />
          <div className="card" style={{ borderRadius: 12, minHeight: 220, background:
            "linear-gradient(180deg, #201f27, #15141b)" }} />
        </div>
      </div>
    </div>
  );
}
