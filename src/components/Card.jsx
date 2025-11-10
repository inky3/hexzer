import React from "react";

export default function Card({ title, copy, icon, media }) {
  return (
    <article className="card card--hover" style={{ padding: 20 }}>
      {media ? (
        <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
          {media}
        </div>
      ) : null}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {icon ? <span style={{ fontSize: 22 }}>{icon}</span> : null}
        <h3 style={{ margin: 0, fontSize: "1.125rem" }}>{title}</h3>
      </div>
      <p style={{ color: "var(--hexzer-muted)", marginTop: 8 }}>{copy}</p>
    </article>
  );
}
