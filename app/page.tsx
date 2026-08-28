import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import operationsImage from "@/public/images/rewards4passion-operations.png";

const services = [
  {
    icon: PackageCheck,
    title: "Procurement",
    text: "Structured sourcing and vendor coordination built around your specifications, budget and timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow services",
    text: "Clear, milestone-led transaction support that helps counterparties move forward with confidence.",
  },
  {
    icon: Ship,
    title: "Shipping & consignment",
    text: "Coordinated movement of goods, documentation and hand-offs from origin to destination.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Outsourcing",
    text: "Flexible operational support that gives your team more capacity for the work that matters most.",
  },
  {
    icon: Handshake,
    title: "General consultation",
    text: "Practical guidance that turns business needs into clear, workable next steps.",
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <SiteHeader active="home" />
      <main>
        <section
          className="hero hero-home"
          style={{ "--hero-image": `url(${operationsImage.src})` } as CSSProperties}
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow light">Trusted business support • Rivers State, Nigeria</p>
              <h1>Turning complex transactions into confident outcomes.</h1>
              <p className="hero-lead">
                Rewards4Passion brings procurement, escrow support, shipping,
                outsourcing and consultation together—so your business can move
                with clarity from decision to delivery.
              </p>
              <div className="hero-actions">
                <Link className="button button-coral" href="/services">
                  Explore our services <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="button button-ghost" href="/contact">
                  Speak with our team
                </Link>
              </div>
            </div>
            <div className="hero-image-space" aria-hidden="true" />
          </div>
          <div className="hero-band">
            <div className="container stat-row">
              <div><strong>5</strong><span>Core service areas</span></div>
              <div><strong>PH</strong><span>Port Harcourt based</span></div>
              <div><strong>NG</strong><span>Nigeria-focused delivery</span></div>
            </div>
          </div>
        </section>

        <section className="section purpose-section">
          <div className="container split-heading">
            <div>
              <p className="eyebrow">Why Rewards4Passion</p>
              <h2>Business support built around accountability.</h2>
            </div>
            <p>
              We connect people, processes and providers with a practical approach:
              understand the need, agree the path, coordinate the work and keep
              communication clear throughout.
            </p>
          </div>
        </section>

        <section className="section services-preview">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What we do</p>
              <h2>Five services. One coordinated experience.</h2>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={22} aria-hidden="true" /></span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <Link className="text-link" href="/services">
              See how we can support your next project <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="section container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow light">Start a conversation</p>
              <h2>Have a requirement, consignment or business challenge?</h2>
            </div>
            <Link className="button button-white" href="/contact">
              Contact Rewards4Passion <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
