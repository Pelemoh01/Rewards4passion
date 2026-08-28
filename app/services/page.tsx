import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore procurement, escrow support, shipping and consignment, outsourcing, and consultation services from Rewards4Passion Nigeria Ltd.",
};

const services = [
  {
    icon: PackageCheck,
    number: "01",
    title: "Procurement",
    summary: "A structured path from requirement to sourcing and coordinated supply.",
    points: ["Requirement clarification", "Vendor and quotation coordination", "Order and delivery follow-through"],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Escrow services",
    summary: "Milestone-led transaction support designed to improve clarity between parties.",
    points: ["Agreed transaction milestones", "Documentation and status coordination", "Release support under agreed terms"],
  },
  {
    icon: Ship,
    number: "03",
    title: "Shipping & consignment",
    summary: "Practical coordination for goods moving through multiple hands and locations.",
    points: ["Shipment planning", "Consignment documentation", "Handover and delivery coordination"],
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Outsourcing",
    summary: "Flexible external support for recurring, specialist or project-based business needs.",
    points: ["Scope and role definition", "Resource coordination", "Performance follow-through"],
  },
  {
    icon: Handshake,
    number: "05",
    title: "General consultation",
    summary: "Clear thinking and practical guidance for business questions and execution challenges.",
    points: ["Needs assessment", "Options and action planning", "Implementation guidance"],
  },
];

export default function ServicesPage() {
  return (
    <div className="site-page">
      <SiteHeader active="services" />
      <main>
        <section className="page-hero services-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow light">Our services</p>
              <h1>Connected support for every stage of the work.</h1>
            </div>
            <p>
              Choose one service or combine several. We organise the moving parts
              around a clear requirement, agreed expectations and responsive coordination.
            </p>
          </div>
        </section>

        <section className="section service-list-section">
          <div className="container detailed-services">
            {services.map(({ icon: Icon, number, title, summary, points }) => (
              <article className="detailed-service" key={title}>
                <div className="detailed-service-icon"><Icon size={27} aria-hidden="true" /></div>
                <div className="detailed-service-copy">
                  <span>{number}</span>
                  <h2>{title}</h2>
                  <p>{summary}</p>
                </div>
                <ul>
                  {points.map((point) => <li key={point}><Check size={16} aria-hidden="true" /> {point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="process-strip">
          <div className="container">
            <p className="eyebrow light">Our engagement flow</p>
            <div className="process-row">
              <div><b>1</b><span>Share your requirement</span></div>
              <div><b>2</b><span>Align scope and expectations</span></div>
              <div><b>3</b><span>Coordinate execution</span></div>
              <div><b>4</b><span>Confirm completion</span></div>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow light">Need a tailored combination?</p>
              <h2>Tell us the outcome you need. We’ll help organise the path.</h2>
            </div>
            <Link className="button button-white" href="/contact">
              Discuss your requirement <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
