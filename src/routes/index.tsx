import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Sparkles,
  Users,
  Trophy,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Star,
  GraduationCap,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { WhatsAppButton, WHATSAPP_URL } from "@/components/WhatsAppButton";

import heroImg from "@/assets/hero.jpg";
import islamicImg from "@/assets/islamic-studies.jpg";
import sportsImg from "@/assets/sports.jpg";
import prePrimaryImg from "@/assets/preprimary.jpg";
import primaryImg from "@/assets/primary.jpg";
import juniorImg from "@/assets/junior.jpg";
import graduationImg from "@/assets/graduation.jpg";
import buildingImg from "@/assets/school-building.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Darul Ilmi Primary & Junior School | CBC School in Nakuru" },
      {
        name: "description",
        content:
          "Nurturing Knowledge, Character & Faith. Quality CBC education in Nakuru from PP1 to Junior Secondary at Darul Ilmi Primary & Junior School.",
      },
      { property: "og:title", content: "Darul Ilmi Primary & Junior School | Nakuru" },
      {
        property: "og:description",
        content:
          "Premium private CBC school in Nakuru with strong Islamic values, small classes and holistic learning from PP1 to Grade 9.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: "Darul Ilmi Primary & Junior School",
          slogan: "Education is Light",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nakuru",
            addressCountry: "KE",
            postOfficeBoxNumber: "P.O. Box 15420",
          },
          telephone: "+254704420640",
          email: "info@darulilmi.ac.ke",
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyUs />
      <About />
      <Academics />
      <Gallery />
      <News />
      <Admissions />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Darul Ilmi students in a bright Nakuru classroom"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Education is Light · Nakuru, Kenya
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Nurturing Knowledge, <span className="italic text-cream">Character</span> & Faith
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Quality CBC education in Nakuru from PP1 to Junior Secondary — grounded in
            Islamic values, guided by dedicated teachers, and designed for every child to thrive.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm sm:text-base font-semibold shadow-elegant hover:shadow-glow transition-all"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-white/20 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {[
              { n: "500+", l: "Learners" },
              { n: "20+", l: "Educators" },
              { n: "3", l: "Levels" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">{s.n}</div>
                <div className="text-xs sm:text-sm text-white/75 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase animate-float-slow hidden md:block">
        Scroll to explore
      </div>
    </section>
  );
}

