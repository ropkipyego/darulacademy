import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Printer, ArrowLeft, Receipt, CalendarDays, Eye, EyeOff } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InquiryForm } from "@/components/InquiryForm";
import { useLang } from "@/lib/i18n";

type Row = { level: string; tuition: number; activity: number; lunch: number };

const FEES: Row[] = [
  { level: "PP1 – PP2 (Pre-Primary)", tuition: 9500, activity: 2000, lunch: 3500 },
  { level: "Grade 1 – Grade 3 (Lower Primary)", tuition: 11500, activity: 2500, lunch: 3500 },
  { level: "Grade 4 – Grade 6 (Upper Primary)", tuition: 13500, activity: 3000, lunch: 3500 },
  { level: "Grade 7 – Grade 9 (Junior Secondary)", tuition: 16500, activity: 3500, lunch: 4000 },
];

const total = (r: Row) => r.tuition + r.activity + r.lunch;
const money = (n: number) => n.toLocaleString("en-KE");

export const Route = createFileRoute("/fees")({
  component: FeesPage,
  head: () => ({
    meta: [
      { title: "School Fees & Fee Statements | Darul Ilmi School Nakuru" },
      {
        name: "description",
        content:
          "Transparent CBC term fees for PP1 to Grade 9 at Darul Ilmi Primary & Junior School, Nakuru. Download the fee statement or send a fee enquiry online.",
      },
      { property: "og:title", content: "School Fees | Darul Ilmi Primary & Junior School" },
      {
        property: "og:description",
        content: "CBC termly fee structure for pre-primary, primary and junior secondary in Nakuru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/fees" }],
  }),
});

function FeesPage() {
  const { t } = useLang();
  const [showAnnual, setShowAnnual] = useState(false);

  function downloadAnnualCsv() {
    const header = [
      "Level",
      "Tuition per term (KES)",
      "Activity & exams (KES)",
      "Lunch (KES)",
      "Total per term (KES)",
      "Total per year - 3 terms (KES)",
    ];
    const lines = [
      "Darul Ilmi Primary & Junior School — Annual Fee Structure 2026",
      header.join(","),
      ...FEES.map((r) =>
        [`"${r.level}"`, r.tuition, r.activity, r.lunch, total(r), total(r) * 3].join(","),
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "darul-ilmi-annual-fee-structure-2026.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function downloadCsv() {
    const header = ["Level", "Tuition per term (KES)", "Activity & exams (KES)", "Lunch (KES)", "Total per term (KES)"];
    const lines = [
      header.join(","),
      ...FEES.map((r) => [`"${r.level}"`, r.tuition, r.activity, r.lunch, total(r)].join(",")),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "darul-ilmi-fee-statement.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("fees.back")}
          </Link>

          <span className="mt-8 block text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {t("fees.eyebrow")}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{t("fees.title")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{t("fees.subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadCsv}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-card-soft hover:shadow-elegant transition-all"
            >
              <Download className="h-4 w-4" />
              {t("fees.download")}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Printer className="h-4 w-4" />
              {t("fees.print")}
            </button>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-card-soft">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-secondary/60 text-start">
                  <th className="px-5 py-4 text-start font-semibold text-foreground">{t("fees.level")}</th>
                  <th className="px-5 py-4 text-start font-semibold text-foreground">{t("fees.tuition")}</th>
                  <th className="px-5 py-4 text-start font-semibold text-foreground">{t("fees.activity")}</th>
                  <th className="px-5 py-4 text-start font-semibold text-foreground">{t("fees.lunch")}</th>
                  <th className="px-5 py-4 text-start font-semibold text-foreground">{t("fees.total")}</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((r) => (
                  <tr key={r.level} className="border-t border-border">
                    <td className="px-5 py-4 font-medium text-foreground">{r.level}</td>
                    <td className="px-5 py-4 text-muted-foreground">KES {money(r.tuition)}</td>
                    <td className="px-5 py-4 text-muted-foreground">KES {money(r.activity)}</td>
                    <td className="px-5 py-4 text-muted-foreground">KES {money(r.lunch)}</td>
                    <td className="px-5 py-4 font-semibold text-primary">KES {money(total(r))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card-soft">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("fees.annual.title")}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t("fees.annual.body")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={downloadAnnualCsv}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-card-soft hover:shadow-elegant transition-all"
              >
                <Download className="h-4 w-4" />
                {t("fees.annual.download")}
              </button>
              <button
                type="button"
                onClick={() => setShowAnnual((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                {showAnnual ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showAnnual ? t("fees.annual.hide") : t("fees.annual.view")}
              </button>
            </div>

            {showAnnual && (
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border animate-fade-in">
                <table className="w-full min-w-[520px] text-sm">
                  <thead>
                    <tr className="bg-secondary/60">
                      <th className="px-5 py-3 text-start font-semibold text-foreground">{t("fees.level")}</th>
                      <th className="px-5 py-3 text-start font-semibold text-foreground">{t("fees.annual.term")}</th>
                      <th className="px-5 py-3 text-start font-semibold text-foreground">{t("fees.annual.year")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEES.map((r) => (
                      <tr key={r.level} className="border-t border-border">
                        <td className="px-5 py-3 font-medium text-foreground">{r.level}</td>
                        <td className="px-5 py-3 text-muted-foreground">KES {money(total(r))}</td>
                        <td className="px-5 py-3 font-semibold text-primary">KES {money(total(r) * 3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center">
                <Receipt className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("fees.note.title")}</h2>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
              <li>• {t("fees.note.1")}</li>
              <li>• {t("fees.note.2")}</li>
              <li>• {t("fees.note.3")}</li>
              <li>• {t("fees.note.4")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="fee-enquiry" className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {t("fees.enquire")}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">{t("form.title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("form.subtitle")}</p>
          </div>
          <div className="mt-8">
            <InquiryForm inquiryType="fees" />
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
