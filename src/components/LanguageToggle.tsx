import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`inline-flex items-center gap-1 rounded-full border p-1 ${
        light ? "border-white/30 bg-white/10 backdrop-blur" : "border-border bg-secondary/60"
      }`}
    >
      <Languages className={`ms-1.5 h-3.5 w-3.5 ${light ? "text-white/80" : "text-muted-foreground"}`} />
      {(["en", "ar"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : light
                  ? "text-white/85 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l === "en" ? "EN" : "ع"}
          </button>
        );
      })}
    </div>
  );
}
