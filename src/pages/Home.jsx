// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import FeatureGrid from "../components/FeatureGrid.jsx";
import { features } from "../data/features.js";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="who"
        eyebrow="Who We Are"
        title="A compact squad shipping outsized outcomes."
        subtitle="We partner with ambitious teams to compress delivery timelines and de-risk launches."
      >
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <div className="card" style={{ gridColumn: "span 4", padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>150+ Launches</h3>
            <p style={{ color: "var(--hexzer-muted)" }}>
              Cross-industry playbooks that generalize without losing nuance.
            </p>
          </div>
          <div className="card" style={{ gridColumn: "span 4", padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>15+ Years</h3>
            <p style={{ color: "var(--hexzer-muted)" }}>
              Senior talent only—no handoffs, no ceremony, just throughput.
            </p>
          </div>
          <div className="card" style={{ gridColumn: "span 4", padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>Global Footprint</h3>
            <p style={{ color: "var(--hexzer-muted)" }}>
              Remote-first with local execution pods where it matters.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="How We Simplify"
        title="A friction-less experience from brief to scale."
        subtitle="Our modular system lets you start small, then ramp without rewriting the playbook."
      >
        <FeatureGrid items={features} />
      </Section>

      <Section
        id="why"
        eyebrow="Why Hexzer"
        title="Choose velocity without sacrificing craft."
        subtitle="Opinionated defaults, measurable outcomes, and transparent pricing."
      >
        <div
          className="card"
          style={{
            padding: 24,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 16,
          }}
          id="cta"
        >
          <div>
            <h3 style={{ margin: 0 }}>Ready to accelerate?</h3>
            <p style={{ color: "var(--hexzer-muted)", marginTop: 6 }}>
              Book a 20-minute discovery call. We’ll baseline scope and map the fastest path to value.
            </p>
          </div>
          <a className="btn btn--primary" href="#">Book a Call</a>
        </div>
      </Section>
    </>
  );
}
