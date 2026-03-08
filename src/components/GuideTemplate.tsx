import { ArrowLeft, ExternalLink, LucideIcon, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AffiliateWidget from '@/components/AffiliateWidget';

interface GuideSection {
  title: string;
  icon: LucideIcon;
  content: string[];
}

interface ToolRecommendation {
  category: string;
  icon: LucideIcon;
  tools: {
    name: string;
    description: string;
    url: string;
    badge?: string;
  }[];
}

interface InternalLink {
  label: string;
  url: string;
}

interface GuideTemplateProps {
  title: string;
  description: string;
  metaDescription: string;
  country: string;
  countrySlug: string;
  icon: LucideIcon;
  sections: GuideSection[];
  affiliateCity?: string;
  affiliateCountryCode?: string;
  toolRecommendations?: ToolRecommendation[];
  internalLinks?: InternalLink[];
  faqs?: FAQItem[];
}

const GuideTemplate = ({
  title,
  description,
  metaDescription,
  country,
  countrySlug,
  icon: MainIcon,
  sections,
  affiliateCity,
  affiliateCountryCode,
  toolRecommendations,
  internalLinks,
  faqs
}: GuideTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={title}
        description={metaDescription}
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: country, url: `/destinations/${countrySlug}` },
          { name: title, url: "" },
        ]}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to={`/destinations/${countrySlug}`} className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à {country}
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <MainIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          {sections.map((section, index) => (
            <Card key={index} className="p-8 mb-8">
              <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
                <section.icon className="w-6 h-6 mr-2 text-ocean" />
                {section.title}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="space-y-3 ml-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}

          {/* Tool Recommendations Section */}
          {toolRecommendations && toolRecommendations.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
                🧰 Outils & Services recommandés
              </h2>
              <div className="space-y-8">
                {toolRecommendations.map((category, catIdx) => (
                  <Card key={catIdx} className="p-8">
                    <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                      <category.icon className="w-5 h-5 mr-2 text-ocean" />
                      {category.category}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {category.tools.map((tool, toolIdx) => (
                        <a
                          key={toolIdx}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                              {tool.badge && (
                                <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{tool.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                        </a>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Internal Links Section */}
          {internalLinks && internalLinks.length > 0 && (
            <Card className="p-8 mb-8 bg-muted/20">
              <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
                <Compass className="w-6 h-6 mr-2 text-ocean" />
                À lire aussi sur Cap sur le Monde
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.url}
                    className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean"
                  >
                    <span className="text-ocean">→</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </Card>
          )}

          {faqs && faqs.length > 0 && (
            <FAQSection faqs={faqs} className="mb-8" />
          )}

          {affiliateCity && affiliateCountryCode && (
            <div className="mt-8">
              <AffiliateWidget 
                title={`🏨 Trouvez votre hébergement au ${country}`}
                description="Réservez votre hôtel ou appartement aux meilleurs prix via notre partenaire Booking.com"
                link={`https://www.booking.com/searchresults.html?ss=${affiliateCity}&lang=fr&aid=2311236`}
                badge="Partenaire officiel"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideTemplate;
