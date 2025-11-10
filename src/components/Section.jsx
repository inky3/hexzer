import React from "react";

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div style={{ maxWidth: 820, marginBottom: 28 }}>
          {eyebrow && <div className="badge">{eyebrow}</div>}
          {title && <h2 className="headline" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.4rem)", marginTop: 10 }}>{title}</h2>}
          {subtitle && <p className="subhead" style={{ marginTop: 8 }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
