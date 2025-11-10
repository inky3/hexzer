// src/pages/Portfolio.jsx
import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

const items = [
  { id: "p1", title: "Project One", img: "/img/p1.jpg", desc: "Minimal dark composition." },
  { id: "p2", title: "Project Two", img: "/img/p2.jpg", desc: "Red accent, high contrast." },
  { id: "p3", title: "Project Three", img: "/img/p3.jpg", desc: "Grid-first storytelling." },
  // เพิ่มได้เรื่อย ๆ
];

export default function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Portfolio" title="All Works" subtitle="Tap any tile to view details.">
      <div
        style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
        }}
      >
        {items.map((it) => (
          <Card
            key={it.id}
            title={it.title}
            copy={it.desc}
            media={<img src={it.img} alt={it.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />}
          />
        ))}
      </div>
    </Section>
  );
}
