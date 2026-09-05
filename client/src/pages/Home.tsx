/**
 * Style reminder: Plain Shiny Jet Black — concise visual-first orientation popup.
 * The opening stays concise; the exact six-beat visitor narrative follows the Zoom credentials card.
 * Trust and legal disclosures use icons, semantic labels, and dark inset cards without changing approved copy.
 */
import { useState } from "react";
import {
  CalendarCheck,
  Check,
  ChevronRight,
  Copy,
  Cpu,
  Download,
  FileText,
  History,
  Landmark,
  MessageCircle,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  Video,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { BrandMark } from "@/components/BrandMark";
import { UiverseButton } from "@/components/UiverseButton";

const zoomDetails = [
  { label: "Meeting Link", value: "zoom.us/j/copygo-walkthrough" },
  { label: "Meeting ID", value: "849 2041 3892" },
  { label: "Passcode", value: "COPYGO2026" },
];

const trustItems = [
  { label: "Capital custody", icon: Landmark, lead: "Your funds stay with your broker:", copy: "CopyGo never holds client capital or accepts deposits." },
  { label: "Market risk", icon: TriangleAlert, lead: "No guaranteed returns:", copy: "Trading carries real market risk and losses can occur." },
  { label: "Performance context", icon: History, lead: "Past performance ≠ future results:", copy: "Historical tracking does not guarantee future success." },
  { label: "Terms clarity", icon: FileText, lead: "Review fees & terms:", copy: "Transparent software subscription pricing with no cancellation penalty." },
];

export default function Home() {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  const scrollToMeeting = () => {
    document.getElementById("meeting")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const copyDetail = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      toast.success(`${label} copied`);
      window.setTimeout(() => setCopied(null), 1700);
    } catch {
      toast.message(`Copy this ${label}: ${value}`);
    }
  };

  if (!open) {
    return (
      <main className="ambient-page closed-state">
        <button className="reopen-pill" onClick={() => setOpen(true)}>
          <span className="reopen-dot" /> Open CopyGo Pro guide
        </button>
      </main>
    );
  }

  return (
    <main className="ambient-page">
      <div className="page-noise" aria-hidden="true" />
      <section className="orientation-shell" aria-labelledby="popup-title">
        <div className="shell-sheen" aria-hidden="true" />
        <header className="popup-bar">
          <BrandMark />
          <button className="close-control" onClick={() => setOpen(false)} aria-label="Close guide">
            <X size={19} strokeWidth={1.7} />
          </button>
        </header>

        <section className="intro-section section-pad">
          <div className="intro-copy">
            <h1 id="popup-title">Confused how <em>CopyGo Pro</em> works? Watch it live — in a free 20-minute Zoom call.</h1>
          </div>

        </section>

        <section id="meeting" className="meeting-section section-pad" aria-label="Live Zoom walkthrough">
          <div className="section-ornament" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /></div>

          <div className="demo-flow-panel">
            <h3 className="demo-flow-headline">No VPS. No desktop. No MT5 app. Just your smartphone.</h3>
            <div className="demo-flow-steps">
              <article className="demo-flow-card card-indigo">
                <span className="demo-flow-index">01</span>
                <span className="demo-flow-card-icon"><Server size={19} /></span>
                <div className="demo-flow-card-content">
                  <span className="demo-flow-eyebrow">NO EXTRA HARDWARE</span>
                  <strong>No VPS or desktop needed</strong>
                  <small>Your strategy setup does not require a personal VPS or computer.</small>
                </div>
                <span className="demo-flow-card-corner" aria-hidden="true">↗</span>
              </article>
              <ChevronRight className="demo-flow-arrow" aria-hidden="true" />
              <article className="demo-flow-card card-lime featured">
                <span className="demo-flow-index">02</span>
                <span className="demo-flow-card-icon"><Download size={19} /></span>
                <div className="demo-flow-card-content">
                  <span className="demo-flow-eyebrow">NO APP INSTALLATION</span>
                  <strong>No MT5 app to install</strong>
                  <small>No MT5 desktop software or mobile application is required.</small>
                </div>
                <span className="demo-flow-card-corner" aria-hidden="true">↗</span>
              </article>
              <ChevronRight className="demo-flow-arrow" aria-hidden="true" />
              <article className="demo-flow-card card-indigo">
                <span className="demo-flow-index">03</span>
                <span className="demo-flow-card-icon"><Smartphone size={19} /></span>
                <div className="demo-flow-card-content">
                  <span className="demo-flow-eyebrow">PHONE-FIRST CONTROL</span>
                  <strong>Your smartphone is enough</strong>
                  <small>Check and manage your connected setup directly from your phone.</small>
                </div>
                <span className="demo-flow-card-corner" aria-hidden="true">↗</span>
              </article>
            </div>
          </div>

          <article className="attendee-benefit-banner" aria-label="30-Day trial weekly attendee giveaway">
            <div className="banner-bloom-indigo" aria-hidden="true" />
            <div className="banner-bloom-lime" aria-hidden="true" />

            <div className="banner-main-row">
              <div className="banner-left-zone">
                <span className="banner-icon-holder"><CalendarCheck size={20} /></span>
                <div className="banner-copy-group">
                  <span className="banner-eyebrow">WEEKLY LIVE WALKTHROUGH ATTENDEE GIVEAWAY</span>
                  <h3 className="banner-headline">One weekly Lucky winner receives 30 days free.</h3>
                  <p className="banner-supporting">Join the live Zoom walkthrough. One eligible attendee is selected and announced each week.</p>
                  <p className="banner-fineprint">Eligibility and selection terms apply.</p>
                </div>
              </div>

              <div className="banner-value-col">
                <span className="banner-winner-chip">1 LUCKY WINNER</span>
                <span className="banner-value-text">30 DAYS FREE TRIAL</span>
                <div className="banner-comparison-chip">
                  <span>Standard trial: <strong className="chip-muted-value">7 days</strong></span>
                </div>
              </div>
            </div>
          </article>

          <div className="credentials-card">
            <p className="credentials-title">Direct Zoom meeting credentials</p>
            <div className="credential-list">
              {zoomDetails.map((detail) => (
                <div className="credential-row" key={detail.label}>
                  <div><span>{detail.label}</span><strong>{detail.value}</strong></div>
                  <button onClick={() => copyDetail(detail.label, detail.value)} aria-label={`Copy ${detail.label}`}>
                    {copied === detail.label ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied === detail.label ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              ))}
            </div>
            <UiverseButton variant="zoom" className="meeting-cta" onClick={scrollToMeeting}><Video size={18} /> Join 20-min free Zoom meeting</UiverseButton>
            <p className="risk-caption">This is a software demonstration, not investment advice. Trading involves risk.</p>
          </div>

          <section className="chat-section section-pad" aria-label="Private contact choices">
            <h2>Prefer to ask questions privately if you don't want to join Zoom call?</h2>
            <div className="contact-card-grid">
              <article className="contact-card telegram-contact-card">
                <div className="contact-card-header">
                  <span className="contact-icon-holder"><Send size={18} /></span>
                  <span className="contact-eyebrow">PRIVATE CHAT</span>
                </div>
                <h3>Message on Telegram</h3>
                <p>Ask a private question and get a clear answer from our team.</p>
                <a
                  href="https://t.me/ftrade1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-cta-btn telegram-cta-btn"
                >
                  MESSAGE ON TELEGRAM
                </a>
              </article>

              <article className="contact-card whatsapp-contact-card">
                <div className="contact-card-header">
                  <span className="contact-icon-holder"><MessageCircle size={18} /></span>
                  <span className="contact-eyebrow">PRIVATE CHAT</span>
                </div>
                <h3>Message on WhatsApp</h3>
                <p>Ask a private question and get a clear answer from our team.</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=447418372509&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-cta-btn whatsapp-cta-btn"
                >
                  MESSAGE ON WHATSAPP
                </a>
              </article>
            </div>
          </section>

          <section className="visitor-pause-section" aria-labelledby="why-visitors-pause">
            <h2 id="why-visitors-pause">Why visitors pause before they start</h2>
            <div className="psychology-story">
              <p className="story-beat story-reassurance">You're not the only one.</p>
              <p className="story-beat story-recognition">Most visitors leave this page without realizing what COPYGO.PRO actually solves for them.</p>
              <p className="story-beat story-overload">Here's what usually happens: you want to trade forex, but learning it takes weeks. Watching charts takes hours you don't have. So you open five tabs, three YouTube videos, and two apps — still unsure which one actually works.</p>
              <p className="story-beat story-hesitation">You almost connect your account… then stop. Not because you don't want to start, but because you don't fully understand what happens next.</p>
              <p className="story-beat story-delay">So you close the tab. Tell yourself "maybe later." And later never comes.</p>
              <p className="story-beat story-shift">Here's the shift: COPYGO.PRO simplifies those decision points. Pick a MyFxBook-verified strategy, set your risk level once — and trades are copied to your account automatically.</p>
            </div>
          </section>
        </section>

        <section className="trust-section section-pad">
          <div className="trust-heading">
            <h2>Trust, transparency <em>&</em> risk factors</h2>
            <p>Straight answers before you decide — no pressure, no sales pitch.</p>
          </div>
          <div className="trust-list">
            {trustItems.map((item, index) => (
              <article className={`trust-row trust-row-${index + 1}`} key={item.lead}>
                <div className="trust-meta">
                  <span className="trust-number">0{index + 1}</span>
                  <span className="trust-icon" aria-hidden="true"><item.icon size={19} strokeWidth={1.7} /></span>
                </div>
                <div className="trust-copy">
                  <span className="trust-label">{item.label}</span>
                  <p><strong>{item.lead}</strong> {item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="popup-footer">
          <div className="footer-disclaimer-grid">
            <section className="footer-disclosure software-disclosure">
              <div className="footer-disclosure-head"><span className="footer-disclosure-icon"><Cpu size={18} strokeWidth={1.7} /></span><span>SOFTWARE SCOPE</span></div>
              <p>CopyGo Pro provides software System and automation technology for trading platforms. CopyGo Pro does not provide investment advice, financial planning, portfolio management, or brokerage services.</p>
            </section>
            <section className="footer-disclosure risk-disclosure">
              <div className="footer-disclosure-head"><span className="footer-disclosure-icon"><TriangleAlert size={18} strokeWidth={1.7} /></span><span>RISK NOTICE</span></div>
              <p>Trading forex, contracts for difference (CFDs), and financial derivatives carries a high level of risk and may result in losses exceeding your initial investment. Most retail investor accounts lose money when trading CFDs. You should consider whether you understand how financial markets work and whether you can afford to take the risk of losing your money.</p>
            </section>
          </div>

          <div className="brand-close-footer">
            <div className="footer-brand-zone">
              <BrandMark />
              <span className="footer-brand-desc">Trading automation software</span>
            </div>
            <div className="footer-message-zone">
              <p className="footer-closing-main">Your setup. Your control. Your decision.</p>
              <p className="footer-closing-sub">CopyGo Pro provides trading-platform software and automation tools.</p>
            </div>
            <div className="footer-copyright-zone">
              <span className="footer-copyright">© 2026 CopyGo Pro</span>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
