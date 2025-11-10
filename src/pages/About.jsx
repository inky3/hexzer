// src/pages/About.jsx
import React from "react";
import Section from "../components/Section.jsx";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Ink / Hexzer" subtitle="Dark, modern, image-first. Sharp contrast, red accents.">
      <div className="card" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 16, padding: 16 }}>
        <img src="/img/profile.jpg" alt="Profile" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 12 }} />
        <div>
          <p style={{ color: "var(--hexzer-muted)" }}>
            I craft modern, contrast-forward interfaces anchored by strong imagery and clear hierarchy.
            Tools: Figma, Photoshop, Illustrator, React, Astro, Vite.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {["Figma", "Photoshop", "Illustrator", "React", "Astro", "Vite"].map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
