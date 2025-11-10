// src/pages/Contact.jsx
import React from "react";
import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="Available for collaborations, commissions, and creative projects."
    >
      <div
        className="card"
        style={{
          padding: 24,
          display: "grid",
          gap: 24,
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Contact Info */}
        <div>
          <p style={{ fontSize: "1.1rem", margin: 0 }}>📞 Phone</p>
          <p style={{ margin: 4, color: "var(--hexzer-muted)" }}>+66 000 000 000</p>

          <p style={{ fontSize: "1.1rem", marginTop: 20, marginBottom: 0 }}>✉️ Email</p>
          <p style={{ margin: 4, color: "var(--hexzer-muted)" }}>yourname@email.com</p>
        </div>

        <hr style={{ borderColor: "#2b2b33" }} />

        {/* Social Links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="#" className="btn">Instagram</a>
          <a href="#" className="btn">Facebook</a>
          <a href="#" className="btn">Behance</a>
          <a href="#" className="btn">Dribbble</a>
          <a href="#" className="btn">YouTube</a>
        </div>
      </div>
    </Section>
  );
}
