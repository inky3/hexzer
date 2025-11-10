import React from "react";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="card"
          style={{
            position: "relative",
            padding: "48px",
            overflow: "hidden",
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #1a1a20 0%, #121216 100%)",
          }}
        >
          {/* soft red glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-20% -10% auto auto",
              width: 480,
              height: 480,
              background: "radial-gradient(circle at 50% 50%, rgba(255,45,45,.25), transparent 60%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 760 }}>
            <div className="badge">Bringing Simplicity to Complex Ecosystems</div>
            <h1 className="headline" style={{ marginTop: 16 }}>
              We Simplify Delivery in a <span style={{ color: "var(--hexzer-red)" }}>Dark-Mode</span> World
            </h1>
            <p className="subhead" style={{ marginTop: 12 }}>
              Hexzer orchestrates strategy, design, and fulfillment—so your users experience seamless value at scale.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <a className="btn btn--primary" href="#how">See How</a>
              <a className="btn" href="#why">Why Hexzer</a>
            </div>
          </div>

          {/* media rail (right) */}
          <div
            className="card"
            style={{
              position: "absolute",
              right: 24,
              bottom: 24,
              width: "min(42%, 520px)",
              aspectRatio: "16/10",
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, #1f1f26, #15151b)",
              border: "1px solid #2b2b33",
              overflow: "hidden",
            }}
          >
            {/* Replace with an actual image later: /public/img/hero.jpg */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(600px 300px at 70% 20%, rgba(255,45,45,.18), transparent 50%), linear-gradient(180deg, #23232b, #181820)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