/* -------------------- WHY US -------------------- */
function WhyUs() {
  const items = [
    {
      icon: BookOpen,
      title: "CBC Excellence",
      text: "Competency-Based Curriculum delivered by experienced teachers from PP1 to Grade 9.",
    },
    {
      icon: Heart,
      title: "Islamic Values",
      text: "A strong moral and spiritual foundation woven through every day of school life.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      text: "Personalized attention so every learner is truly seen, known and supported.",
    },
    {
      icon: Trophy,
      title: "Holistic Education",
      text: "Academics, discipline, sports, leadership and creativity — the whole child.",
    },
  ];

  return (
    <section id="why" className="relative py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            A school built around <span className="text-gradient">every child</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four commitments that shape everything we do at Darul Ilmi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl bg-card border border-border p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-card-soft group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const values = [
    "Integrity rooted in faith",
    "Respect for every learner",
    "Excellence in academics",
    "Discipline and responsibility",
    "Compassion and service",
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-3xl blur-2xl" />
            <img
              src={buildingImg}
              alt="Darul Ilmi Primary & Junior School campus in Nakuru"
              width={1200}
              height={900}
              loading="lazy"
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-elegant hidden md:block max-w-[220px]">
              <div className="flex items-center gap-2 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                Trusted by hundreds of families in Nakuru.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About Our School</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              A place where learning meets <span className="text-gradient">purpose</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Darul Ilmi Primary & Junior School is a private mixed day school in the heart of Nakuru,
              offering the Kenyan CBC curriculum from Pre-Primary through Junior Secondary. Since our
              founding, we've combined academic ambition with strong Islamic values to raise confident,
              respectful and thoughtful young people.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-secondary/60 p-5 border border-border">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary">Vision</div>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                  To be a leading center of excellence that nurtures God-conscious, competent and
                  compassionate leaders of tomorrow.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary/60 p-5 border border-border">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary">Mission</div>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                  To deliver a holistic CBC education grounded in Islamic values, empowering every
                  learner to succeed academically, morally and spiritually.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-primary">Our Core Values</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ACADEMICS -------------------- */
function Academics() {
  const levels = [
    {
      img: prePrimaryImg,
      tag: "Ages 4 – 6",
      title: "Pre-Primary",
      grades: "PP1 & PP2",
      text: "A joyful, playful start where curiosity, language and social skills take root.",
    },
    {
      img: primaryImg,
      tag: "Ages 6 – 12",
      title: "Primary School",
      grades: "Grade 1 – 6",
      text: "Core CBC learning areas with strong literacy, numeracy and character formation.",
    },
    {
      img: juniorImg,
      tag: "Ages 12 – 15",
      title: "Junior Secondary",
      grades: "Grade 7 – 9",
      text: "Deeper subject specialization, science, technology and leadership pathways.",
    },
  ];

  return (
    <section id="academics" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Academic Levels</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Programs offered at Darul Ilmi
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A complete learning journey from the first day of school all the way to Grade 9 — under
            one dedicated roof.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {levels.map((lv) => (
            <article
              key={lv.title}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={lv.img}
                  alt={lv.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
                  {lv.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary-glow">
                  {lv.grades}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{lv.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lv.text}</p>
                <a
                  href="#admissions"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Enroll now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY -------------------- */
function Gallery() {
  const photos = [
    { src: heroImg, alt: "Students in classroom", cls: "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" },
    { src: islamicImg, alt: "Islamic studies", cls: "aspect-square" },
    { src: sportsImg, alt: "Sports on the field", cls: "aspect-square" },
    { src: primaryImg, alt: "Primary learners with tablets", cls: "aspect-[4/3] md:col-span-2" },
    { src: graduationImg, alt: "Graduation ceremony", cls: "aspect-square" },
    { src: prePrimaryImg, alt: "Pre-primary class", cls: "aspect-square" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Life at Darul Ilmi</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Moments from our school
          </h2>
          <p className="mt-4 text-muted-foreground">
            Classrooms, sports, Islamic studies and celebrations — the small stories that make our
            community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card-soft ${p.cls}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- NEWS -------------------- */
function News() {
  const items = [
    {
      tag: "Admissions",
      date: "Jan 6, 2027",
      title: "Term 1 opening day for all learners",
      text: "PP1 through Grade 9 resume classes. New learners report by 8:00 AM with parents.",
    },
    {
      tag: "Competition",
      date: "Feb 22, 2027",
      title: "Regional CBC science & innovation fair",
      text: "Our Grade 7 – 9 innovators represent Darul Ilmi at the Nakuru county showcase.",
    },
    {
      tag: "Graduation",
      date: "Nov 30, 2026",
      title: "Grade 6 & Grade 9 graduation ceremony",
      text: "A joyful send-off for our transitioning learners together with families and staff.",
    },
    {
      tag: "Parent Meeting",
      date: "Mar 15, 2027",
      title: "Term 1 parents consultative day",
      text: "One-on-one meetings with class teachers to review progress and set term goals.",
    },
  ];

  return (
    <section id="news" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">News & Events</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              What's happening this term
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((n) => (
            <article
              key={n.title}
              className="group rounded-2xl bg-card border border-border p-6 sm:p-7 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold uppercase tracking-wider">
                  {n.tag}
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {n.date}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {n.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ADMISSIONS -------------------- */
function Admissions() {
  const steps = [
    { n: "01", t: "Submit inquiry", d: "Reach out via WhatsApp, phone or email with your child's details." },
    { n: "02", t: "Visit the school", d: "Meet our team, tour the campus and see our learning environment." },
    { n: "03", t: "Complete admission form", d: "Fill in the admission form and share prior school records." },
    { n: "04", t: "Receive confirmation", d: "Get your admission letter, fee statement and welcome pack." },
  ];

  return (
    <section id="admissions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow p-8 sm:p-12 md:p-16 shadow-elegant">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div className="text-white max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Admissions</span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
                Join the Darul Ilmi family
              </h2>
              <p className="mt-4 text-white/85 text-base sm:text-lg">
                Admissions are open for PP1 through Grade 9. Start the journey in four simple steps.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm sm:text-base font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 text-white hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl font-display font-bold text-white/60">{s.n}</div>
                <h3 className="mt-3 font-semibold text-lg">{s.t}</h3>
                <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out for admissions, visits or any question about life at Darul Ilmi.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["Darul Ilmi Primary & Junior School", "P.O. Box 15420, Nakuru, Kenya"],
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+254 704 420 640"],
                href: "tel:+254704420640",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info@darulilmi.ac.ke"],
                href: "mailto:info@darulilmi.ac.ke",
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href ?? "#"}
                className="flex gap-5 items-start rounded-2xl bg-card border border-border p-6 hover:shadow-card-soft transition-shadow"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 grid place-items-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="text-sm text-muted-foreground mt-0.5">
                      {l}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 items-center rounded-2xl p-6 text-white shadow-card-soft hover:shadow-elegant transition-shadow"
              style={{ backgroundColor: "#25D366" }}
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-white/20 grid place-items-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-sm text-white/90 mt-0.5">Fastest way to reach the admissions team.</div>
              </div>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-card-soft bg-card min-h-[420px]">
            <iframe
              title="Darul Ilmi School location — Nakuru"
              src="https://www.google.com/maps?q=Nakuru,Kenya&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Darul Ilmi</div>
                <div className="text-xs text-white/70">Primary & Junior School</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/80 leading-relaxed">
              A private mixed day school in Nakuru offering CBC education from PP1 to Junior
              Secondary, rooted in Islamic values. <em>Education is Light.</em>
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-white/80">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["About", "#about"],
                ["Academics", "#academics"],
                ["Admissions", "#admissions"],
                ["Gallery", "#gallery"],
                ["News", "#news"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-white/80 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-white/80">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>P.O. Box 15420, Nakuru, Kenya</li>
              <li>
                <a href="tel:+254704420640" className="hover:text-white">
                  +254 704 420 640
                </a>
              </li>
              <li>
                <a href="mailto:info@darulilmi.ac.ke" className="hover:text-white">
                  info@darulilmi.ac.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} Darul Ilmi Primary & Junior School. All rights reserved.</div>
          <div className="italic">Education is Light</div>
        </div>
      </div>
    </footer>
  );
}
