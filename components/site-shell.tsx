import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About us", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "contact", label: "Contact us", href: "/contact" },
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Rewards4Passion Nigeria Ltd home">
      <span className="brand-mark"><i>R</i><b>4</b></span>
      <span className="brand-name">Rewards4Passion<small>Nigeria Ltd</small></span>
    </Link>
  );
}

export function SiteHeader({ active }: { active: string }) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Business support that moves you forward</span>
          <div className="topbar-links">
            <a href="tel:+2349024389087"><Phone size={13} aria-hidden="true" /> 0902 438 9087</a>
            <a href="mailto:Rewards4Passion@gmail.com"><Mail size={13} aria-hidden="true" /> Email us</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="header-cta" href="/contact">Request support</Link>
        </div>
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Coordinated support for procurement, transactions, logistics and business operations.</p>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+2349024389087"><Phone size={15} aria-hidden="true" /> 0902 438 9087</a>
          <a href="tel:+2349070361661"><Phone size={15} aria-hidden="true" /> 0907 036 1661</a>
          <a href="mailto:Rewards4Passion@gmail.com"><Mail size={15} aria-hidden="true" /> Rewards4Passion@gmail.com</a>
        </div>
        <div>
          <h3>Office</h3>
          <p className="address"><MapPin size={16} aria-hidden="true" /> No. 7 Igwe Close, Rukpokwu, Rivers State, Nigeria.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Rewards4Passion Nigeria Ltd.</span>
        <span>Built on trust. Driven by delivery.</span>
      </div>
    </footer>
  );
}
