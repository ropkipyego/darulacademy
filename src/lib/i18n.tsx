import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const dict = {
  en: {
    "nav.about": "About",
    "nav.why": "Why Us",
    "nav.academics": "Academics",
    "nav.gallery": "Gallery",
    "nav.news": "News",
    "nav.admissions": "Admissions",
    "nav.fees": "Fees",
    "nav.contact": "Contact",
    "nav.apply": "Apply Now",
    "nav.menu": "Toggle menu",

    "lang.label": "Language",
    "lang.en": "English",
    "lang.ar": "العربية",

    "form.eyebrow": "Admission Inquiry",
    "form.title": "Start your child's journey",
    "form.subtitle":
      "Send us a few details and our admissions team will get back to you within one working day.",
    "form.parent": "Parent / Guardian name",
    "form.phone": "Phone number",
    "form.email": "Email (optional)",
    "form.pupil": "Pupil's name (optional)",
    "form.grade": "Class applying for",
    "form.term": "Preferred start term",
    "form.message": "Message (optional)",
    "form.submit": "Send inquiry",
    "form.sending": "Sending…",
    "form.select": "Select…",
    "form.success.title": "Inquiry received",
    "form.success.body":
      "Thank you — your inquiry has landed in our admissions inbox. We will contact you shortly.",
    "form.success.again": "Send another inquiry",
    "form.success.whatsapp": "Chat on WhatsApp instead",
    "form.error": "We couldn't send your inquiry. Please try again or reach us on WhatsApp.",
    "form.privacy": "We use your details only to respond to this inquiry.",
    "form.type.admission": "Admission",
    "form.type.fees": "Fees",

    "fees.eyebrow": "Fee Statements",
    "fees.title": "CBC term fees",
    "fees.subtitle":
      "Transparent, all-inclusive termly fees for the current academic year. Three terms per year.",
    "fees.level": "Level",
    "fees.tuition": "Tuition / term",
    "fees.activity": "Activity & exams",
    "fees.lunch": "Lunch (optional)",
    "fees.total": "Total / term",
    "fees.download": "Download fee statement (CSV)",
    "fees.print": "Print / save as PDF",
    "fees.note.title": "Good to know",
    "fees.note.1": "Fees are payable at the start of each term; termly instalment plans are available.",
    "fees.note.2": "One-off admission fee of KES 3,000 per new pupil (includes uniform starter pack).",
    "fees.note.3": "Sibling discount of 10% on tuition from the second child onwards.",
    "fees.note.4": "Transport is charged separately based on route — ask our office for a quote.",
    "fees.enquire": "Enquire about fees",
    "fees.back": "Back to home",
    "fees.currency": "KES",
    "fees.annual.title": "Annual fee structure 2026",
    "fees.annual.body":
      "Download or view the full-year fee structure (all three terms) as often as you need — no sign-up, no limits.",
    "fees.annual.download": "Download annual fee structure (CSV)",
    "fees.annual.view": "View annual fee structure",
    "fees.annual.hide": "Hide annual fee structure",
    "fees.annual.term": "Per term",
    "fees.annual.year": "Full year (3 terms)",
  },
  ar: {
    "nav.about": "من نحن",
    "nav.why": "لماذا نحن",
    "nav.academics": "الأكاديميات",
    "nav.gallery": "معرض الصور",
    "nav.news": "الأخبار",
    "nav.admissions": "التسجيل",
    "nav.fees": "الرسوم",
    "nav.contact": "اتصل بنا",
    "nav.apply": "سجّل الآن",
    "nav.menu": "القائمة",

    "lang.label": "اللغة",
    "lang.en": "English",
    "lang.ar": "العربية",

    "form.eyebrow": "طلب التسجيل",
    "form.title": "ابدأ رحلة طفلك",
    "form.subtitle": "أرسل لنا بياناتك وسيتواصل معك فريق التسجيل خلال يوم عمل واحد.",
    "form.parent": "اسم الوالد / ولي الأمر",
    "form.phone": "رقم الهاتف",
    "form.email": "البريد الإلكتروني (اختياري)",
    "form.pupil": "اسم الطالب (اختياري)",
    "form.grade": "الصف المطلوب",
    "form.term": "الفصل الدراسي المفضل",
    "form.message": "رسالة (اختياري)",
    "form.submit": "إرسال الطلب",
    "form.sending": "جارٍ الإرسال…",
    "form.select": "اختر…",
    "form.success.title": "تم استلام طلبك",
    "form.success.body": "شكرًا لك — وصل طلبك إلى مكتب التسجيل وسنتواصل معك قريبًا.",
    "form.success.again": "إرسال طلب آخر",
    "form.success.whatsapp": "التواصل عبر واتساب",
    "form.error": "لم نتمكن من إرسال طلبك. حاول مرة أخرى أو تواصل معنا عبر واتساب.",
    "form.privacy": "نستخدم بياناتك للرد على هذا الطلب فقط.",
    "form.type.admission": "التسجيل",
    "form.type.fees": "الرسوم",

    "fees.eyebrow": "بيان الرسوم",
    "fees.title": "رسوم الفصل الدراسي",
    "fees.subtitle": "رسوم فصلية شاملة وواضحة للعام الدراسي الحالي. ثلاثة فصول في السنة.",
    "fees.level": "المرحلة",
    "fees.tuition": "الرسوم الدراسية / فصل",
    "fees.activity": "الأنشطة والامتحانات",
    "fees.lunch": "الغداء (اختياري)",
    "fees.total": "الإجمالي / فصل",
    "fees.download": "تحميل بيان الرسوم (CSV)",
    "fees.print": "طباعة / حفظ PDF",
    "fees.note.title": "معلومات مهمة",
    "fees.note.1": "تُسدد الرسوم في بداية كل فصل، وتتوفر خطط تقسيط فصلية.",
    "fees.note.2": "رسوم تسجيل لمرة واحدة 3,000 شلن لكل طالب جديد (تشمل حزمة الزي المدرسي).",
    "fees.note.3": "خصم 10% على الرسوم الدراسية للطالب الثاني وما بعده.",
    "fees.note.4": "النقل يُحسب بشكل منفصل حسب المسار — تواصل مع المكتب للاستفسار.",
    "fees.enquire": "استفسار عن الرسوم",
    "fees.back": "العودة للرئيسية",
    "fees.currency": "شلن",
    "fees.annual.title": "هيكل الرسوم السنوي 2026",
    "fees.annual.body":
      "حمّل أو اعرض هيكل الرسوم للعام كامل (الفصول الثلاثة) في أي وقت — بدون تسجيل وبدون حدود.",
    "fees.annual.download": "تحميل هيكل الرسوم السنوي (CSV)",
    "fees.annual.view": "عرض هيكل الرسوم السنوي",
    "fees.annual.hide": "إخفاء هيكل الرسوم السنوي",
    "fees.annual.term": "لكل فصل",
    "fees.annual.year": "السنة كاملة (٣ فصول)",
  },
} as const;

export type TKey = keyof typeof dict.en;

const STORAGE_KEY = "darulilmi.lang";

type Ctx = { lang: Lang; dir: "ltr" | "rtl"; setLang: (l: Lang) => void; t: (k: TKey) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable — keep in-memory only */
    }
  }, []);

  const t = useCallback((k: TKey) => dict[lang][k] ?? dict.en[k], [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, t }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
