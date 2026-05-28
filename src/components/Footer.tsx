import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const pages = [
    { to: "/", label: t("nav.home") },
    { to: "/regels", label: t("nav.rules") },
    { to: "/inschrijven", label: t("nav.register") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">🤖 Agrobotcompetitie</h3>
            <p className="text-sm opacity-80 leading-relaxed">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">{t("footer.pagesHeading")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className="hover:text-agrobot-mint transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">{t("footer.contactHeading")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📧 info@agrobotcompetitie.nl</li>
              <li>📞 +31 (0)76 123 4567</li>
              <li>📍 Avans Hogeschool, Breda</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Agrobotcompetitie. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
