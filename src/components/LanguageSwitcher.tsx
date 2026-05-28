import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { SUPPORTED_LANGUAGES, type Language } from "@/i18n";

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "nl") as Language;

  return (
    <div
      className={`flex items-center overflow-hidden rounded-md border border-border text-xs font-semibold ${className}`}
      role="group"
      aria-label={t("language.label")}
    >
      <Globe className="ml-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      {SUPPORTED_LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={current === lng}
          className={`px-2.5 py-1.5 uppercase transition-colors ${
            current === lng
              ? "bg-accent/20 text-accent-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
