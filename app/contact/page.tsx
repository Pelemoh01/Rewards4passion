import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Rewards4Passion Nigeria Ltd in Rukpokwu, Rivers State, for business support and service enquiries.",
};

export default function ContactPage() {
  return (
    <div className="site-page">
      <SiteHeader active="contact" />
      <main>
        <section className="page-hero contact-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow light">Contact us</p>
              <h1>Let’s discuss what you need to move forward.</h1>
            </div>
            <p>
              Share your requirement, expected location and preferred timeframe.
              Our team will help you identify the right next step.
            </p>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">Reach Rewards4Passion</p>
              <h2>Choose the channel that works for you.</h2>
              <p>
                For a faster conversation, include the service you need and a brief
                description of your requirement when you contact us.
              </p>
              <Link className="text-link" href="/services">
                Review our services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="contact-cards">
              <article>
                <span><Phone size={23} aria-hidden="true" /></span>
                <div><h3>Call us</h3><p>Speak directly with our team.</p></div>
                <div className="contact-actions">
                  <a href="tel:+2349024389087">0902 438 9087</a>
                  <a href="tel:+2349070361661">0907 036 1661</a>
                </div>
              </article>
              <article>
                <span><Mail size={23} aria-hidden="true" /></span>
                <div><h3>Email us</h3><p>Send your requirement in writing.</p></div>
                <div className="contact-actions">
                  <a href="mailto:Rewards4Passion@gmail.com">Rewards4Passion@gmail.com</a>
                </div>
              </article>
              <article>
                <span><MapPin size={23} aria-hidden="true" /></span>
                <div><h3>Visit our office</h3><p>No. 7 Igwe Close, Rukpokwu, Rivers State, Nigeria.</p></div>
                <div className="contact-actions">
                  <a href="https://www.google.com/maps/search/?api=1&query=No.+7+Igwe+Close+Rukpokwu+Rivers+State+Nigeria" target="_blank" rel="noreferrer">Get directions</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-note">
          <div className="container contact-note-inner">
            <MessageSquareText size={29} aria-hidden="true" />
            <div>
              <p className="eyebrow light">Before you contact us</p>
              <h2>Three details help us respond more effectively.</h2>
            </div>
            <ol>
              <li><b>01</b><span>The service or outcome you need</span></li>
              <li><b>02</b><span>Your location or delivery destination</span></li>
              <li><b>03</b><span>Your preferred timeframe</span></li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
