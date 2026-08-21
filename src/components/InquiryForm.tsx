import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

const schema = z.object({
  parent_name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  pupil_name: z.string().trim().max(100).optional(),
  grade: z.string().trim().max(60).optional(),
  start_term: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1500).optional(),
});

const GRADES = [
  "PP1",
  "PP2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
];

const TERMS = ["Term 1", "Term 2", "Term 3"];

const field =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus:border-ring focus:ring-2 focus:ring-ring/25";

export function InquiryForm({ inquiryType = "admission" }: { inquiryType?: "admission" | "fees" }) {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const fd = new FormData(e.currentTarget);
    const raw = {
      parent_name: String(fd.get("parent_name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      pupil_name: String(fd.get("pupil_name") ?? ""),
      grade: String(fd.get("grade") ?? ""),
      start_term: String(fd.get("start_term") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, boolean> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = true;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");

    const d = parsed.data;
    const { error } = await supabase.from("admission_inquiries").insert({
      inquiry_type: inquiryType,
      parent_name: d.parent_name,
      phone: d.phone,
      email: d.email ? d.email : null,
      pupil_name: d.pupil_name || null,
      grade: d.grade || null,
      start_term: d.start_term || null,
      message: d.message || null,
      language: lang,
    });

    if (error) {
      setStatus("idle");
      setFormError(t("form.error"));
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 text-center shadow-card-soft">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 grid place-items-center">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-foreground">{t("form.success.title")}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          {t("form.success.body")}
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-card-soft hover:shadow-elegant transition-all"
          >
            {t("form.success.again")}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            {t("form.success.whatsapp")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card-soft space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.parent")}</span>
          <input
            name="parent_name"
            required
            maxLength={100}
            autoComplete="name"
            className={`mt-1.5 ${field} ${errors["parent_name"] ? "border-destructive" : ""}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.phone")}</span>
          <input
            name="phone"
            required
            inputMode="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="+254 7.. ... ..."
            className={`mt-1.5 ${field} ${errors["phone"] ? "border-destructive" : ""}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.email")}</span>
          <input
            name="email"
            type="email"
            maxLength={255}
            autoComplete="email"
            className={`mt-1.5 ${field} ${errors["email"] ? "border-destructive" : ""}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.pupil")}</span>
          <input name="pupil_name" maxLength={100} className={`mt-1.5 ${field}`} />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.grade")}</span>
          <select name="grade" defaultValue="" className={`mt-1.5 ${field}`}>
            <option value="">{t("form.select")}</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground/80">{t("form.term")}</span>
          <select name="start_term" defaultValue="" className={`mt-1.5 ${field}`}>
            <option value="">{t("form.select")}</option>
            {TERMS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-semibold text-foreground/80">{t("form.message")}</span>
        <textarea name="message" rows={4} maxLength={1500} className={`mt-1.5 ${field} resize-y`} />
      </label>

      {formError && <p className="text-sm text-destructive">{formError}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold shadow-card-soft hover:shadow-elegant transition-all disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? t("form.sending") : t("form.submit")}
        </button>
        <p className="text-xs text-muted-foreground">{t("form.privacy")}</p>
      </div>
    </form>
  );
}
