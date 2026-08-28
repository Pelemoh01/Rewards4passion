import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Eye, Target } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Rewards4Passion Nigeria Ltd and our practical, accountable approach to business support.",
};

export default function AboutPage() {
  return (
    <div className="site-page">
      <SiteHeader active="about" />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow light">About Rewards4Passion</p>
              <h1>A practical partner for businesses that need things done well.</h1>
            </div>
            <p>
              We are a Nigerian company helping individuals and organisations
              coordinate procurement, protected transactions, consignments,
              outsourced support and business decisions.
            </p>
          </div>
        </section>

        <section className="section about-intro">
          <div className="container about-grid">
            <div className="about-statement">
              <span>Our purpose</span>
              <blockquote>
                To make business engagements clearer, better coordinated and
                easier to move from intention to successful delivery.
              </blockquote>
            </div>
            <div className="about-copy">
              <p className="eyebrow">Who we are</p>
              <h2>Built for clarity. Ready for complexity.</h2>
              <p>
                Rewards4Passion Nigeria Ltd works across connected service areas
                where reliability and communication matter. Our role is to understand
                the requirement, organise the right path and support execution with
                useful documentation and clear expectations.
              </p>
              <p>
                From our base in Rukpokwu, Rivers State, we support clients who value
                a responsive local partner with a broad view of business operations.
              </p>
            </div>
          </div>
        </section>

        <section className="section direction-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Our direction</p>
              <h2>The standards behind every engagement.</h2>
            </div>
            <div className="direction-grid">
              <article>
                <span><Target size={25} aria-hidden="true" /></span>
                <h3>Our focus</h3>
                <p>Solving real operational needs with coordinated, fit-for-purpose support.</p>
              </article>
              <article>
                <span><Eye size={25} aria-hidden="true" /></span>
                <h3>Our outlook</h3>
                <p>To be a dependable Nigerian partner known for clear processes and consistent service.</p>
              </article>
              <article>
                <span><Compass size={25} aria-hidden="true" /></span>
                <h3>Our approach</h3>
                <p>Listen carefully, define expectations, coordinate transparently and follow through.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section principles-section">
          <div className="container principles-grid">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Simple principles. Serious execution.</h2>
            </div>
            <ul>
              {["Clear communication", "Responsible coordination", "Practical problem-solving", "Respect for agreed terms"].map((item) => (
                <li key={item}><CheckCircle2 size={20} aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow light">Work with us</p>
              <h2>Let’s turn your requirement into an organised plan.</h2>
            </div>
            <Link className="button button-white" href="/contact">
              Start a conversation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
